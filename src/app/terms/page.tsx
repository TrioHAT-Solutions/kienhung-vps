import { Metadata } from "next";
import { Shield, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng Dịch Vụ (Terms of Service)",
  description:
    "Quy định và điều khoản sử dụng dịch vụ Cloud VPS, máy chủ ảo và hạ tầng phần mềm tại CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-16 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <FileText className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-semibold text-[#10b981] font-[family-name:var(--font-dm-sans)]">
              Quy Định & Pháp Lý
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Điều Khoản Sử Dụng Dịch Vụ
          </h1>

          <p className="text-sm text-[#94a3b8]">
            Cập nhật lần cuối: Tháng 8/2026 | Áp dụng cho toàn bộ dịch vụ do CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG cung cấp.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 max-w-4xl space-y-8 text-sm leading-relaxed text-[#94a3b8]">
        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">1.</span> Định Nghĩa & Phạm Vi Áp Dụng
          </h2>
          <p>
            Bằng việc đăng ký tài khoản, khởi tạo hoặc thanh toán bất kỳ gói dịch vụ máy chủ ảo Cloud VPS, lưu trữ đám mây hoặc dịch vụ phần mềm nào trên hệ thống TrioHAT-VPS, bạn (&quot;Khách hàng&quot;) đồng ý tuân thủ toàn bộ các điều khoản được quy định dưới đây với CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG (&quot;Kiến Hưng&quot;).
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">2.</span> Cam Kết Mức Độ Dịch Vụ (SLA Uptime 99.9%)
          </h2>
          <p>
            Kiến Hưng cam kết duy trì độ sẵn sàng của hạ tầng phần cứng và đường truyền mạng tối thiểu 99.9% hàng tháng. Trường hợp thời gian ngừng hoạt động (downtime) vượt quá mức cam kết do lỗi trực tiếp từ hệ thống của chúng tôi, khách hàng sẽ được bồi thường bằng ngày sử dụng dịch vụ tương ứng theo chính sách SLA.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">3.</span> Các Hành Vi Bị Nghiêm Cấm Tuyệt Đối
          </h2>
          <p>Khách hàng không được sử dụng máy chủ cho bất kỳ mục đích nào sau đây:</p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-[#94a3b8]">
            <li>Phát tán mã độc, virus, ransomware, botnet hoặc thực hiện các cuộc tấn công từ chối dịch vụ (DDoS/DoS).</li>
            <li>Gửi thư rác (SPAM mail), lừa đảo qua mạng (Phishing) hoặc lưu trữ nội dung vi phạm thuần phong mỹ tục và pháp luật Việt Nam.</li>
            <li>Đào tiền ảo (Crypto Mining) gây chiếm dụng CPU 100% liên tục làm ảnh hưởng đến các máy chủ lân cận.</li>
            <li>Vi phạm bản quyền phần mềm, sở hữu trí tuệ hoặc dữ liệu chưa được cấp phép.</li>
          </ul>
          <p className="text-xs text-[#f59e0b]">
            * Vi phạm các quy định trên sẽ dẫn đến việc máy chủ bị tạm khóa ngay lập tức mà không hoàn tiền.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">4.</span> Trách Nhiệm Bảo Mật & Sao Lưu Dữ Liệu
          </h2>
          <p>
            Khách hàng toàn quyền quản trị máy chủ (quyền root/administrator) và có trách nhiệm bảo mật mật khẩu SSH, API keys và thiết lập tường lửa. Kiến Hưng khuyến nghị khách hàng luôn duy trì tính năng Auto-Backup định kỳ để phòng ngừa sự cố mất mát dữ liệu do thao tác người dùng.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">5.</span> Thanh Toán, Gia Hạn & Xuất Hóa Đơn VAT
          </h2>
          <p>
            Dịch vụ được thanh toán trả trước theo các chu kỳ 1 tháng, 3 tháng, 6 tháng hoặc 12 tháng. Hệ thống sẽ gửi thông báo gia hạn trước 7 ngày khi hết hạn. Khách hàng có nhu cầu xuất hóa đơn VAT xin vui lòng cung cấp thông tin xuất hóa đơn trong vòng 7 ngày làm việc kể từ thời điểm thanh toán.
          </p>
        </div>
      </section>
    </div>
  );
}
