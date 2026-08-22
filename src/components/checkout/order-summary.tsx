"use client";

import { Server, Cpu, HardDrive, MapPin, Monitor, Wifi, Shield, Clock, MemoryStick } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatVND } from "@/lib/vietqr";
import { useCheckoutStore, computeCheckoutPricing } from "@/stores/checkout-store";

export function OrderSummary() {
  const { config } = useCheckoutStore();
  const { monthly, gross, discountRate, discount, total } = computeCheckoutPricing(config);

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
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Server className="h-5 w-5 text-cyan-400" />
          Đơn hàng của bạn
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {items.map((item) =>
            item.value ? (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-zinc-400">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                <span className="text-zinc-200">{item.value}</span>
              </div>
            ) : null
          )}
        </div>

        {selectedAddOns.length > 0 && (
          <>
            <div className="h-px bg-white/10" />
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Shield className="h-4 w-4" />
                <span>Add-ons</span>
              </div>
              {selectedAddOns.map((addOn) => (
                <div key={addOn.id} className="flex justify-between text-sm pl-6">
                  <span className="text-zinc-400">{addOn.name}</span>
                  <span className="text-zinc-200">{formatVND(addOn.price)}/tháng</span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="h-px bg-white/10" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-400">Tạm tính ({config.duration} tháng)</span>
            <span>{formatVND(gross)}</span>
          </div>
          {discountRate > 0 && (
            <div className="flex justify-between text-emerald-400">
              <span>Giảm giá ({(discountRate * 100).toFixed(0)}%)</span>
              <span>-{formatVND(discount)}</span>
            </div>
          )}
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex justify-between items-center">
          <span className="font-semibold">Tổng cộng</span>
          <span className="text-2xl font-bold text-cyan-400">{formatVND(total)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
