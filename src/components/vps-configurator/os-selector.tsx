"use client";

import { useState } from "react";
import { Check, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OsOption {
  id: string;
  name: string;
  version: string;
  type: "linux" | "windows";
  price: number;
  description: string;
  features: string[];
  icon?: string;
}

const osOptions: OsOption[] = [
  {
    id: "ubuntu-22",
    name: "Ubuntu",
    version: "22.04 LTS",
    type: "linux",
    price: 0,
    description: "Server Linux phổ biến nhất",
    features: ["Hỗ trợ dài hạn", "Document đầy đủ", "Cộng đồng lớn"]
  },
  {
    id: "centos-8",
    name: "CentOS",
    version: "8 Stream",
    type: "linux",
    price: 0,
    description: "Enterprise Linux",
    features: ["Ổn định cao", "RHEL compatible", "Phù hợp production"]
  },
  {
    id: "debian-11",
    name: "Debian",
    version: "11 Bullseye",
    type: "linux",
    price: 0,
    description: "Linux ổn định",
    features: ["Gói phần mềm đa dạng", "Bảo mật tốt", "Dễ quản lý"]
  },
  {
    id: "windows-2019",
    name: "Windows Server",
    version: "2019",
    type: "windows",
    price: 500000,
    description: "Windows Server cho ứng dụng .NET",
    features: ["Hỗ trợ .NET", "Remote Desktop", "Active Directory"]
  },
  {
    id: "windows-2022",
    name: "Windows Server",
    version: "2022",
    type: "windows",
    price: 750000,
    description: "Windows Server mới nhất",
    features: ["Bảo mật nâng cao", "Container support", "Latest features"]
  },
  {
    id: "custom",
    name: "Tùy chọn",
    version: "ISO Upload",
    type: "linux",
    price: 0,
    description: "Tải ISO tùy chỉnh",
    features: ["Full control", "Any OS", "Custom setup"]
  }
];

interface OsSelectorProps {
  selectedOs: OsOption | null;
  onOsSelect: (os: OsOption) => void;
}

export function OsSelector({ selectedOs, onOsSelect }: OsSelectorProps) {
  const [selected, setSelected] = useState(selectedOs?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Monitor className="h-5 w-5 text-indigo-400" />
        <h3 className="text-lg font-semibold">Hệ điều hành</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {osOptions.map((os) => (
          <Card
            key={os.id}
            className={`cursor-pointer transition-all ${
              selected === os.id
                ? "ring-2 ring-indigo-500 bg-indigo-500/10"
                : "hover:bg-white/5"
            }`}
            onClick={() => {
              setSelected(os.id);
              onOsSelect(os);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{os.name}</CardTitle>
                {selected === os.id && (
                  <Check className="h-5 w-5 text-indigo-400" />
                )}
              </div>
              <CardDescription>{os.version}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {os.description}
              </p>
              <div className="space-y-2">
                {os.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              {os.price > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-sm font-bold text-indigo-400">
                    +{os.price.toLocaleString("vi-VN")}đ/tháng
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}