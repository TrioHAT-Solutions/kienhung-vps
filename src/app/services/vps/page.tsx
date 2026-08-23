import { Metadata } from "next";
import Link from "next/link";
import { Server, Zap, Shield, HardDrive, Cpu, Globe, Check, ArrowRight, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch Vụ Cloud VPS NVMe Cao Cấp",
  description:
    "Thuê máy chủ ảo Cloud VPS NVMe tốc độ cao tại Việt Nam. CPU Intel Xeon / AMD EPYC, 100% ổ cứng SSD NVMe Gen 4, kết nối 1Gbps, Uptime 99.9%.",
};

const vpsTiers = [
  {
    name: "Starter VPS",
    cpu: "2 vCPU",
    ram: "2 GB DDR4",
    storage: "50 GB NVMe",
    bandwidth: "100 GB",
    price: "250.000",
    desc: "Lựa chọn lý tưởng cho blog cá nhân, website WordPress và môi trường dev test.",
  },
  {
    name: "Basic VPS",
    cpu: "4 vCPU",
    ram: "4 GB DDR4",
    storage: "100 GB NVMe",
    bandwidth: "500 GB",
    price: "450.000",
    desc: "Phù hợp cho website doanh nghiệp, API backend và ứng dụng bán hàng trực tuyến.",
  },
  {
    name: "Professional VPS",
    cpu: "6 vCPU",
    ram: "8 GB DDR4",
    storage: "200 GB NVMe",
    bandwidth: "1 TB",
    price: "750.000",
    popular: true,
    desc: "Hiệu năng vượt trội cho hệ thống thương mại điện tử, n8n AI Automation và database.",
  },
  {
    name: "Enterprise VPS",
    cpu: "8 vCPU",
    ram: "16 GB DDR4",
    storage: "500 GB NVMe",
    bandwidth: "Không giới hạn",
    price: "1.200.000",
    desc: "Dành riêng cho ứng dụng doanh nghiệp lớn, microservices cluster và tải cao liên tục.",
  },
];

const highlights = [
  {
    icon: HardDrive,
    title: "100% Ổ Cứng NVMe PCIe Gen 4",
    description: "Tốc độ đọc ghi ngẫu nhiên (Random IOPS) lên tới 700.000 IOPS, xử lý cơ sở dữ liệu nhanh gấp 10 lần SSD SATA thông thường.",
  },
  {
    icon: Shield,
    title: "Chống Tấn Công DDoS Đa Tầng",
    description: "Hệ thống tường lửa phần cứng tự động phát hiện và ngăn chặn các cuộc tấn công DDoS Layer 3/4/7 quy mô lên tới 10Gbps.",
  },
  {
    icon: Globe,
    title: "Datacenter Chuẩn Tier 3",
    description: "Đặt tại trung tâm dữ liệu chuẩn Tier 3 tại TP. Hồ Chí Minh với kết nối băng thông trong nước 1Gbps, độ trễ < 5ms.",
  },
  {
    icon: Activity,
    title: "Cam Kết Uptime SLA 99.9%",
    description: "Hệ thống hạ tầng dự phòng nguồn điện kép 2N+1 và cơ chế chuyển đổi dự phòng tự động đảm bảo máy chủ luôn online 24/7.",
  },
];

export default function VpsServicePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <Server className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              Next-Gen Cloud Infrastructure
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Cloud VPS NVMe <span className="text-[#10b981]">Hiệu Năng Cao</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Máy chủ ảo đám mây khởi tạo siêu tốc trong 60 giây, trang bị 100% ổ cứng SSD NVMe Gen 4 cùng bộ vi xử lý Intel Xeon / AMD EPYC mạnh mẽ.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/configure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Tùy Chỉnh Cấu Hình Ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/8 text-[#94a3b8] hover:text-white hover:border-[#10b981]/30 transition-all"
            >
              Xem Bảng Giá Chuẩn
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Ưu Thế Vượt Trội Của TrioHAT-VPS
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Hạ tầng máy chủ được tối ưu hóa chuyên sâu cho tốc độ xử lý dữ liệu và tính ổn định tuyệt đối.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm space-y-3 hover:border-[#10b981]/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                {item.title}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[#0c1220] border-t border-white/8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
              Các Gói Máy Chủ Phổ Biến
            </h2>
            <p className="text-[#94a3b8] max-w-xl mx-auto">
              Lựa chọn gói cấu hình có sẵn hoặc tùy biến linh hoạt theo từng thông số.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vpsTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-6 rounded-xl border flex flex-col justify-between transition-all ${
                  tier.popular
                    ? "border-[#10b981]/50 bg-[#0f172a] shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                    : "border-white/8 bg-[#0f172a]/70 hover:border-white/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#10b981] text-[#022c22] text-[11px] font-bold">
                    Khuyên Dùng
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mb-4 min-h-[32px]">{tier.desc}</p>
                  <div className="text-2xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)] mb-6">
                    {tier.price} <span className="text-xs text-[#94a3b8] font-normal">đ/tháng</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#94a3b8] mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#10b981]" />
                      <span>{tier.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#10b981]" />
                      <span>{tier.ram}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#10b981]" />
                      <span>{tier.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#10b981]" />
                      <span>Băng thông: {tier.bandwidth}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#10b981]" />
                      <span>1 IPv4 Tĩnh Riêng</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/configure"
                  className="w-full py-2.5 rounded-lg bg-[#1e293b] hover:bg-[#10b981] hover:text-[#022c22] text-white text-xs font-semibold text-center transition-all"
                >
                  Chọn Gói Này
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
