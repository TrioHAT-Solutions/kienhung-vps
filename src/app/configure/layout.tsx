import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cấu hình VPS",
  description:
    "Tự do tùy chỉnh vCPU, RAM, NVMe, vị trí datacenter và thời hạn thuê — giá tính tức thì theo cấu hình.",
};

export default function ConfigureLayout({ children }: { children: ReactNode }) {
  return children;
}
