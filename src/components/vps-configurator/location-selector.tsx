"use client";

import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LocationOption {
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
    code: "SG",
    price: 0,
    description: "Datacenter tại TP.HCM",
    features: ["Latency thấp nhất", "Hỗ trợ tiếng Việt", "24/7 support"]
  },
  {
    id: "hanoi",
    city: "Hà Nội",
    country: "Việt Nam",
    code: "HN",
    price: 0,
    description: "Datacenter tại Hà Nội",
    features: ["Phục vụ miền Bắc", "Latency thấp", "Backup nhanh"]
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    code: "SGP",
    price: 200000,
    description: "Datacenter Singapore",
    features: ["Kết nối quốc tế", "Cloudflare CDN", "Premium network"]
  },
  {
    id: "japan",
    city: "Tokyo",
    country: "Japan",
    code: "TYO",
    price: 300000,
    description: "Datacenter Tokyo",
    features: ["Gần thị trường Nhật", "Ultra-low latency", "Enterprise-grade"]
  }
];

interface LocationSelectorProps {
  selectedLocation: LocationOption | null;
  onLocationSelect: (location: LocationOption) => void;
}

export function LocationSelector({ selectedLocation, onLocationSelect }: LocationSelectorProps) {
  const [selected, setSelected] = useState(selectedLocation?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-pink-400" />
        <h3 className="text-lg font-semibold">Vị trí Datacenter</h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {locationOptions.map((location) => (
          <Card
            key={location.id}
            className={`cursor-pointer transition-all ${
              selected === location.id
                ? "ring-2 ring-pink-500 bg-pink-500/10"
                : "hover:bg-white/5"
            }`}
            onClick={() => {
              setSelected(location.id);
              onLocationSelect(location);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {location.city}, {location.country}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({location.code})
                  </span>
                </CardTitle>
                {selected === location.id && (
                  <Check className="h-5 w-5 text-pink-400" />
                )}
              </div>
              <CardDescription>
                {location.price === 0 ? "Miễn phí" : `+${location.price.toLocaleString("vi-VN")}đ/tháng`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {location.description}
              </p>
              <div className="space-y-2">
                {location.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
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