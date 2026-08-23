"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SlidersHorizontal, AlertCircle, LayoutGrid, Sliders } from "lucide-react";
import { CpuSelector, type CpuOption } from "@/components/vps-configurator/cpu-selector";
import { MemorySelector, type MemoryOption } from "@/components/vps-configurator/memory-selector";
import { StorageSelector, type StorageOption } from "@/components/vps-configurator/storage-selector";
import { OsSelector, type OsOption } from "@/components/vps-configurator/os-selector";
import { LocationSelector, type LocationOption } from "@/components/vps-configurator/location-selector";
import { BandwidthSelector, type BandwidthOption } from "@/components/vps-configurator/bandwidth-selector";
import { AddOnsSelector, type AddOnOption } from "@/components/vps-configurator/add-ons-selector";
import { PriceSummary } from "@/components/vps-configurator/price-summary";
import { CustomSliderConfigurator } from "@/components/vps-configurator/custom-slider-configurator";
import { Button } from "@/components/ui/button";
import {
  calculatePricing,
  calculateTotal,
  getDurationOptions,
} from "@/lib/pricing-engine";
import { useCheckoutStore } from "@/stores/checkout-store";

const durationOptions = getDurationOptions();

export default function ConfigurePage() {
  const router = useRouter();
  const setConfig = useCheckoutStore((s) => s.setConfig);
  const setStep = useCheckoutStore((s) => s.setStep);

  const [configMode, setConfigMode] = useState<"slider" | "blocks">("slider");
  const [cpu, setCpu] = useState<CpuOption | null>(null);
  const [ram, setRam] = useState<MemoryOption | null>(null);
  const [storage, setStorage] = useState<StorageOption | null>(null);
  const [os, setOs] = useState<OsOption | null>(null);
  const [location, setLocation] = useState<LocationOption | null>(null);
  const [bandwidth, setBandwidth] = useState<BandwidthOption | null>(null);
  const [addOns, setAddOns] = useState<AddOnOption[]>([]);
  const [duration, setDuration] = useState(1);
  const [showError, setShowError] = useState(false);

  const configForPricing = {
    cpu: cpu ? { price: cpu.price } : undefined,
    memory: ram ? { price: ram.price } : undefined,
    storage: storage ? { price: storage.price } : undefined,
    bandwidth: bandwidth ? { price: bandwidth.price } : undefined,
    location: location ? { price: location.price } : undefined,
    os: os ? { price: os.price } : undefined,
    addOns: addOns.map((a) => ({ price: a.price })),
  };

  const pricing = calculatePricing(configForPricing);
  const totals = calculateTotal(configForPricing, duration);

  const toggleAddOn = (addOn: AddOnOption) => {
    setAddOns((prev) =>
      prev.some((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  const handleCheckout = () => {
    if (!cpu || !ram || !storage) {
      setShowError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setConfig({
      cpu: { id: cpu.id, cores: cpu.cores, price: cpu.price },
      ram: { id: ram.id, gb: ram.ram, price: ram.price },
      storage: { id: storage.id, gb: storage.size, price: storage.price },
      os: os
        ? { id: os.id, name: `${os.name} ${os.version}`, price: os.price }
        : null,
      datacenter: location
        ? { id: location.id, name: `${location.city}, ${location.country}`, price: location.price }
        : null,
      bandwidth: bandwidth
        ? {
            id: bandwidth.id,
            label: bandwidth.unlimited
              ? "Không giới hạn"
              : `${bandwidth.bandwidth} ${bandwidth.type}`,
            price: bandwidth.price,
          }
        : null,
      addOns: addOns.map((a) => ({ id: a.id, name: a.name, price: a.price })),
      duration,
    });
    setStep("info");
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 backdrop-blur-sm border border-[#10b981]/20 mb-4">
            <SlidersHorizontal className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs text-[#10b981] font-semibold font-[family-name:var(--font-dm-sans)]">
              Khởi Tạo Máy Chủ Theo Yêu Cầu
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)] text-white">
            Cấu Hình <span className="text-[#10b981]">Cloud VPS</span>
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            Lựa chọn thông số máy chủ phù hợp — giá được tính tức thì theo từng lựa chọn với chiết khấu lên đến 35%.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#0f172a] border border-white/8 gap-2">
            <button
              type="button"
              onClick={() => setConfigMode("slider")}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                configMode === "slider"
                  ? "bg-[#10b981] text-[#022c22] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "text-[#94a3b8] hover:text-white hover:bg-white/5"
              }`}
            >
              <Sliders className="h-4 w-4" />
              <span>Tự Chỉnh Bằng Thanh Trượt</span>
            </button>

            <button
              type="button"
              onClick={() => setConfigMode("blocks")}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                configMode === "blocks"
                  ? "bg-[#10b981] text-[#022c22] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "text-[#94a3b8] hover:text-white hover:bg-white/5"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Chọn Theo Từng Linh Kiện</span>
            </button>
          </div>
        </div>

        {/* Content based on configMode */}
        {configMode === "slider" ? (
          <CustomSliderConfigurator />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Selectors */}
            <div className="lg:col-span-2 space-y-10">
              <CpuSelector selectedCpu={cpu} onCpuSelect={setCpu} />
              <MemorySelector selectedMemory={ram} onMemorySelect={setRam} />
              <StorageSelector selectedStorage={storage} onStorageSelect={setStorage} />
              <OsSelector selectedOs={os} onOsSelect={setOs} />
              <LocationSelector selectedLocation={location} onLocationSelect={setLocation} />
              <BandwidthSelector selectedBandwidth={bandwidth} onBandwidthSelect={setBandwidth} />
              <AddOnsSelector selectedAddOns={addOns} onAddOnToggle={toggleAddOn} />

              {/* Duration */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">
                  Thời hạn thuê
                </h3>
                <div className="flex flex-wrap gap-2">
                  {durationOptions.map((opt) => (
                    <Button
                      key={opt.value}
                      variant={duration === opt.value ? "default" : "outline"}
                      onClick={() => setDuration(opt.value)}
                      className={
                        duration === opt.value
                          ? "bg-[#10b981] text-[#022c22] hover:bg-[#10b981]/90 font-bold"
                          : "border-white/10 hover:bg-white/5 text-[#94a3b8] hover:text-white"
                      }
                    >
                      {opt.label}
                      {opt.discount > 0 && (
                        <span className="ml-2 text-xs text-[#10b981]">
                          -{opt.discount}%
                        </span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div>
              {showError && (!cpu || !ram || !storage) && (
                <div className="mb-4 flex items-start gap-2 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Vui lòng chọn CPU, RAM và Lưu trữ để tiếp tục.</span>
                </div>
              )}
              <PriceSummary
                pricing={pricing}
                selectedDuration={duration}
                durationDiscount={totals.durationDiscount}
                promoDiscount={totals.promoDiscount}
                totalBeforeDiscount={totals.totalBeforeDiscount}
                totalAfterDiscount={totals.totalAfterDiscount}
                savings={totals.savings}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
