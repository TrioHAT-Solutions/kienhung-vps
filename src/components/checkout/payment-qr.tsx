"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Copy, Check, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCheckoutStore, computeCheckoutPricing } from "@/stores/checkout-store";
import { generateVietQR, formatVND, generateTransferContent } from "@/lib/vietqr";

export function PaymentQR() {
  const { config, orderId, setStep } = useCheckoutStore();
  const { total } = computeCheckoutPricing(config);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(900); // 15 minutes
  const [simulated, setSimulated] = useState(false);

  const qrData = generateVietQR(total, orderId);
  const transferContent = generateTransferContent(orderId);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleCopy = async (field: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSimulatePayment = () => {
    setSimulated(true);
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const isExpired = countdown <= 0;

  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-5 w-5 text-cyan-400" />
          Thanh toán VietQR
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Timer */}
        <div className="text-center">
          {isExpired ? (
            <div className="flex items-center justify-center gap-2 text-red-400">
              <AlertCircle className="h-5 w-5" />
              <span>Mã QR đã hết hạn. Vui lòng quay lại tạo mã mới.</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-yellow-400 animate-pulse" />
              <span className="text-3xl font-mono font-bold text-white">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
              <span className="text-sm text-zinc-500">còn lại</span>
            </div>
          )}
        </div>

        {/* QR Image */}
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-xl">
            <img
              src={qrData.qrUrl}
              alt="VietQR Code"
              width={256}
              height={256}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Transfer Info */}
        <div className="space-y-3 bg-black/30 rounded-xl p-4">
          <h4 className="text-sm font-medium text-zinc-400 mb-3">
            Thông tin chuyển khoản
          </h4>

          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Ngân hàng</span>
            <span className="text-white">{qrData.bankName}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Số tài khoản</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono">{qrData.accountNumber}</span>
              <button
                onClick={() => handleCopy("account", qrData.accountNumber)}
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                {copiedField === "account" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Chủ tài khoản</span>
            <span className="text-white text-right text-xs">{qrData.accountName}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Số tiền</span>
            <span className="text-cyan-400 font-bold">{formatVND(qrData.amount)}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Nội dung CK</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-xs">{transferContent}</span>
              <button
                onClick={() => handleCopy("content", transferContent)}
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                {copiedField === "content" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Simulate Button */}
        <div className="space-y-3">
          <Button
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
            onClick={handleSimulatePayment}
            disabled={simulated || isExpired}
          >
            {simulated ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Đang xử lý...
              </div>
            ) : (
              "Mô phỏng đã thanh toán"
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full border-white/10 hover:bg-white/5"
            onClick={() => setStep("info")}
            disabled={simulated}
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại chỉnh sửa
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
