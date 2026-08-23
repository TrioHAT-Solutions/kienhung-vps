import { Metadata } from "next";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật Thông Tin (Privacy Policy)",
  description:
    "Cam kết bảo mật dữ liệu khách hàng theo quy định pháp luật Việt Nam (Nghị định 13/2023/NĐ-CP) tại CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-16 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <Shield className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              Bảo Mật & Quyền Riêng Tư
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
            Chính Sách Bảo Mật Thông Tin
          </h1>

          <p className="text-sm text-[#94a3b8]">
            Tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân tại Việt Nam.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 max-w-4xl space-y-8 text-sm leading-relaxed text-[#94a3b8]">
        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">1.</span> Thu Thập Dữ Liệu Khách Hàng
          </h2>
          <p>
            Chúng tôi chỉ thu thập các thông tin cần thiết phục vụ cho việc khởi tạo máy chủ, kích hoạt đơn hàng và xuất hóa đơn tài chính: Họ và tên, Số điện thoại liên hệ, Địa chỉ email, Tên doanh nghiệp và Mã số thuế (nếu có).
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">2.</span> Mục Đích Sử Dụng Thông Tin
          </h2>
          <p>Dữ liệu khách hàng được sử dụng cho các mục đích:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Gửi thông tin tài khoản root, IP và mật khẩu quản trị VPS.</li>
            <li>Thông báo gia hạn định kỳ và gửi hóa đơn điện tử hợp lệ.</li>
            <li>Hỗ trợ kỹ thuật và xử lý các sự cố liên quan đến dịch vụ.</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">3.</span> Cam Kết Không Chia Sẻ Dữ Liệu
          </h2>
          <p>
            CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG cam kết tuyệt đối không bán, trao đổi hoặc chia sẻ thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại, trừ trường hợp có yêu cầu bằng văn bản từ cơ quan pháp luật có thẩm quyền theo quy định của Nhà nước Việt Nam.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <span className="text-[#10b981]">4.</span> Bảo Mật Dữ Liệu Máy Chủ
          </h2>
          <p>
            Chúng tôi không truy cập vào dữ liệu lưu trữ bên trong máy chủ riêng của khách hàng trừ khi nhận được sự đồng ý và yêu cầu hỗ trợ trực tiếp từ khách hàng. Mọi giao dịch qua web đều được mã hóa bằng giao thức SSL/TLS 256-bit.
          </p>
        </div>
      </section>
    </div>
  );
}
