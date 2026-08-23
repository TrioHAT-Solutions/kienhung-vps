"use client";

import { Check } from "lucide-react";

interface Step {
  id: string;
  label: string;
  description: string;
}

const steps: Step[] = [
  { id: "info", label: "Thông tin", description: "Nhập thông tin khách hàng" },
  { id: "payment", label: "Thanh toán", description: "Quét mã VietQR" },
  { id: "success", label: "Hoàn thành", description: "Xác nhận đơn hàng" },
];

interface ProgressIndicatorProps {
  currentStep: string;
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentIndex;
          const isCompleted = index < currentIndex;

          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-[#10b981] text-[#022c22]"
                      : isActive
                      ? "bg-[#10b981] text-[#022c22] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "bg-[#1e293b] text-[#64748b] border border-white/8"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div
                    className={`text-sm font-medium ${
                      isActive ? "text-white" : "text-[#64748b]"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div className="text-xs text-[#64748b] hidden sm:block">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4 mt-[-20px]">
                  <div
                    className={`h-0.5 rounded-full transition-all duration-500 ${
                      index < currentIndex
                        ? "bg-[#10b981]"
                        : index === currentIndex
                        ? "bg-[#10b981]"
                        : "bg-[#1e293b]"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
