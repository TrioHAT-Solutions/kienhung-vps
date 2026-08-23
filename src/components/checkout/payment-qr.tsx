"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, Copy, Check, Clock, AlertCircle } from "lucide-react";
import { useCheckoutStore, computeCheckoutPricing } from "@/stores/checkout-store";
import { generateVietQR, formatVND, generateTransferContent } from "@/lib/vietqr";

function CopyRow({ label, value, field }: { label: string; value: string; field: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#1e293b]/50 border border-white/5">
      <div>
        <div className="text-[11px] text-[#64748b]">{label}</div>
        <div className="text-sm font-[family-name:var(--font-fira-code)] font-bold text-white">{value}</div>
      </div>
      <button
        onClick={handleCopy}
        className="h-8 px-2.5 text-xs text-[#94a3b8] hover:text-white hover:bg-white/5 rounded transition-colors flex items-center gap-1 cursor-pointer"
      >
        {copied ? (
          <span className="text-[#10b981] flex items-center gap-1">
            <Check className="h-3.5 w-3.5" /> Đã chép
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <Copy className="h-3.5 w-3.5" /> Sao chép
          </span>
        )}
      </button>
    </div>
  );
}

export function PaymentQR() {
  const { config, orderId, setStep } = useCheckoutStore();
  const { total } = computeCheckoutPricing(config);
  const [countdown, setCountdown] = useState(900);
  const [simulated, setSimulated] = useState(false);

  const qrData = generateVietQR(total, orderId);
  const transferContent = generateTransferContent(orderId);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

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
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/8">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-[#06b6d4]" />
          Thanh toán VietQR
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <div className="text-center">
          {isExpired ? (
            <div className="flex items-center justify-center gap-2 text-[#ef4444]">
              <AlertCircle className="h-5 w-5" />
              <span>Mã QR đã hết hạn. Vui lòng quay lại tạo mã mới.</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-[#f59e0b] animate-pulse" />
              <span className="text-3xl font-[family-name:var(--font-fira-code)] font-bold text-white">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
              <span className="text-sm text-[#64748b]">còn lại</span>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-xl">
            <Image
              src={qrData.qrUrl}
              alt="VietQR Code"
              width={256}
              height={256}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        <div className="space-y-3 bg-[#1e293b]/50 rounded-xl p-4 border border-white/5">
          <h4 className="text-sm font-medium text-[#94a3b8] mb-3">
            Thông tin chuyển khoản
          </h4>

          <CopyRow label="Ngân hàng" value={qrData.bankName} field="bank" />
          <CopyRow label="Số tài khoản" value={qrData.accountNumber} field="account" />
          <CopyRow label="Chủ tài khoản" value={qrData.accountName} field="owner" />
          <CopyRow label="Số tiền" value={formatVND(qrData.amount)} field="amount" />
          <CopyRow label="Nội dung CK" value={transferContent} field="content" />
        </div>

        <div className="space-y-3">
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
            onClick={handleSimulatePayment}
            disabled={simulated || isExpired}
          >
            {simulated ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-[#022c22]/30 border-t-[#022c22] rounded-full animate-spin" />
                Đang xử lý...
              </div>
            ) : (
              "Tôi đã chuyển khoản"
            )}
          </button>

          <button
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/8 text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-all cursor-pointer"
            onClick={() => setStep("info")}
            disabled={simulated}
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại chỉnh sửa
          </button>
        </div>
      </div>
    </div>
  );
}
