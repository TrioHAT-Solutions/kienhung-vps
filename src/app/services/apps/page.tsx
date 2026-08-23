import { Metadata } from "next";
import Link from "next/link";
import { Boxes, Zap, ArrowRight, Check, Server, Shield, Layers, Bot, Globe, Database, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "1-Click App Stacks — Triển Khai Phần Mềm Tự Động",
  description:
    "Kho ứng dụng 1-Click cài đặt sẵn trên Cloud VPS: n8n AI Automation, WordPress Pro, Docker Engine, Node.js, Next.js, CyberPanel, WireGuard.",
};

const appCategories = [
  {
    icon: Bot,
    name: "Automation & AI Stacks",
    apps: ["n8n Automation", "Flowise AI", "Ollama LLM Runner", "Open-WebUI"],
    desc: "Tự động hóa quy trình kinh doanh, xây dựng AI Agent và chatbot thông minh trên máy chủ riêng.",
  },
  {
    icon: Layers,
    name: "Web & App Development",
    apps: ["Node.js / Next.js", "Python FastAPI", "Docker & Compose", "Portainer"],
    desc: "Môi trường runtime hoàn chỉnh, tối ưu sẵn PM2, Nginx Reverse Proxy và SSL tự động.",
  },
  {
    icon: Globe,
    name: "CMS & Publishing",
    apps: ["WordPress Pro (LiteSpeed)", "Ghost Blog", "Strapi Headless CMS"],
    desc: "Hệ quản trị nội dung tối ưu SEO, tích hợp bộ nhớ đệm tăng tốc trang web tức thì.",
  },
  {
    icon: Database,
    name: "Databases & Management",
    apps: ["MySQL / MariaDB", "PostgreSQL", "Redis Cache", "CyberPanel"],
    desc: "Cơ sở dữ liệu hiệu năng cao kèm bảng điều khiển trực quan giúp quản trị dễ dàng.",
  },
];

export default function AppsServicePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* Hero */}
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <Boxes className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              1-Click Deployment Marketplace
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Kho Ứng Dụng <span className="text-[#10b981]">1-Click Stacks</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Không cần gõ hàng chục lệnh cấu hình phức tạp. Hệ thống tự động cài đặt trọn gói môi trường, cơ sở dữ liệu và SSL bảo mật chỉ sau một cú nhấp chuột.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Khám Phá Toàn Bộ Kho Ứng Dụng
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {appCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-8 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm space-y-4 hover:border-[#10b981]/30 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                {cat.name}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {cat.desc}
              </p>
              <div className="pt-2">
                <div className="text-xs font-semibold text-white mb-2">Bao gồm các ứng dụng:</div>
                <div className="flex flex-wrap gap-2">
                  {cat.apps.map((app) => (
                    <span
                      key={app}
                      className="px-2.5 py-1 rounded bg-[#1e293b] border border-white/8 text-xs font-[family-name:var(--font-fira-code)] text-[#06b6d4]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
