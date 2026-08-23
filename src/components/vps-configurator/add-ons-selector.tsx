"use client";

import { useState } from "react";
import { Check, Plus, Shield, Database, Zap, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["all", "backup", "security", "performance", "monitoring"] as const;
type Category = (typeof CATEGORIES)[number];

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: LucideIcon;
  features: string[];
  category: Exclude<Category, "all">;
}

const addOnOptions: AddOnOption[] = [
  {
    id: "auto-backup",
    name: "Backup tự động",
    description: "Backup hàng ngày giữ 7 bản",
    price: 150000,
    icon: Database,
    features: ["Daily backups", "7 days retention", "One-click restore"],
    category: "backup"
  },
  {
    id: "ddos-protection",
    name: "Bảo vệ DDoS",
    description: "Tự động chặn tấn công DDoS",
    price: 200000,
    icon: Shield,
    features: ["10Gbps protection", "Real-time monitoring", "Auto mitigation"],
    category: "security"
  },
  {
    id: "ssl-certificate",
    name: "SSL Certificate",
    description: "Let's Encrypt SSL miễn phí",
    price: 0,
    icon: Shield,
    features: ["Free SSL", "Auto-renewal", "HTTPS enabled"],
    category: "security"
  },
  {
    id: "cdn",
    name: "Cloudflare CDN",
    description: "Tăng tốc toàn cầu",
    price: 100000,
    icon: Zap,
    features: ["Global CDN", "DDoS protection", "Caching edge"],
    category: "performance"
  },
  {
    id: "monitoring",
    name: "Monitor cao cấp",
    description: "Theo dõi server chi tiết",
    price: 180000,
    icon: Zap,
    features: ["Real-time metrics", "Alerts", "Performance logs"],
    category: "monitoring"
  },
  {
    id: "premium-support",
    name: "Support Premium",
    description: "Hỗ trợ 24/7 có ưu tiên",
    price: 350000,
    icon: Shield,
    features: ["24/7 priority", "Phone support", "SLA 99.9%"],
    category: "security"
  }
];

interface AddOnsSelectorProps {
  selectedAddOns: AddOnOption[];
  onAddOnToggle: (addOn: AddOnOption) => void;
}

export function AddOnsSelector({ selectedAddOns, onAddOnToggle }: AddOnsSelectorProps) {
  const [category, setCategory] = useState<Category>("all");

  const filteredAddOns = category === "all"
    ? addOnOptions
    : addOnOptions.filter(addOn => addOn.category === category);

  const selectedIds = selectedAddOns.map(addOn => addOn.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Plus className="h-5 w-5 text-yellow-400" />
        <h3 className="text-lg font-semibold">Add-ons</h3>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(cat)}
            className={category === cat
              ? "bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold"
              : "border-white/8 text-[#94a3b8] hover:bg-white/5"
            }
          >
            {cat === "all" ? "Tất cả" :
             cat === "backup" ? "Sao lưu" :
             cat === "security" ? "Bảo mật" :
             cat === "performance" ? "Tối ưu tốc độ" : "Giám sát"}
          </Button>
        ))}
      </div>

      {/* Add-ons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAddOns.map((addOn) => {
          const isSelected = selectedIds.includes(addOn.id);
          return (
            <Card
              key={addOn.id}
              className={`cursor-pointer transition-all border-white/8 bg-[#0f172a]/80 backdrop-blur-xl ${
                isSelected
                  ? "ring-2 ring-[#10b981] bg-[#10b981]/10 border-[#10b981]/30"
                  : "hover:border-[#10b981]/20 hover:bg-[#1e293b]/80"
              }`}
              onClick={() => onAddOnToggle(addOn)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <addOn.icon className="h-5 w-5 text-[#10b981]" />
                    <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">{addOn.name}</CardTitle>
                  </div>
                  {isSelected && (
                    <Check className="h-5 w-5 text-[#10b981]" />
                  )}
                </div>
                <CardDescription className="text-[#94a3b8]">{addOn.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {addOn.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                      <span className="text-xs text-[#94a3b8]">{feature}</span>
                    </div>
                  ))}
                </div>
                {addOn.price > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/8">
                    <span className="text-sm font-bold text-[#10b981] font-[family-name:var(--font-fira-code)]">
                      +{addOn.price.toLocaleString("vi-VN")}đ/tháng
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}