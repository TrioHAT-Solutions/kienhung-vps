"use client";

import { useState } from "react";
import { Check, Cpu } from "lucide-react";

export interface CpuOption {
  id: string;
  cores: number;
  frequency: string;
  price: number;
  description: string;
}

const cpuOptions: CpuOption[] = [
  {
    id: "cpu-2",
    cores: 2,
    frequency: "2.4GHz",
    price: 250000,
    description: "Phù hợp website nhỏ, blog"
  },
  {
    id: "cpu-4",
    cores: 4,
    frequency: "2.8GHz",
    price: 450000,
    description: "Phù hợp website trung bình"
  },
  {
    id: "cpu-6",
    cores: 6,
    frequency: "3.0GHz",
    price: 750000,
    description: "Phù hợp ứng dụng web"
  },
  {
    id: "cpu-8",
    cores: 8,
    frequency: "3.2GHz",
    price: 1200000,
    description: "Phù hợp ứng dụng enterprise"
  }
];

interface CpuSelectorProps {
  selectedCpu: CpuOption | null;
  onCpuSelect: (cpu: CpuOption) => void;
}

export function CpuSelector({ selectedCpu, onCpuSelect }: CpuSelectorProps) {
  const [selected, setSelected] = useState(selectedCpu?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Cpu className="h-5 w-5 text-[#06b6d4]" />
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">CPU</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cpuOptions.map((cpu) => (
          <button
            key={cpu.id}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              selected === cpu.id
                ? "border-[#10b981]/60 bg-[#10b981]/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                : "border-white/8 bg-[#0f172a]/80 hover:border-[#10b981]/20 hover:bg-[#1e293b]/80"
            }`}
            onClick={() => {
              setSelected(cpu.id);
              onCpuSelect(cpu);
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-white">{cpu.cores} Cores</span>
              {selected === cpu.id && (
                <Check className="h-5 w-5 text-[#10b981]" />
              )}
            </div>
            <div className="text-xs text-[#94a3b8] font-[family-name:var(--font-fira-code)] mb-2">{cpu.frequency}</div>
            <p className="text-sm text-[#94a3b8] mb-3">{cpu.description}</p>
            <div className="text-xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
              {cpu.price.toLocaleString("vi-VN")}đ
              <span className="text-sm font-normal text-[#94a3b8]">/tháng</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
