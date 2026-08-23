"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Server, ArrowRight, Copy, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCheckoutStore, computeCheckoutPricing } from "@/stores/checkout-store";
import { formatVND } from "@/lib/vietqr";

export function SuccessConfirmation() {
  const { orderId, customer, config, reset } = useCheckoutStore();
  const router = useRouter();
  const { total } = computeCheckoutPricing(config);
  const [showDetails, setShowDetails] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [provisionStep, setProvisionStep] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const steps = [1, 2, 3, 4];
    steps.forEach((step, index) => {
      setTimeout(() => setProvisionStep(step), (index + 1) * 750);
    });
  }, [animate]);

  const [mockIP] = useState(() => "103.124.92." + Math.floor(10 + Math.random() * 240));
  const mockSSH = `ssh root@${mockIP} -p 22`;

  const provisionSteps = [
    { label: "Xác nhận giao dịch VietQR hợp lệ", code: `Mã đơn: ${orderId}` },
    { label: "Phân bổ tài nguyên vCPU & RAM ECC", code: "Cụm máy chủ TP. HCM" },
    { label: "Khởi chạy hệ điều hành & cấu hình SSH", code: "Port 22" },
    { label: "Cấp phát IPv4 tĩnh thành công", code: mockIP },
  ];

  return (
    <div className="max-w-lg mx-auto text-center space-y-6">
      <div
        className={`transition-all duration-700 ${
          animate ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div className="w-24 h-24 mx-auto rounded-full bg-[#10b981] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <CheckCircle2 className="h-14 w-14 text-[#022c22]" />
        </div>
      </div>

      <div className={`transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          Đặt hàng thành công!
        </h2>
        <p className="text-[#94a3b8]">
          Đơn hàng <span className="text-[#06b6d4] font-[family-name:var(--font-fira-code)] font-bold">{orderId}</span> đang được xử lý
        </p>
      </div>

      <div
        className={`rounded-xl border border-[#10b981]/30 bg-[#10b981]/5 backdrop-blur-xl p-6 text-left transition-all duration-700 delay-500 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-[#64748b]">Khách hàng</span>
            <p className="text-white font-medium">{customer.name}</p>
          </div>
          <div>
            <span className="text-[#64748b]">Tổng thanh toán</span>
            <p className="text-[#10b981] font-bold font-[family-name:var(--font-fira-code)]">{formatVND(total)}</p>
          </div>
          <div>
            <span className="text-[#64748b]">Email</span>
            <p className="text-white">{customer.email}</p>
          </div>
          <div>
            <span className="text-[#64748b]">Điện thoại</span>
            <p className="text-white">{customer.phone}</p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl p-6 text-left transition-all duration-700 delay-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2 text-[#10b981] mb-4">
          <Server className="h-5 w-5" />
          <span className="font-semibold font-[family-name:var(--font-space-grotesk)]">Live Provisioning</span>
        </div>

        <div className="space-y-3">
          {provisionSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                provisionStep > index
                  ? "bg-[#10b981]/10 border border-[#10b981]/20"
                  : "bg-[#1e293b]/50 border border-white/5"
              }`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                provisionStep > index
                  ? "bg-[#10b981] text-[#022c22]"
                  : "bg-[#1e293b] text-[#64748b] border border-white/8"
              }`}>
                {provisionStep > index ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              <div>
                <p className={`text-sm font-medium ${provisionStep > index ? "text-white" : "text-[#64748b]"}`}>
                  {step.label}
                </p>
                <p className="text-xs text-[#64748b] font-[family-name:var(--font-fira-code)]">{step.code}</p>
              </div>
            </div>
          ))}
        </div>

        {provisionStep >= 4 && (
          <div className="mt-4 p-3 rounded-lg bg-[#1e293b]/50 border border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white font-medium">Thông tin server</p>
                <p className="text-xs text-[#64748b]">IP: <span className="text-[#06b6d4] font-[family-name:var(--font-fira-code)]">{mockIP}</span></p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(mockSSH)}
                className="p-2 rounded-lg hover:bg-white/5 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-900 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
          onClick={() => {
            reset();
            router.push("/");
          }}
        >
          Về trang chủ
          <ArrowRight className="h-4 w-4" />
        </button>
        <button
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/8 text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-all cursor-pointer"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          <Terminal className="h-4 w-4" />
          Dashboard Preview
        </button>
      </div>
    </div>
  );
}
