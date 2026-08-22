"use client";

import { useState } from "react";
import { Check, HardDrive } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <HardDrive className="h-5 w-5 text-emerald-400" />
        <h3 className="text-lg font-semibold">Lưu trữ</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storageOptions.map((storage) => (
          <Card
            key={storage.id}
            className={`cursor-pointer transition-all ${
              selected === storage.id
                ? "ring-2 ring-emerald-500 bg-emerald-500/10"
                : "hover:bg-white/5"
            }`}
            onClick={() => {
              setSelected(storage.id);
              onStorageSelect(storage);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {storage.size} GB {storage.type}
                </CardTitle>
                {selected === storage.id && (
                  <Check className="h-5 w-5 text-emerald-400" />
                )}
              </div>
              <CardDescription>{storage.interface}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {storage.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-emerald-400">
                  {storage.price.toLocaleString("vi-VN")}đ
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