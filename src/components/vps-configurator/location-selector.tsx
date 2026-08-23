"use client";

import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface LocationOption {
  id: string;
  city: string;
  country: string;
  code: string;
  price: number;
  description: string;
  features: string[];
}

const locationOptions: LocationOption[] = [
  {
    id: "hcm",
    city: "TP. Hồ Chí Minh",
    country: "Việt Nam",
    code: "SGN",
    price: 0,
    description: "Datacenter Tier 3 tại TP.HCM (Viettel / VNPT IDC)",
    features: ["Độ trễ thấp nhất (< 5ms)", "Băng thông trong nước 1Gbps", "Hỗ trợ kỹ thuật 24/7"],
  },
];

interface LocationSelectorProps {
  selectedLocation: LocationOption | null;
  onLocationSelect: (location: LocationOption) => void;
}

export function LocationSelector({ selectedLocation, onLocationSelect }: LocationSelectorProps) {
  const [selected, setSelected] = useState(selectedLocation?.id ?? "hcm");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-[#10b981]" />
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">
          Vị trí Datacenter
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {locationOptions.map((location) => (
          <Card
            key={location.id}
            className={`cursor-pointer transition-all border ${
              selected === location.id
                ? "border-[#10b981] bg-[#10b981]/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                : "border-white/8 bg-[#0f172a]/80 hover:bg-[#0f172a]"
            }`}
            onClick={() => {
              setSelected(location.id);
              onLocationSelect(location);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  {location.city}, {location.country}
                  <span className="text-xs text-[#10b981] font-[family-name:var(--font-fira-code)] ml-2">
                    ({location.code})
                  </span>
                </CardTitle>
                <div className="h-5 w-5 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-[#10b981]" />
                </div>
              </div>
              <CardDescription className="text-xs text-[#10b981]">
                {location.price === 0 ? "Bao gồm trong gói (Miễn phí)" : `+${location.price.toLocaleString("vi-VN")}đ/tháng`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#94a3b8] mb-3">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {location.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e293b] border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-[11px] text-[#94a3b8]">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}