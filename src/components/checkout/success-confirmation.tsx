"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Server, ArrowRight, Copy, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCheckoutStore, computeCheckoutPricing } from "@/stores/checkout-store";
import { formatVND } from "@/lib/vietqr";

export function SuccessConfirmation() {
  const { orderId, customer, config, reset } = useCheckoutStore();
  const { total } = computeCheckoutPricing(config);
  const [showDetails, setShowDetails] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const [mockIP] = useState(() => "103.124.92." + Math.floor(10 + Math.random() * 240));
  const mockSSH = `ssh root@${mockIP} -p 22`;

  return (
    <div className="max-w-lg mx-auto text-center space-y-6">
      {/* Success Animation */}
      <div
        className={`transition-all duration-700 ${
          animate ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="h-14 w-14 text-white" />
        </div>
      </div>

      <div className={`transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <h2 className="text-3xl font-bold text-white mb-2">
          Đặt hàng thành công!
        </h2>
        <p className="text-zinc-400">
          Đơn hàng <span className="text-cyan-400 font-mono font-bold">{orderId}</span> đang được xử lý
        </p>
      </div>

      <Card
        className={`border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm transition-all duration-700 delay-500 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <CardContent className="space-y-4 pt-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-left">
              <span className="text-zinc-500">Khách hàng</span>
              <p className="text-white font-medium">{customer.name}</p>
            </div>
            <div className="text-left">
              <span className="text-zinc-500">Tổng thanh toán</span>
              <p className="text-cyan-400 font-bold">{formatVND(total)}</p>
            </div>
            <div className="text-left">
              <span className="text-zinc-500">Email</span>
              <p className="text-white">{customer.email}</p>
            </div>
            <div className="text-left">
              <span className="text-zinc-500">Điện thoại</span>
              <p className="text-white">{customer.phone}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Server Info Mock */}
      <Card
        className={`border border-white/10 bg-white/5 backdrop-blur-sm text-left transition-all duration-700 delay-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <Server className="h-5 w-5" />
            <span className="font-semibold">Thông tin server (Preview)</span>
          </div>

          <div className="bg-black/40 rounded-lg p-4 space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">IP Address</span>
              <span className="text-white">{mockIP}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">OS</span>
              <span className="text-white">{config.os?.name || "Ubuntu 22.04"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Specs</span>
              <span className="text-white">
                {config.cpu?.cores || 2} vCPU / {config.ram?.gb || 2}GB RAM
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
            onClick={() => setShowDetails(!showDetails)}
          >
            <Terminal className="h-4 w-4" />
            {showDetails ? "Ẩn thông tin SSH" : "Xem thông tin SSH"}
          </Button>

          {showDetails && (
            <div className="bg-black/40 rounded-lg p-3 font-mono text-sm">
              <div className="flex items-center justify-between">
                <code className="text-emerald-400">{mockSSH}</code>
                <button
                  onClick={() => navigator.clipboard.writeText(mockSSH)}
                  className="text-zinc-500 hover:text-cyan-400"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <div
        className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-900 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button
          className="flex-1 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600"
          onClick={() => {
            reset();
            window.location.href = "/";
          }}
        >
          Về trang chủ
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-white/10 hover:bg-white/5"
          onClick={() => {
            reset();
            window.location.href = "/dashboard";
          }}
        >
          Dashboard Preview
        </Button>
      </div>
    </div>
  );
}
