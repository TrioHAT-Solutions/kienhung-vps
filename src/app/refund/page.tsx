import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, RefreshCw, Clock, Check, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Hoàn Tiền 100% Trong 7 Ngày (Refund Policy)",
  description:
    "Cam kết hoàn tiền 100% không rủi ro trong 7 ngày đầu tiên nếu không hài lòng về chất lượng dịch vụ Cloud VPS tại CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-16 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <ShieldCheck className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              Cam Kết 100% Không Rủi Ro
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Chính Sách Hoàn Tiền Trong 7 Ngày
          </h1>

          <p className="text-sm text-[#94a3b8]">
            Áp dụng cho tất cả khách hàng đăng ký mới dịch vụ Cloud VPS tại TrioHAT-VPS.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 max-w-4xl space-y-8 text-sm leading-relaxed text-[#94a3b8]">
        <div className="p-8 rounded-xl border border-[#10b981]/30 bg-[#0f172a] space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981]">
              <RefreshCw className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Cam Kết Hoàn Tiền 100% Trong 7 Ngày Đầu Tiên
              </h2>
              <div className="text-xs text-[#10b981]">Không cần giải thích lý do phức tạp</div>
            </div>
          </div>
          <p>
            Chúng tôi tự tin vào chất lượng hạ tầng máy chủ SSD NVMe Gen 4 và tốc độ đường truyền. Trong vòng <strong>07 ngày</strong> kể từ thời điểm đơn hàng được kích hoạt thành công, nếu bạn không hài lòng về dịch vụ, bạn có quyền gửi yêu cầu hoàn lại 100% số tiền đã thanh toán.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h3 className="text-base font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">1.</span> Điều Kiện Áp Dụng Hoàn Tiền
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-[#94a3b8]">
            <li>Áp dụng cho khách hàng mới đăng ký dịch vụ Cloud VPS lần đầu tiên tại hệ thống.</li>
            <li>Yêu cầu hoàn tiền được gửi trong vòng 07 ngày tính từ ngày thanh toán đơn hàng.</li>
            <li>Máy chủ không vi phạm các điều khoản sử dụng (không dùng để tấn công mạng DDoS, spam, phát tán mã độc).</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h3 className="text-base font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">2.</span> Quy Trình Yêu Cầu Hoàn Tiền (3 Bước Đơn Giản)
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1 text-xs">
              <div className="text-[#10b981] font-bold font-mono">BƯỚC 1</div>
              <div className="text-white font-medium">Gửi Yêu Cầu</div>
              <div className="text-slate-400 text-[11px]">Email đến kienhung.do1105@gmail.com hoặc gọi hotline 0357554576 kèm mã đơn hàng.</div>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1 text-xs">
              <div className="text-[#10b981] font-bold font-mono">BƯỚC 2</div>
              <div className="text-white font-medium">Xác Nhận Tài Khoản</div>
              <div className="text-slate-400 text-[11px]">Cung cấp số tài khoản ngân hàng chính chủ để nhận tiền hoàn.</div>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1 text-xs">
              <div className="text-[#10b981] font-bold font-mono">BƯỚC 3</div>
              <div className="text-white font-medium">Nhận Tiền Trong 24-48h</div>
              <div className="text-slate-400 text-[11px]">Hệ thống chuyển khoản hoàn tiền 100% trong vòng 24 đến 48 giờ làm việc.</div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h3 className="text-base font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">3.</span> Các Trường Hợp Không Áp Dụng Hoàn Tiền
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-[#94a3b8]">
            <li>Yêu cầu gửi sau thời hạn 07 ngày kể từ ngày kích hoạt dịch vụ.</li>
            <li>Chi phí mua bản quyền phần mềm bên thứ ba (cPanel, Windows Server License, DirectAdmin...).</li>
            <li>Các tài khoản bị khóa do cố ý vi phạm pháp luật hoặc điều khoản dịch vụ (tấn công mạng, lừa đảo).</li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-sm transition-all"
          >
            Liên Hệ Bộ Phận Chăm Sóc Khách Hàng
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
