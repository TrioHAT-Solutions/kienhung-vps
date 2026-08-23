import { Metadata } from "next";
import Link from "next/link";
import { Headphones, Shield, Cpu, Activity, Clock, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Managed Services — Dịch Vụ Quản Trị Máy Chủ Chuyên Nghiệp",
  description:
    "Đội ngũ kỹ sư SysAdmin & DevOps trực tiếp vận hành, bảo mật, sao lưu và tối ưu hóa hiệu năng máy chủ 24/7 cho doanh nghiệp.",
};

const managedTiers = [
  {
    name: "Managed Cơ Bản",
    price: "350.000",
    desc: "Hỗ trợ kỹ thuật thiết lập ban đầu và xử lý sự cố máy chủ khi phát sinh.",
    features: [
      "Cài đặt hệ điều hành & tối ưu hóa ban đầu",
      "Cấu hình tường lửa Firewall & chống brute-force",
      "Hỗ trợ cài đặt SSL và cấu hình Web Server",
      "Phản hồi ticket trong vòng 30 phút",
      "Thời gian hỗ trợ 8h/7",
    ],
  },
  {
    name: "Managed Chuyên Nghiệp",
    price: "750.000",
    popular: true,
    desc: "Ủy thác toàn bộ công việc vận hành, tối ưu hiệu năng và giám sát liên tục.",
    features: [
      "Tất cả quyền lợi của gói Cơ Bản",
      "Giám sát tài nguyên CPU/RAM/Ổ cứng 24/7",
      "Tự động vá lỗi bảo mật định kỳ OS & Packages",
      "Cấu hình quy trình tự động sao lưu Daily Backup",
      "Tối ưu hóa Database & Web Caching",
      "Phản hồi ưu tiên trong vòng 15 phút qua Hotline/Telegram",
    ],
  },
  {
    name: "Managed Doanh Nghiệp (Enterprise)",
    price: "1.500.000",
    desc: "Dành riêng cho hệ thống quy mô lớn, kiến trúc nhiều cụm máy chủ và tải cao.",
    features: [
      "Tất cả quyền lợi của gói Chuyên Nghiệp",
      "Kiến trúc Cluster, Load Balancer & High Availability",
      "Kỹ sư DevOps chuyên trách theo dõi dự án",
      "Hỗ trợ thiết lập đường ống CI/CD Deployment",
      "Cam kết thời gian xử lý sự cố khẩn cấp < 10 phút",
      "Họp đánh giá hiệu năng và báo cáo an ninh hàng tháng",
    ],
  },
];

export default function ManagedServicePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <Headphones className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              24/7 SysAdmin & DevOps Support
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Dịch Vụ <span className="text-[#10b981]">Quản Trị Máy Chủ</span> Trọn Gói
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Bạn tập trung phát triển sản phẩm và kinh doanh. Đội ngũ chuyên gia kỹ thuật của Kiến Hưng sẽ đảm nhiệm toàn bộ việc vận hành, bảo mật và sao lưu máy chủ 24/7.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Liên Hệ Đặt Dịch Vụ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {managedTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-xl border flex flex-col justify-between transition-all ${
                tier.popular
                  ? "border-[#10b981]/50 bg-[#0f172a] shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                  : "border-white/8 bg-[#0f172a]/70 hover:border-white/20"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#94a3b8] mb-4 min-h-[36px]">{tier.desc}</p>
                <div className="text-2xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)] mb-6">
                  {tier.price} <span className="text-xs text-[#94a3b8] font-normal">đ/tháng</span>
                </div>

                <ul className="space-y-3 text-xs text-[#94a3b8] mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-lg bg-[#1e293b] hover:bg-[#10b981] hover:text-[#022c22] text-white text-xs font-semibold text-center transition-all"
              >
                Đăng Ký Tư Vấn
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
