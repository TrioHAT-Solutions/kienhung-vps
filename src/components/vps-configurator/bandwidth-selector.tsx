"use client";

import { useState } from "react";
import { Check, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface BandwidthOption {
  id: string;
  bandwidth: number;
  type: "GB" | "TB";
  price: number;
  description: string;
  unlimited: boolean;
}

const bandwidthOptions: BandwidthOption[] = [
  {
    id: "bw-100",
    bandwidth: 100,
    type: "GB",
    price: 0,
    description: "Bandwidth miễn phí",
    unlimited: false
  },
  {
    id: "bw-500",
    bandwidth: 500,
    type: "GB",
    price: 100000,
    description: "Phù hợp website trung bình",
    unlimited: false
  },
  {
    id: "bw-1000",
    bandwidth: 1000,
    type: "GB",
    price: 200000,
    description: "Phù hợp ứng dụng lớn",
    unlimited: false
  },
  {
    id: "bw-unlimited",
    bandwidth: 0,
    type: "TB",
    price: 500000,
    description: "Bandwidth không giới hạn",
    unlimited: true
  }
];

interface BandwidthSelectorProps {
  selectedBandwidth: BandwidthOption | null;
  onBandwidthSelect: (bandwidth: BandwidthOption) => void;
}

export function BandwidthSelector({ selectedBandwidth, onBandwidthSelect }: BandwidthSelectorProps) {
  const [selected, setSelected] = useState(selectedBandwidth?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-orange-400" />
        <h3 className="text-lg font-semibold">Bandwidth</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bandwidthOptions.map((bw) => (
          <Card
            key={bw.id}
            className={`cursor-pointer transition-all ${
              selected === bw.id
                ? "ring-2 ring-orange-500 bg-orange-500/10"
                : "hover:bg-white/5"
            }`}
            onClick={() => {
              setSelected(bw.id);
              onBandwidthSelect(bw);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {bw.unlimited ? "Không giới hạn" : `${bw.bandwidth} ${bw.type}`}
                </CardTitle>
                {selected === bw.id && (
                  <Check className="h-5 w-5 text-orange-400" />
                )}
              </div>
              <CardDescription>
                {bw.price === 0 ? "Miễn phí" : `+${bw.price.toLocaleString("vi-VN")}đ/tháng`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {bw.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}