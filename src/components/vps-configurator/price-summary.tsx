"use client";

import { ArrowRight, CreditCard, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPrice, formatPriceNumber } from "@/lib/pricing-engine";

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
      <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Chi tiết giá</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Price Breakdown */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Giá cơ bản</span>
              <span>{formatPrice(pricing.basePrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">CPU</span>
              <span>{formatPrice(pricing.cpuPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">RAM</span>
              <span>{formatPrice(pricing.memoryPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Lưu trữ</span>
              <span>{formatPrice(pricing.storagePrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Bandwidth</span>
              <span>{formatPrice(pricing.bandwidthPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Vị trí</span>
              <span>{formatPrice(pricing.locationPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Hệ điều hành</span>
              <span>{formatPrice(pricing.osPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Add-ons</span>
              <span>{formatPrice(pricing.addOnsPrice)}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Subtotal */}
          <div className="flex justify-between">
            <span className="text-zinc-400">Tổng / tháng</span>
            <span className="font-semibold">{formatPrice(pricing.totalMonthly)}</span>
          </div>

          {/* Duration */}
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Thời hạn</span>
            <span>{selectedDuration} tháng</span>
          </div>

          {/* Discount */}
          {durationDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-emerald-400">Giảm giá ({(durationDiscount * 100).toFixed(0)}%)</span>
              <span className="text-emerald-400">-{formatPrice(totalBeforeDiscount * durationDiscount)}</span>
            </div>
          )}

          {promoDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-emerald-400">Mã giảm giá</span>
              <span className="text-emerald-400">-{formatPrice(promoDiscount)}</span>
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Tổng cộng</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-400">
                {formatPrice(totalAfterDiscount)}
              </div>
              {savings > 0 && (
                <div className="text-xs text-emerald-400">
                  Tiết kiệm {formatPrice(savings)}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600"
            onClick={onCheckout}
          >
            <CreditCard className="h-4 w-4" />
            Thanh toán ngay
            <ArrowRight className="h-4 w-4" />
          </Button>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span>Instant Deploy</span>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center text-xs text-zinc-500 mt-4">
            Hoàn tiền trong 7 ngày đầu tiên
          </div>
        </CardContent>
      </Card>
    </div>
  );
}