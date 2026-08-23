"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  plan: {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
    popular?: boolean;
    target?: string;
  };
  billingCycle: "monthly" | "yearly";
  discountRate: number;
}

export function PricingCardRefactored({ plan, billingCycle, discountRate }: PricingCardProps) {
  const displayPrice = billingCycle === "yearly"
    ? Math.round(plan.price * (1 - discountRate))
    : plan.price;

  const yearlySavings = billingCycle === "yearly"
    ? Math.round(plan.price * discountRate * 12)
    : 0;

  return (
    <div
      className={`relative rounded-xl border p-6 transition-all ${
        plan.popular
          ? "border-[#10b981]/50 bg-[#0f172a]/80 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          : "border-white/8 bg-[#0f172a]/80 hover:border-[#10b981]/20"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1 bg-[#10b981] rounded-full text-xs font-semibold text-[#022c22]">
            Phổ biến nhất
          </div>
        </div>
      )}

      <div className={plan.popular ? "pt-4" : ""}>
        <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-1">{plan.name}</h3>
        <p className="text-sm text-[#94a3b8] mb-4">{plan.description}</p>

        {plan.target && (
          <p className="text-xs text-[#64748b] mb-4">{plan.target}</p>
        )}

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
              {displayPrice.toLocaleString("vi-VN")}
            </span>
            <span className="text-[#94a3b8]">đ/tháng</span>
          </div>
          {billingCycle === "yearly" && yearlySavings > 0 && (
            <p className="text-xs text-[#10b981] mt-1">
              Tiết kiệm {yearlySavings.toLocaleString("vi-VN")}đ/năm
            </p>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#10b981] flex-shrink-0" />
              <span className="text-sm text-[#94a3b8]">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/configure?plan=${plan.id}&billing=${billingCycle}`}
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
            plan.popular
              ? "bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              : "bg-[#1e293b] hover:bg-[#1e293b]/80 text-white border border-white/8"
          }`}
        >
          {plan.popular ? "Chọn ngay" : "Chọn gói"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
