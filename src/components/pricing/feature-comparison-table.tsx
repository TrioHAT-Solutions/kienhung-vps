"use client";

import { Fragment } from "react";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  starter: string | boolean;
  basic: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

interface FeatureGroup {
  category: string;
  features: Feature[];
}

const featureGroups: FeatureGroup[] = [
  {
    category: "Tài nguyên phần cứng",
    features: [
      { name: "vCPU", starter: "2 Core", basic: "4 Core", pro: "6 Core", enterprise: "8 Core" },
      { name: "RAM DDR4 ECC", starter: "2 GB", basic: "4 GB", pro: "8 GB", enterprise: "16 GB" },
      { name: "SSD NVMe Gen4", starter: "50 GB", basic: "100 GB", pro: "200 GB", enterprise: "500 GB" },
      { name: "Băng thông", starter: "100 GB", basic: "500 GB", pro: "1 TB", enterprise: "Không giới hạn" },
      { name: "IPv4 riêng", starter: "1", basic: "1", pro: "1", enterprise: "1" },
      { name: "Tốc độ cổng", starter: "1 Gbps", basic: "1 Gbps", pro: "1 Gbps", enterprise: "1 Gbps" },
    ],
  },
  {
    category: "Mạng & Bảo mật",
    features: [
      { name: "Anti-DDoS Đa Tầng", starter: false, basic: true, pro: true, enterprise: true },
      { name: "Free SSL Certificate", starter: false, basic: true, pro: true, enterprise: true },
      { name: "Tường lửa phần cứng", starter: true, basic: true, pro: true, enterprise: true },
      { name: "Backup tự động hàng ngày", starter: false, basic: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Hỗ trợ & Cam kết",
    features: [
      { name: "Uptime SLA 99.9%", starter: true, basic: true, pro: true, enterprise: true },
      { name: "Khởi tạo trong 60s", starter: true, basic: true, pro: true, enterprise: true },
      { name: "Hóa đơn VAT điện tử", starter: true, basic: true, pro: true, enterprise: true },
      { name: "Hỗ trợ 24/7/365", starter: "Ticket", basic: "Ticket + Email", pro: "Ticket + Email + Phone", enterprise: "Priority 24/7" },
      { name: "Monitoring Dashboard", starter: false, basic: false, pro: false, enterprise: true },
    ],
  },
];

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="h-4 w-4 text-[#10b981] mx-auto" />;
  }
  if (value === false) {
    return <X className="h-4 w-4 text-[#64748b] mx-auto" />;
  }
  return <span className="text-sm text-white font-[family-name:var(--font-fira-code)]">{value}</span>;
}

export function FeatureComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-white/8">
            <th className="text-left py-4 px-4 text-sm font-semibold text-[#94a3b8] font-[family-name:var(--font-space-grotesk)]">
              Tính năng
            </th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-[#94a3b8] font-[family-name:var(--font-space-grotesk)]">
              Starter
            </th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-[#94a3b8] font-[family-name:var(--font-space-grotesk)]">
              Basic
            </th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-[#10b981] font-[family-name:var(--font-space-grotesk)] bg-[#10b981]/5 rounded-t-lg">
              Professional
            </th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-[#94a3b8] font-[family-name:var(--font-space-grotesk)]">
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody>
          {featureGroups.map((group) => (
            <Fragment key={group.category}>
              <tr>
                <td colSpan={5} className="py-4 px-4 text-sm font-semibold text-[#06b6d4] bg-[#06b6d4]/5">
                  {group.category}
                </td>
              </tr>
              {group.features.map((feature) => (
                <tr key={feature.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-3 px-4 text-sm text-[#94a3b8]">{feature.name}</td>
                  <td className="py-3 px-4 text-center"><FeatureValue value={feature.starter} /></td>
                  <td className="py-3 px-4 text-center"><FeatureValue value={feature.basic} /></td>
                  <td className="py-3 px-4 text-center bg-[#10b981]/5"><FeatureValue value={feature.pro} /></td>
                  <td className="py-3 px-4 text-center"><FeatureValue value={feature.enterprise} /></td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
