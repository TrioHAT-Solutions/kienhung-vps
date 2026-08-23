"use client";

import { useState } from "react";
import { Check, HardDrive } from "lucide-react";

export interface StorageOption {
  id: string;
  size: number;
  type: "SSD" | "HDD";
  interface: "NVMe" | "SATA";
  price: number;
  description: string;
}

const storageOptions: StorageOption[] = [
  {
    id: "storage-50",
    size: 50,
    type: "SSD",
    interface: "NVMe",
    price: 200000,
    description: "Lưu trữ cơ bản, tốc độ cao"
  },
  {
    id: "storage-100",
    size: 100,
    type: "SSD",
    interface: "NVMe",
    price: 400000,
    description: "Lưu trữ website trung bình"
  },
  {
    id: "storage-200",
    size: 200,
    type: "SSD",
    interface: "NVMe",
    price: 800000,
    description: "Lưu trữ ứng dụng lớn"
  },
  {
    id: "storage-500",
    size: 500,
    type: "SSD",
    interface: "NVMe",
    price: 1600000,
    description: "Lưu trữ database, file lớn"
  },
  {
    id: "storage-1000",
    size: 1000,
    type: "SSD",
    interface: "NVMe",
    price: 3200000,
    description: "Lưu trữ enterprise"
  }
];

interface StorageSelectorProps {
  selectedStorage: StorageOption | null;
  onStorageSelect: (storage: StorageOption) => void;
}

export function StorageSelector({ selectedStorage, onStorageSelect }: StorageSelectorProps) {
  const [selected, setSelected] = useState(selectedStorage?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <HardDrive className="h-5 w-5 text-[#06b6d4]" />
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">Lưu trữ</h3>
        <span className="px-2 py-0.5 rounded text-[10px] font-[family-name:var(--font-fira-code)] bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/30">
          NVMe PCIe 4.0 Read up to 7,000 MB/s
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storageOptions.map((storage) => (
          <button
            key={storage.id}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              selected === storage.id
                ? "border-[#10b981]/60 bg-[#10b981]/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                : "border-white/8 bg-[#0f172a]/80 hover:border-[#10b981]/20 hover:bg-[#1e293b]/80"
            }`}
            onClick={() => {
              setSelected(storage.id);
              onStorageSelect(storage);
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                {storage.size} GB {storage.type}
              </span>
              {selected === storage.id && (
                <Check className="h-5 w-5 text-[#10b981]" />
              )}
            </div>
            <div className="text-xs text-[#94a3b8] font-[family-name:var(--font-fira-code)] mb-2">{storage.interface}</div>
            <p className="text-sm text-[#94a3b8] mb-3">{storage.description}</p>
            <div className="text-xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
              {storage.price.toLocaleString("vi-VN")}đ
              <span className="text-sm font-normal text-[#94a3b8]">/tháng</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
