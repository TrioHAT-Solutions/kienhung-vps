"use client";

import { useState } from "react";
import { Check, HardDrive } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <HardDrive className="h-5 w-5 text-violet-400" />
        <h3 className="text-lg font-semibold">Bộ nhớ RAM</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memoryOptions.map((memory) => (
          <Card
            key={memory.id}
            className={`cursor-pointer transition-all ${
              selected === memory.id
                ? "ring-2 ring-violet-500 bg-violet-500/10"
                : "hover:bg-white/5"
            }`}
            onClick={() => {
              setSelected(memory.id);
              onMemorySelect(memory);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{memory.ram} GB</CardTitle>
                {selected === memory.id && (
                  <Check className="h-5 w-5 text-violet-400" />
                )}
              </div>
              <CardDescription>{memory.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {memory.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-violet-400">
                  {memory.price.toLocaleString("vi-VN")}đ
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