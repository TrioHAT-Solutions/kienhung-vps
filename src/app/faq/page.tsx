"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Zap, Phone, Mail } from "lucide-react";

const faqCategories = [
  {
    category: "Khởi Tạo & Cấu Hình Máy Chủ",
    items: [
      {
        q: "Máy chủ Cloud VPS được khởi tạo trong bao lâu sau khi thanh toán?",
        a: "Hệ thống tự động kích hoạt VPS trong vòng 60 giây ngay sau khi giao dịch VietQR hợp lệ được ghi nhận. Thông tin IP, tài khoản root và mật khẩu SSH sẽ hiển thị ngay trên màn hình Console và gửi về email của bạn.",
      },
      {
        q: "Tôi có được cấp địa chỉ IPv4 riêng không?",
        a: "Có. Mọi gói VPS tại TrioHAT đều được cấp phát 01 địa chỉ IPv4 tĩnh riêng biệt và hỗ trợ dải IPv6 miễn phí. Bạn có thể mua thêm IPv4 tĩnh phụ trong phần Add-ons khi cấu hình.",
      },
      {
        q: "Tôi có thể tự nâng cấp CPU, RAM hoặc ổ cứng sau khi đã mua không?",
        a: "Hoàn toàn có thể. Bạn có thể nâng cấp cấu hình bất kỳ lúc nào trực tiếp trên bảng điều khiển. Hệ thống sẽ tự động áp dụng tài nguyên mới và chỉ tính phần chi phí chênh lệch theo số ngày còn lại của chu kỳ.",
      },
    ],
  },
  {
    category: "Thanh Toán & Hóa Đơn VAT",
    items: [
      {
        q: "TrioHAT-VPS hỗ trợ những hình thức thanh toán nào?",
        a: "Chúng tôi hỗ trợ thanh toán tự động qua mã VietQR NAPAS 24/7 (hỗ trợ tất cả ứng dụng ngân hàng và ví điện tử tại Việt Nam). Hệ thống xác nhận giao dịch tức thời mà không cần chờ nhân viên duyệt thủ công.",
      },
      {
        q: "Công ty có xuất hóa đơn VAT điện tử hợp lệ không?",
        a: "Có 100%. CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG (MST: 3703344754) hỗ trợ xuất hóa đơn điện tử đầy đủ theo đúng quy định pháp luật cho khách hàng doanh nghiệp và cá nhân có nhu cầu.",
      },
      {
        q: "Chính sách giảm giá khi thanh toán dài hạn như thế nào?",
        a: "Khi bạn chọn chu kỳ thanh toán 12 tháng (1 năm), hệ thống tự động giảm ngay 20% trên tổng giá trị đơn hàng, giúp tiết kiệm chi phí vận hành đáng kể.",
      },
    ],
  },
  {
    category: "Bảo Mật & Hoàn Tiền",
    items: [
      {
        q: "Chính sách hoàn tiền 7 ngày hoạt động như thế nào?",
        a: "Trong vòng 7 ngày đầu tiên kể từ khi đăng ký, nếu bạn không hài lòng về chất lượng dịch vụ hoặc tốc độ đường truyền, bạn có quyền gửi yêu cầu hoàn tiền 100% qua email kienhung.do1105@gmail.com hoặc hotline 0357554576. Tiền sẽ được hoàn về tài khoản ngân hàng trong 24-48 giờ.",
      },
      {
        q: "Dữ liệu trên máy chủ có được tự động sao lưu không?",
        a: "Nếu bạn bật tùy chọn Auto-Backup trong mục Add-ons, hệ thống sẽ tự động chụp Snapshot hàng ngày và lưu giữ 7 bản sao lưu gần nhất trên hệ thống lưu trữ độc lập.",
      },
    ],
  },
];

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#10b981] transition-colors cursor-pointer"
      >
        <span className="font-bold text-base font-[family-name:var(--font-space-grotesk)]">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 shrink-0 text-[#10b981]" /> : <ChevronDown className="h-5 w-5 shrink-0 text-[#94a3b8]" />}
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm text-[#94a3b8] leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <HelpCircle className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              Frequently Asked Questions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Câu Hỏi <span className="text-[#10b981]">Thường Gặp</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Giải đáp mọi thắc mắc về hạ tầng máy chủ, chính sách hóa đơn VAT, thanh toán VietQR và cam kết hoàn tiền 7 ngày.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
        {faqCategories.map((cat) => (
          <div key={cat.category} className="space-y-4">
            <h2 className="text-xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
              {cat.category}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        <div className="p-8 rounded-xl border border-white/8 bg-[#0f172a]/80 text-center space-y-4">
          <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
            Vẫn Còn Thắc Mắc Khác?
          </h3>
          <p className="text-sm text-[#94a3b8] max-w-lg mx-auto">
            Liên hệ ngay với chúng tôi qua hotline <span className="text-[#10b981] font-mono font-bold">0357554576</span> hoặc email <span className="text-[#06b6d4] font-mono">kienhung.do1105@gmail.com</span> để được tư vấn tận tình.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-sm transition-all"
          >
            Liên Hệ Ngay
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
