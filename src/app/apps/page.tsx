import { Metadata } from "next";
import { PackageOpen } from "lucide-react";
import { AppsCatalog } from "@/components/app-catalog/apps-catalog";

export const metadata: Metadata = {
  title: "Kho ứng dụng 1-Click",
  description:
    "Hơn 15 ứng dụng phổ biến cài đặt sẵn trong 1 click: WordPress, Docker, n8n, MySQL, Grafana... Triển khai cùng VPS NVMe tại TrioHAT-VPS.",
};

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
            <PackageOpen className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              Cài đặt tự động trong vài phút
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Kho Ứng Dụng 1-Click
            </span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Chọn ứng dụng cần triển khai — hệ thống tự động cài đặt và cấu hình
            tối ưu ngay sau khi VPS khởi tạo
          </p>
        </div>

        <AppsCatalog />
      </div>
    </div>
  );
}
