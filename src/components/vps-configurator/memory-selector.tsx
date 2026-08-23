"use client";

import { useState } from "react";
import { Check, HardDrive } from "lucide-react";

export interface MemoryOption {
  id: string;
  ram: number;
  type: string;
  price: number;
  description: string;
}

const memoryOptions: MemoryOption[] = [
  {
    id: "ram-2",
    ram: 2,
    type: "DDR4",
    price: 150000,
    description: "Phù hợp website 1-1000 visits/ngày"
  },
  {
    id: "ram-4",
    ram: 4,
    type: "DDR4",
    price: 300000,
    description: "Phù hợp website 1000-5000 visits/ngày"
  },
  {
    id: "ram-8",
    ram: 8,
    type: "DDR4",
    price: 600000,
    description: "Phù hợp website trung bình"
  },
  {
    id: "ram-16",
    ram: 16,
    type: "DDR4",
    price: 1200000,
    description: "Phù hợp ứng dụng yêu cầu cao"
  },
  {
    id: "ram-32",
    ram: 32,
    type: "DDR4",
    price: 2400000,
    description: "Phù hợp ứng dụng enterprise"
  }
];

interface MemorySelectorProps {
  selectedMemory: MemoryOption | null;
  onMemorySelect: (memory: MemoryOption) => void;
}

export function MemorySelector({ selectedMemory, onMemorySelect }: MemorySelectorProps) {
  const [selected, setSelected] = useState(selectedMemory?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <HardDrive className="h-5 w-5 text-[#06b6d4]" />
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">Bộ nhớ RAM</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memoryOptions.map((memory) => (
          <button
            key={memory.id}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              selected === memory.id
                ? "border-[#10b981]/60 bg-[#10b981]/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                : "border-white/8 bg-[#0f172a]/80 hover:border-[#10b981]/20 hover:bg-[#1e293b]/80"
            }`}
            onClick={() => {
              setSelected(memory.id);
              onMemorySelect(memory);
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-white">{memory.ram} GB</span>
              {selected === memory.id && (
                <Check className="h-5 w-5 text-[#10b981]" />
              )}
            </div>
            <div className="text-xs text-[#94a3b8] font-[family-name:var(--font-fira-code)] mb-2">{memory.type}</div>
            <p className="text-sm text-[#94a3b8] mb-3">{memory.description}</p>
            <div className="text-xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
              {memory.price.toLocaleString("vi-VN")}đ
              <span className="text-sm font-normal text-[#94a3b8]">/tháng</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
