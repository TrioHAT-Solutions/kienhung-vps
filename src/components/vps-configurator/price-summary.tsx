"use client";

import { ArrowRight, CreditCard, Shield, Zap } from "lucide-react";
import { formatPrice } from "@/lib/pricing-engine";

interface PriceSummaryProps {
  pricing: {
    basePrice: number;
    cpuPrice: number;
    memoryPrice: number;
    storagePrice: number;
    bandwidthPrice: number;
    locationPrice: number;
    osPrice: number;
    addOnsPrice: number;
    totalMonthly: number;
    totalYearly: number;
  };
  selectedDuration: number;
  durationDiscount: number;
  promoDiscount: number;
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  savings: number;
  onCheckout: () => void;
}

export function PriceSummary({
  pricing,
  selectedDuration,
  durationDiscount,
  promoDiscount,
  totalBeforeDiscount,
  totalAfterDiscount,
  savings,
  onCheckout,
}: PriceSummaryProps) {
  return (
    <div className="sticky top-24">
      <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/8">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">Chi tiết giá</h3>
        </div>

        <div className="p-5 space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">Phần cứng cơ bản</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.basePrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">CPU</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.cpuPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">RAM</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.memoryPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">NVMe Storage</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.storagePrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">Bandwidth</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.bandwidthPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">Vị trí</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.locationPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94a3b8]">Hệ điều hành</span>
              <span className="text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.osPrice)}</span>
            </div>
            {pricing.addOnsPrice > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-[#94a3b8]">Add-ons đã chọn</span>
                <span className="text-white font-[family-name:var(--font-fira-code)]">+{formatPrice(pricing.addOnsPrice)}</span>
              </div>
            )}
          </div>

          <div className="h-px bg-white/8" />

          <div className="flex justify-between">
            <span className="text-[#94a3b8]">Tổng / tháng</span>
            <span className="font-semibold text-white font-[family-name:var(--font-fira-code)]">{formatPrice(pricing.totalMonthly)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-[#94a3b8]">Thời hạn</span>
            <span className="text-white font-[family-name:var(--font-fira-code)]">{selectedDuration} tháng</span>
          </div>

          {durationDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-[#10b981]">Chu kỳ {selectedDuration} tháng (-{(durationDiscount * 100).toFixed(0)}%)</span>
              <span className="text-[#10b981] font-[family-name:var(--font-fira-code)]">-{formatPrice(totalBeforeDiscount * durationDiscount)}</span>
            </div>
          )}

          {promoDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-[#10b981]">Mã giảm giá</span>
              <span className="text-[#10b981] font-[family-name:var(--font-fira-code)]">-{formatPrice(promoDiscount)}</span>
            </div>
          )}

          <div className="h-px bg-white/8" />

          <div className="flex justify-between items-center">
            <span className="font-semibold text-white">Tổng thanh toán</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
                {formatPrice(totalAfterDiscount)}
              </div>
              {savings > 0 && (
                <div className="text-xs text-[#10b981]">
                  Tiết kiệm {formatPrice(savings)}/tháng
                </div>
              )}
            </div>
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
            onClick={onCheckout}
          >
            <CreditCard className="h-4 w-4" />
            Tiến Hành Đặt Hàng
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <Shield className="h-4 w-4 text-[#10b981]" />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <Zap className="h-4 w-4 text-[#06b6d4]" />
              <span>Instant Deploy</span>
            </div>
          </div>

          <div className="text-center text-xs text-[#64748b] mt-4">
            Hoàn tiền trong 7 ngày đầu tiên
          </div>
        </div>
      </div>
    </div>
  );
}
