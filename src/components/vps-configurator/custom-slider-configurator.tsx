"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Cpu,
  Layers,
  HardDrive,
  Globe,
  Shield,
  Network,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Server,
} from "lucide-react";
import { useCheckoutStore } from "@/stores/checkout-store";
import { formatPrice } from "@/lib/pricing-engine";

// Price constants per unit / month
const CPU_PRICE_PER_CORE = 60000;
const RAM_PRICE_PER_GB = 45000;
const STORAGE_PRICE_PER_GB = 1500;
const BASE_PRICE = 45000;
const EXTRA_IP_PRICE = 90000;

const OS_OPTIONS = [
  { id: "ubuntu-22", name: "Ubuntu 22.04 LTS", price: 0, tag: "Khuyên dùng" },
  { id: "ubuntu-24", name: "Ubuntu 24.04 LTS", price: 0, tag: "Mới nhất" },
  { id: "debian-12", name: "Debian 12 Bookworm", price: 0, tag: "Ổn định" },
  { id: "almalinux-9", name: "AlmaLinux 9 (RHEL)", price: 0, tag: "Enterprise" },
  { id: "rocky-9", name: "Rocky Linux 9", price: 0, tag: "Enterprise" },
  { id: "windows-2022", name: "Windows Server 2022", price: 150000, tag: "License" },
];

const DURATION_OPTIONS = [
  { months: 1, label: "1 tháng", discount: 0 },
  { months: 3, label: "3 tháng", discount: 0.05 },
  { months: 6, label: "6 tháng", discount: 0.1 },
  { months: 12, label: "12 tháng", discount: 0.15, popular: true },
  { months: 24, label: "24 tháng", discount: 0.25 },
  { months: 36, label: "36 tháng", discount: 0.35 },
];

const ADDON_OPTIONS = [
  { id: "backup-auto", name: "Sao lưu tự động hàng ngày (Daily Backup)", price: 60000 },
  { id: "ddos-pro", name: "Bảo vệ chống DDoS Chuyên Dụng 500 Gbps", price: 120000 },
  { id: "managed-vip", name: "Dịch vụ Quản trị Máy chủ VIP 24/7", price: 250000 },
];

export function CustomSliderConfigurator() {
  const router = useRouter();
  const setConfig = useCheckoutStore((s) => s.setConfig);
  const setStep = useCheckoutStore((s) => s.setStep);

  // Sliders state
  const [cores, setCores] = useState<number>(2);
  const [ramGb, setRamGb] = useState<number>(4);
  const [storageGb, setStorageGb] = useState<number>(60);
  const [extraIps, setExtraIps] = useState<number>(0);
  const [selectedOs, setSelectedOs] = useState<typeof OS_OPTIONS[0]>(OS_OPTIONS[0]);
  const [duration, setDuration] = useState<number>(12);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["backup-auto"]);

  // Calculate pricing
  const cpuPrice = cores * CPU_PRICE_PER_CORE;
  const ramPrice = ramGb * RAM_PRICE_PER_GB;
  const storagePrice = storageGb * STORAGE_PRICE_PER_GB;
  const osPrice = selectedOs.price;
  const ipPrice = extraIps * EXTRA_IP_PRICE;
  const addonsPrice = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const monthlyBase = BASE_PRICE + cpuPrice + ramPrice + storagePrice + osPrice + ipPrice + addonsPrice;
  const durationOption = DURATION_OPTIONS.find((d) => d.months === duration) || DURATION_OPTIONS[0];
  const totalGross = monthlyBase * duration;
  const discountAmount = Math.round(totalGross * durationOption.discount);
  const finalTotal = totalGross - discountAmount;
  const effectiveMonthly = Math.round(finalTotal / duration);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    const addonsData = selectedAddons.map((addonId) => {
      const found = ADDON_OPTIONS.find((a) => a.id === addonId);
      return {
        id: addonId,
        name: found?.name ?? addonId,
        price: found?.price ?? 0,
      };
    });

    setConfig({
      cpu: { id: `custom-cpu-${cores}`, cores, price: cpuPrice },
      ram: { id: `custom-ram-${ramGb}`, gb: ramGb, price: ramPrice },
      storage: { id: `custom-storage-${storageGb}`, gb: storageGb, price: storagePrice },
      os: { id: selectedOs.id, name: selectedOs.name, price: selectedOs.price },
      datacenter: { id: "dc-hcm", name: "TP. Hồ Chí Minh (Viettel IDC)", price: 0 },
      bandwidth: { id: "custom-bw", label: "1 Gbps / Không giới hạn", price: 0 },
      addOns: addonsData,
      duration,
    });

    setStep("info");
    router.push("/checkout");
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl border border-[#10b981]/20 bg-gradient-to-r from-[#0f172a] via-[#132337] to-[#0f172a] backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-5 w-5 text-[#10b981]" />
            <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
              Tự Do Tùy Chỉnh Cấu Hình VPS (Custom Slider)
            </h2>
          </div>
          <p className="text-xs text-[#94a3b8]">
            Kéo thanh trượt để chọn chính xác số vCPU, RAM, ổ cứng NVMe và hệ điều hành theo đúng nhu cầu dự án của bạn.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-xs font-semibold text-[#10b981] shrink-0">
          <Zap className="h-4 w-4" />
          <span>Kích hoạt trong 60 giây</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sliders Area (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* 1. vCPU Slider */}
          <div className="p-6 rounded-2xl border border-white/8 bg-[#0f172a]/90 backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981]">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                    Số Lượng Vi Xử Lý (vCPU)
                  </h3>
                  <p className="text-xs text-[#94a3b8]">AMD EPYC™ Gen 4 / Intel Xeon Gold 3.5GHz Turbo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCores((c) => Math.max(1, c - 1))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Giảm 1 core"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white tabular-nums w-20 text-center">
                  {cores} <span className="text-xs text-[#10b981] font-normal">Core</span>
                </span>
                <button
                  type="button"
                  onClick={() => setCores((c) => Math.min(32, c + 1))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Tăng 1 core"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="pt-2">
              <input
                type="range"
                min={1}
                max={32}
                step={1}
                value={cores}
                onChange={(e) => setCores(Number(e.target.value))}
                className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer accent-[#10b981]"
              />
              <div className="flex justify-between text-[11px] text-[#64748b] font-mono mt-1">
                <span>1 Core</span>
                <span>8 Cores</span>
                <span>16 Cores</span>
                <span>32 Cores</span>
              </div>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[1, 2, 4, 8, 16, 32].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCores(c)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    cores === c
                      ? "bg-[#10b981] text-[#022c22] font-bold"
                      : "bg-[#1e293b] text-[#94a3b8] hover:text-white"
                  }`}
                >
                  {c} Cores
                </button>
              ))}
            </div>
          </div>

          {/* 2. RAM Slider */}
          <div className="p-6 rounded-2xl border border-white/8 bg-[#0f172a]/90 backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4]">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                    Bộ Nhớ RAM (DDR4 / DDR5 ECC)
                  </h3>
                  <p className="text-xs text-[#94a3b8]">RAM máy chủ ECC Registered chống lỗi bộ nhớ</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setRamGb((r) => Math.max(1, r - 1))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Giảm 1 GB RAM"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white tabular-nums w-20 text-center">
                  {ramGb} <span className="text-xs text-[#06b6d4] font-normal">GB</span>
                </span>
                <button
                  type="button"
                  onClick={() => setRamGb((r) => Math.min(64, r + 1))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Tăng 1 GB RAM"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="pt-2">
              <input
                type="range"
                min={1}
                max={64}
                step={1}
                value={ramGb}
                onChange={(e) => setRamGb(Number(e.target.value))}
                className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer accent-[#06b6d4]"
              />
              <div className="flex justify-between text-[11px] text-[#64748b] font-mono mt-1">
                <span>1 GB</span>
                <span>16 GB</span>
                <span>32 GB</span>
                <span>64 GB</span>
              </div>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[2, 4, 8, 16, 32, 64].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRamGb(r)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    ramGb === r
                      ? "bg-[#06b6d4] text-[#080c14] font-bold"
                      : "bg-[#1e293b] text-[#94a3b8] hover:text-white"
                  }`}
                >
                  {r} GB RAM
                </button>
              ))}
            </div>
          </div>

          {/* 3. Storage NVMe Slider */}
          <div className="p-6 rounded-2xl border border-white/8 bg-[#0f172a]/90 backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6]">
                  <HardDrive className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                    Dung Lượng Ổ Cứng (SSD NVMe Gen 4)
                  </h3>
                  <p className="text-xs text-[#94a3b8]">Tốc độ đọc ghi lên tới 7,000 MB/s, RAID 10 dự phòng</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStorageGb((s) => Math.max(20, s - 10))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Giảm 10 GB lưu trữ"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white tabular-nums w-24 text-center">
                  {storageGb} <span className="text-xs text-[#8b5cf6] font-normal">GB</span>
                </span>
                <button
                  type="button"
                  onClick={() => setStorageGb((s) => Math.min(1000, s + 10))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Tăng 10 GB lưu trữ"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="pt-2">
              <input
                type="range"
                min={20}
                max={1000}
                step={10}
                value={storageGb}
                onChange={(e) => setStorageGb(Number(e.target.value))}
                className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer accent-[#8b5cf6]"
              />
              <div className="flex justify-between text-[11px] text-[#64748b] font-mono mt-1">
                <span>20 GB</span>
                <span>250 GB</span>
                <span>500 GB</span>
                <span>1000 GB (1TB)</span>
              </div>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[30, 60, 100, 200, 500, 1000].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStorageGb(s)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    storageGb === s
                      ? "bg-[#8b5cf6] text-white font-bold"
                      : "bg-[#1e293b] text-[#94a3b8] hover:text-white"
                  }`}
                >
                  {s >= 1000 ? "1 TB" : `${s} GB`}
                </button>
              ))}
            </div>
          </div>

          {/* 4. OS Selection */}
          <div className="p-6 rounded-2xl border border-white/8 bg-[#0f172a]/90 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#10b981]" />
              <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Chọn Hệ Điều Hành (OS)
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {OS_OPTIONS.map((os) => (
                <button
                  key={os.id}
                  type="button"
                  onClick={() => setSelectedOs(os)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedOs.id === os.id
                      ? "bg-[#10b981]/10 border-[#10b981] ring-1 ring-[#10b981]/30"
                      : "bg-[#1e293b]/60 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">{os.name}</span>
                    {selectedOs.id === os.id && <Check className="h-4 w-4 text-[#10b981]" />}
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#94a3b8]">{os.tag}</span>
                    <span className="font-mono text-[#10b981]">
                      {os.price > 0 ? `+${formatPrice(os.price)}` : "Miễn phí"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Extra IPv4 & Network */}
          <div className="p-6 rounded-2xl border border-white/8 bg-[#0f172a]/90 backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b]">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                    Địa Chỉ IPv4 Riêng
                  </h3>
                  <p className="text-xs text-[#94a3b8]">Mặc định miễn phí 1 IPv4 tĩnh sạch tại Datacenter TP.HCM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setExtraIps((i) => Math.max(0, i - 1))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Giảm IP bổ sung"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-white tabular-nums w-24 text-center">
                  {1 + extraIps} <span className="text-xs text-[#f59e0b] font-normal">IPv4</span>
                </span>
                <button
                  type="button"
                  onClick={() => setExtraIps((i) => Math.min(4, i + 1))}
                  className="h-8 w-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Tăng IP bổ sung"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 6. Addon Services */}
          <div className="p-6 rounded-2xl border border-white/8 bg-[#0f172a]/90 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#10b981]" />
              <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Dịch Vụ Bổ Sung (Add-ons)
              </h3>
            </div>

            <div className="space-y-2.5">
              {ADDON_OPTIONS.map((addon) => {
                const checked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      checked
                        ? "bg-[#10b981]/10 border-[#10b981]/40"
                        : "bg-[#1e293b]/40 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-5 w-5 rounded flex items-center justify-center border transition-all ${
                          checked
                            ? "bg-[#10b981] border-[#10b981] text-[#022c22]"
                            : "border-white/20 bg-transparent"
                        }`}
                      >
                        {checked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium text-white">{addon.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#10b981] shrink-0">
                      +{formatPrice(addon.price)}/tháng
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Summary Card (1 Col Sticky) */}
        <div>
          <div className="sticky top-24 space-y-6">
            <div className="p-6 rounded-2xl border border-[#10b981]/30 bg-[#0f172a] shadow-2xl backdrop-blur-xl space-y-6">
              <div>
                <span className="text-xs text-[#10b981] font-semibold uppercase tracking-wider block mb-1">
                  Bảng Tính Giá Tức Thì
                </span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  Tóm Tắt Cấu Hình
                </h3>
              </div>

              {/* Spec Overview List */}
              <div className="space-y-3 py-4 border-y border-white/8 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Vi xử lý:</span>
                  <span className="text-white font-mono font-bold">{cores} vCPU Cores</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Bộ nhớ:</span>
                  <span className="text-white font-mono font-bold">{ramGb} GB RAM DDR4/DDR5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Lưu trữ:</span>
                  <span className="text-white font-mono font-bold">{storageGb} GB NVMe SSD</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Hệ điều hành:</span>
                  <span className="text-white font-medium truncate max-w-[150px]">{selectedOs.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Địa chỉ IP:</span>
                  <span className="text-white font-mono">{1 + extraIps} IPv4 Dedicated</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Datacenter:</span>
                  <span className="text-white">TP. Hồ Chí Minh</span>
                </div>
              </div>

              {/* Duration selector */}
              <div>
                <label className="text-xs text-[#94a3b8] block mb-2 font-medium">
                  Chu Kỳ Thanh Toán:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {DURATION_OPTIONS.map((opt) => (
                    <button
                      key={opt.months}
                      type="button"
                      onClick={() => setDuration(opt.months)}
                      className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                        duration === opt.months
                          ? "bg-[#10b981] border-[#10b981] text-[#022c22] font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                          : "bg-[#1e293b] border-white/5 text-white hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs">{opt.label}</div>
                      {opt.discount > 0 && (
                        <div
                          className={`text-[10px] font-mono ${
                            duration === opt.months ? "text-[#022c22] font-bold" : "text-[#10b981]"
                          }`}
                        >
                          -{opt.discount * 100}%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#94a3b8]">
                  <span>Giá gốc ({duration} tháng):</span>
                  <span className="font-mono line-through">{formatPrice(totalGross)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex items-center justify-between text-[#10b981] font-semibold">
                    <span>Tiết kiệm chiết khấu:</span>
                    <span className="font-mono">-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-white font-bold">Tổng thanh toán:</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#10b981]">
                      {formatPrice(finalTotal)}
                    </div>
                    <div className="text-[11px] text-[#64748b]">
                      ~ {formatPrice(effectiveMonthly)}/tháng
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-bold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Đăng Ký Cấu Hình Này</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-1.5 text-[11px] text-[#64748b]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10b981]" />
                  <span>Kích hoạt tự động qua cổng VietQR</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10b981]" />
                  <span>Hoàn tiền 100% trong 7 ngày nếu không hài lòng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
