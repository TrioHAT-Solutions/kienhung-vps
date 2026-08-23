import { Metadata } from "next";
import { Building2, MapPin, Phone, Mail, ShieldCheck, Clock, Users, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description:
    "TrioHAT-VPS là dịch vụ VPS hosting của Công Ty TNHH Thương Mại Và Phân Phối Kiến Hưng — hạ tầng NVMe thế hệ mới, hỗ trợ 24/7 tại Việt Nam.",
};

const stats = [
  { value: "99.9%", label: "Cam kết uptime SLA" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Về TrioHAT-VPS
          </h1>
          <p className="text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
            Dịch vụ máy chủ ảo hiệu năng cao SSD NVMe kèm kho ứng dụng 1-Click, vận hành bởi đội ngũ
            giàu kinh nghiệm trong lĩnh vực phân phối hạ tầng công nghệ thông tin.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-12 max-w-xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)] mb-1">{stat.value}</div>
                <div className="text-xs text-[#94a3b8]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-space-grotesk)] text-white">
              <Building2 className="h-5 w-5 text-[#10b981]" />
              Thông tin pháp lý doanh nghiệp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-white mb-1 font-[family-name:var(--font-space-grotesk)]">
              CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#10b981] flex-shrink-0" />
                <span className="text-[#94a3b8]">Mã số thuế:</span>
                <span className="text-white font-[family-name:var(--font-fira-code)] font-bold">3703344754</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#10b981] flex-shrink-0" />
                <span className="text-[#94a3b8]">Địa chỉ:</span>
                <span className="text-white">168 Hoàng Cầm (Quốc lộ 1K cũ), Linh Xuân, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#10b981] flex-shrink-0" />
                <span className="text-[#94a3b8]">Hotline:</span>
                <a href="tel:0357554576" className="text-[#10b981] hover:text-[#10b981]/80 font-mono">
                  0357554576
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#10b981] flex-shrink-0" />
                <span className="text-[#94a3b8]">Email:</span>
                <a href="mailto:kienhung.do1105@gmail.com" className="text-[#06b6d4] hover:text-[#06b6d4]/80 font-mono">
                  kienhung.do1105@gmail.com
                </a>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-2">
              <Server className="h-8 w-8 text-[#06b6d4] mb-2" />
              <h3 className="font-semibold text-white font-[family-name:var(--font-space-grotesk)]">Sứ mệnh</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Đưa hạ tầng cloud tầm cỡ quốc tế đến gần hơn với doanh nghiệp Việt —
                đơn giản, minh bạch và giá trị tối đa.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-2">
              <Users className="h-8 w-8 text-[#10b981] mb-2" />
              <h3 className="font-semibold text-white font-[family-name:var(--font-space-grotesk)]">Cam kết</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                SLA uptime 99.9%, hoàn tiền trong 7 ngày đầu, hỗ trợ kỹ thuật tiếng Việt
                phản hồi trong 15 phút.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-2">
              <Clock className="h-8 w-8 text-[#f59e0b] mb-2" />
              <h3 className="font-semibold text-white font-[family-name:var(--font-space-grotesk)]">Triết lý</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                &ldquo;Hạ tầng sẵn sàng — Ứng dụng trong tích tắc&rdquo;: khách hàng tập trung
                vào sản phẩm, chúng tôi lo phần còn lại.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
