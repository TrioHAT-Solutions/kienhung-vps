import Link from "next/link";
import { ArrowRight, Zap, Boxes, Headphones, Clock, Shield, Server, Layers, Cpu, Globe, Container } from "lucide-react";
import { HeroInteractiveCli } from "@/components/home/hero-interactive-cli";
import { LatencyBenchmark } from "@/components/home/latency-benchmark";

const quickStartApps = [
  { name: "Node.js / Next.js", icon: Layers },
  { name: "n8n AI Automation", icon: Cpu },
  { name: "WordPress", icon: Globe },
  { name: "Docker", icon: Container },
];

const features = [
  {
    icon: Zap,
    title: "Tốc Độ Tối Ưu",
    description: "VPS hoạt động trong 60 giây sau thanh toán, hạ tầng SSD NVMe thế hệ mới nhất",
    color: "#06b6d4",
  },
  {
    icon: Boxes,
    title: "1-Click App Stacks",
    description: "15+ ứng dụng phổ biến được cấu hình sẵn, deploy chỉ trong một cú click",
    color: "#10b981",
  },
  {
    icon: Headphones,
    title: "Hỗ Trợ 24/7",
    description: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ bạn mọi lúc, đảm bảo dịch vụ hoạt động ổn định",
    color: "#f59e0b",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA", color: "#10b981" },
  { value: "15+", label: "App Templates", color: "#06b6d4" },
  { value: "3", label: "Data Centers", color: "#f59e0b" },
  { value: "60s", label: "Deploy Time", color: "#10b981" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14]">
      <section className="relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] via-transparent to-[#080c14]" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-medium text-[#10b981]">All Systems Operational</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white leading-tight">
                Hạ Tầng Cloud VPS NVMe Cho{" "}
                <span className="text-[#10b981]">Developer</span> &{" "}
                <span className="text-[#06b6d4]">Doanh Nghiệp</span>
              </h1>
              <p className="text-lg text-[#94a3b8] max-w-xl">
                Triển khai ứng dụng trong 60 giây với kho ứng dụng 1-Click và thanh toán VietQR tức thì. Uptime SLA 99.9%.
              </p>
              <div className="flex flex-wrap gap-3">
                {quickStartApps.map((app) => (
                  <button
                    key={app.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e293b] border border-white/8 text-sm text-[#94a3b8] hover:text-white hover:border-[#10b981]/30 transition-all cursor-pointer"
                  >
                    <app.icon className="h-4 w-4 text-[#06b6d4]" />
                    {app.name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/configure"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  Khởi tạo máy chủ trong 60s
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/8 text-[#94a3b8] hover:text-white hover:border-[#10b981]/30 transition-all"
                >
                  Xem Bảng Giá
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <HeroInteractiveCli />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Tại Sao Chọn TrioHAT-VPS?
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Giải pháp VPS toàn diện với ứng dụng được cài đặt sẵn, hỗ trợ 24/7 và thanh toán tức thời
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl hover:border-[#10b981]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}15` }}>
                <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#94a3b8]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <LatencyBenchmark />
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl text-center"
              >
                <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)]" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#94a3b8] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="p-12 rounded-2xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Chọn cấu hình VPS phù hợp và triển khai ứng dụng chỉ trong vài phút
          </p>
          <Link
            href="/configure"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-lg transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          >
            Tạo VPS Ngay
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
