import { Metadata } from "next";
import { Activity, CheckCircle2, Server, Globe, Shield, Clock, HardDrive, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Hệ Thống Trạng Thái Dịch Vụ (System Status)",
  description:
    "Theo dõi trạng thái thời gian thực của cụm máy chủ Cloud VPS, hệ thống mạng Datacenter Viettel/VNPT IDC, cổng thanh toán VietQR và dịch vụ DNS.",
};

const systems = [
  {
    name: "Datacenter TP. Hồ Chí Minh (Tier 3 IDC)",
    location: "Khu Công Nghệ Cao / Tân Bình, TP.HCM",
    status: "Operational",
    uptime: "99.99%",
    latency: "2ms",
  },
  {
    name: "Cổng Thanh Toán VietQR NAPAS 24/7",
    location: "Hệ thống tự động ngân hàng",
    status: "Operational",
    uptime: "100%",
    latency: "120ms",
  },
  {
    name: "Hệ Thống Tường Lửa Anti-DDoS Đa Tầng",
    location: "Core Edge Network",
    status: "Operational",
    uptime: "100%",
    latency: "< 1ms",
  },
  {
    name: "Hệ Thống Sao Lưu Dữ Liệu (Backup Storage Node)",
    location: "Secondary Data Cluster",
    status: "Operational",
    uptime: "99.99%",
    latency: "4ms",
  },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
            </span>
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              Tất Cả Hệ Thống Hoạt Động Bình Thường
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Trạng Thái <span className="text-[#10b981]">Hệ Thống Dịch Vụ</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Bảng điều khiển giám sát độ sẵn sàng 24/7 của hạ tầng máy chủ, đường truyền mạng và các dịch vụ đi kèm.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-5xl space-y-8">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm text-center">
            <div className="text-3xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)] mb-1">
              99.98%
            </div>
            <div className="text-xs text-[#94a3b8]">Uptime 90 Ngày Gần Nhất</div>
          </div>
          <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm text-center">
            <div className="text-3xl font-bold text-[#06b6d4] font-[family-name:var(--font-space-grotesk)] mb-1">
              &lt; 5 ms
            </div>
            <div className="text-xs text-[#94a3b8]">Độ Trễ Mạng Trong Nước</div>
          </div>
          <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm text-center">
            <div className="text-3xl font-bold text-[#f59e0b] font-[family-name:var(--font-space-grotesk)] mb-1">
              0 Sự Cố
            </div>
            <div className="text-xs text-[#94a3b8]">Trong 30 Ngày Qua</div>
          </div>
        </div>

        <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
            <h2 className="font-bold text-lg font-[family-name:var(--font-space-grotesk)] text-white">
              Cụm Hạ Tầng & Dịch Vụ
            </h2>
            <span className="text-xs text-[#94a3b8] font-[family-name:var(--font-fira-code)]">
              Tự động cập nhật mỗi 60s
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {systems.map((sys) => (
              <div key={sys.name} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-white text-base">{sys.name}</div>
                  <div className="text-xs text-[#94a3b8]">{sys.location}</div>
                </div>

                <div className="flex items-center gap-6 text-xs">
                  <div className="text-right">
                    <div className="text-[#94a3b8]">Độ trễ: <span className="text-white font-mono">{sys.latency}</span></div>
                    <div className="text-[#94a3b8]">SLA: <span className="text-[#10b981] font-mono">{sys.uptime}</span></div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] font-medium font-[family-name:var(--font-fira-code)] text-xs">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Hoạt Động</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
