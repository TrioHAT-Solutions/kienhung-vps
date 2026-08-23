import { Metadata } from "next";
import Link from "next/link";
import { HardDrive, Shield, Zap, Database, Lock, RefreshCw, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Storage & Giải Pháp Lưu Trữ Đám Mây NVMe",
  description:
    "Dịch vụ lưu trữ đám mây Block Storage và S3 Object Storage tốc độ cao, sao lưu dữ liệu tự động Snapshot hàng ngày, mã hóa AES-256.",
};

const storageFeatures = [
  {
    icon: Zap,
    title: "Block Storage Gắn Ngoài Siêu Tốc",
    description: "Mở rộng dung lượng ổ đĩa cho Cloud VPS tức thì mà không cần tắt máy chủ. Chuẩn kết nối NVMe over Fabric cho tốc độ truy xuất vượt trội.",
  },
  {
    icon: RefreshCw,
    title: "Tự Động Sao Lưu (Daily Snapshot)",
    description: "Hệ thống tự động chụp ảnh đĩa cứng định kỳ hàng ngày và lưu trữ trên cụm máy chủ backup độc lập, khôi phục 1-click trong 30 giây.",
  },
  {
    icon: Lock,
    title: "Mã Hóa Dữ Liệu Chuẩn Doanh Nghiệp",
    description: "Toàn bộ dữ liệu lưu trữ (Data at rest & Data in transit) được mã hóa bằng chuẩn AES-256 bit an toàn tuyệt đối.",
  },
  {
    icon: Database,
    title: "S3-Compatible Object Storage",
    description: "Tương thích hoàn toàn với chuẩn AWS S3 API, dễ dàng tích hợp lưu trữ hình ảnh, video, tài liệu cho website và mobile apps.",
  },
];

export default function StorageServicePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <HardDrive className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-semibold text-[#10b981] font-[family-name:var(--font-dm-sans)]">
              Enterprise Cloud Storage
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Cloud Storage & <span className="text-[#10b981]">Lưu Trữ NVMe</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Giải pháp mở rộng không gian lưu trữ an toàn, linh hoạt và tốc độ cao cho hệ thống website, cơ sở dữ liệu và tệp đa phương tiện của doanh nghiệp.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/configure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Thêm Storage Vào VPS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {storageFeatures.map((feat) => (
            <div
              key={feat.title}
              className="p-8 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm space-y-3 hover:border-[#10b981]/30 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                <feat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                {feat.title}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
