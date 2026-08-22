import { Metadata } from "next";
import { Building2, MapPin, Phone, Mail, ShieldCheck, Clock, Users, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description:
    "TrioHAT-VPS là dịch vụ VPS hosting của Công Ty TNHH Thương Mại Và Phân Phối Kiến Hưng — hạ tầng NVMe thế hệ mới, hỗ trợ 24/7 tại Việt Nam.",
};

const stats = [
  { value: "10+", label: "Năm kinh nghiệm phân phối IT" },
  { value: "3", label: "Datacenter (TP.HCM, Hà Nội, SG)" },
  { value: "99.9%", label: "Cam kết uptime SLA" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Về TrioHAT-VPS
            </span>
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Dịch vụ VPS hiệu năng cao kèm kho ứng dụng 1-Click, vận hành bởi đội ngũ
            giàu kinh nghiệm trong lĩnh vực phân phối hạ tầng công nghệ thông tin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building2 className="h-5 w-5 text-violet-400" />
              Thông tin doanh nghiệp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-white mb-1">
              CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <span className="text-zinc-400">MST:</span>
                <span className="text-white font-mono">3703344754</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <span className="text-zinc-400">Trụ sở:</span>
                <span className="text-white">TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <a href="tel:0976830911" className="text-cyan-400 hover:text-cyan-300">
                  0976 830 911
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <a href="mailto:info@triohat.com" className="text-cyan-400 hover:text-cyan-300">
                  info@triohat.com
                </a>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-2">
              <Server className="h-8 w-8 text-cyan-400 mb-2" />
              <h3 className="font-semibold text-white">Sứ mệnh</h3>
              <p className="text-sm text-zinc-400">
                Đưa hạ tầng cloud tầm cỡ quốc tế đến gần hơn với doanh nghiệp Việt —
                đơn giản, minh bạch và giá trị tối đa.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-2">
              <Users className="h-8 w-8 text-emerald-400 mb-2" />
              <h3 className="font-semibold text-white">Cam kết</h3>
              <p className="text-sm text-zinc-400">
                SLA uptime 99.9%, hoàn tiền trong 7 ngày đầu, hỗ trợ kỹ thuật tiếng Việt
                phản hồi trong 15 phút.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-2">
              <Clock className="h-8 w-8 text-violet-400 mb-2" />
              <h3 className="font-semibold text-white">Triết lý</h3>
              <p className="text-sm text-zinc-400">
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
