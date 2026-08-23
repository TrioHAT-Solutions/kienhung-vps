"use client";

import { Server, Cpu, HardDrive, MapPin, Monitor, Wifi, Shield, Clock, MemoryStick } from "lucide-react";
import { formatVND } from "@/lib/vietqr";
import { useCheckoutStore, computeCheckoutPricing } from "@/stores/checkout-store";

export function OrderSummary() {
  const { config } = useCheckoutStore();
  const { gross, discountRate, discount, total } = computeCheckoutPricing(config);

  const items = [
    { icon: Cpu, label: "CPU", value: config.cpu ? `${config.cpu.cores} vCPU Core` : null },
    { icon: MemoryStick, label: "RAM", value: config.ram ? `${config.ram.gb}GB DDR4` : null },
    { icon: HardDrive, label: "Lưu trữ", value: config.storage ? `${config.storage.gb}GB NVMe SSD` : null },
    { icon: Monitor, label: "Hệ điều hành", value: config.os?.name },
    { icon: MapPin, label: "Datacenter", value: config.datacenter?.name },
    { icon: Wifi, label: "Bandwidth", value: config.bandwidth?.label ?? null },
    { icon: Clock, label: "Thời hạn", value: `${config.duration} tháng` },
  ];

  const selectedAddOns = config.addOns.filter((a) => a.price > 0);

  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/8">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white flex items-center gap-2">
          <Server className="h-5 w-5 text-[#06b6d4]" />
          Đơn hàng của bạn
        </h3>
      </div>

      <div className="p-5 space-y-4">
        <div className="space-y-3">
          {items.map((item) =>
            item.value ? (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                <span className="text-white font-[family-name:var(--font-fira-code)]">{item.value}</span>
              </div>
            ) : null
          )}
        </div>

        {selectedAddOns.length > 0 && (
          <>
            <div className="h-px bg-white/8" />
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                <Shield className="h-4 w-4" />
                <span>Add-ons</span>
              </div>
              {selectedAddOns.map((addOn) => (
                <div key={addOn.id} className="flex justify-between text-sm pl-6">
                  <span className="text-[#94a3b8]">{addOn.name}</span>
                  <span className="text-white font-[family-name:var(--font-fira-code)]">{formatVND(addOn.price)}/tháng</span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="h-px bg-white/8" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#94a3b8]">Tạm tính ({config.duration} tháng)</span>
            <span className="text-white font-[family-name:var(--font-fira-code)]">{formatVND(gross)}</span>
          </div>
          {discountRate > 0 && (
            <div className="flex justify-between text-[#10b981]">
              <span>Giảm giá ({(discountRate * 100).toFixed(0)}%)</span>
              <span className="font-[family-name:var(--font-fira-code)]">-{formatVND(discount)}</span>
            </div>
          )}
        </div>

        <div className="h-px bg-white/8" />

        <div className="flex justify-between items-center">
          <span className="font-semibold text-white">Tổng cộng</span>
          <span className="text-2xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">{formatVND(total)}</span>
        </div>
      </div>
    </div>
  );
}
