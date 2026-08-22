"use client";

import { useState } from "react";
import { Check, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <Cpu className="h-5 w-5 text-cyan-400" />
        <h3 className="text-lg font-semibold">CPU</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cpuOptions.map((cpu) => (
          <Card
            key={cpu.id}
            className={`cursor-pointer transition-all ${
              selected === cpu.id
                ? "ring-2 ring-cyan-500 bg-cyan-500/10"
                : "hover:bg-white/5"
            }`}
            onClick={() => {
              setSelected(cpu.id);
              onCpuSelect(cpu);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{cpu.cores} Cores</CardTitle>
                {selected === cpu.id && (
                  <Check className="h-5 w-5 text-cyan-400" />
                )}
              </div>
              <CardDescription>{cpu.frequency}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {cpu.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-cyan-400">
                  {cpu.price.toLocaleString("vi-VN")}đ
                  <span className="text-sm font-normal text-muted-foreground">
                    /tháng
                  </span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}