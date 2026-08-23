import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Terminal, Key, Globe, Shield, Database, Copy, Check, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Tài Liệu Kỹ Thuật & Hướng Dẫn Sử Dụng",
  description:
    "Trung tâm hướng dẫn kỹ thuật Cloud VPS: Kết nối SSH, cấu hình tên miền DNS, cài đặt Docker, deploy Node.js / n8n / WordPress, sao lưu dữ liệu.",
};

const guideSections = [
  {
    title: "1. Bắt Đầu Nhanh (Getting Started)",
    items: [
      {
        title: "Hướng dẫn kết nối SSH vào máy chủ Linux",
        desc: "Cách sử dụng terminal trên macOS/Linux hoặc PuTTY/MobaXterm trên Windows để đăng nhập SSH.",
        cmd: "ssh root@103.xxx.xxx.xxx -p 22",
      },
      {
        title: "Cấu hình trỏ tên miền DNS về VPS",
        desc: "Hướng dẫn tạo bản ghi A Record và CNAME trên Cloudflare hoặc nhà cung cấp tên miền của bạn.",
        cmd: "A Record: @ -> 103.xxx.xxx.xxx\nCNAME: www -> yourdomain.com",
      },
      {
        title: "Thiết lập tường lửa UFW cơ bản",
        desc: "Mở các cổng cần thiết và kích hoạt bảo vệ tường lửa chống truy cập trái phép.",
        cmd: "ufw allow 22/tcp && ufw allow 80/tcp && ufw allow 443/tcp && ufw enable",
      },
    ],
  },
  {
    title: "2. Triển Khai Ứng Dụng (Application Deployments)",
    items: [
      {
        title: "Triển khai ứng dụng Node.js / Next.js với PM2",
        desc: "Cấu hình tiến trình chạy ngầm, tự khởi động lại khi gặp lỗi hoặc khi máy chủ reboot.",
        cmd: "pm2 start npm --name 'next-app' -- start && pm2 save && pm2 startup",
      },
      {
        title: "Khởi chạy n8n AI Automation với Docker Compose",
        desc: "Chạy n8n tự động hóa quy trình kinh doanh có gắn volume lưu trữ vĩnh viễn.",
        cmd: "docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n",
      },
      {
        title: "Cài đặt chứng chỉ SSL Let's Encrypt tự động",
        desc: "Bảo mật website với giao thức HTTPS miễn phí và cơ chế tự động gia hạn 90 ngày.",
        cmd: "certbot --nginx -d yourdomain.com -d www.yourdomain.com",
      },
    ],
  },
  {
    title: "3. Quản Trị & Sao Lưu (Maintenance & Backups)",
    items: [
      {
        title: "Tạo và khôi phục Snapshot trên Console",
        desc: "Chụp ảnh hệ thống trước khi cập nhật mã nguồn lớn và cách rollback trong 1 cú click.",
        cmd: "Vào Bảng Điều Khiển -> Tab Snapshot -> Bấm 'Tạo Snapshot Mới'",
      },
      {
        title: "Kiểm tra tài nguyên hệ thống theo thời gian thực",
        desc: "Các lệnh Linux hữu ích để kiểm tra tải CPU, RAM và dung lượng ổ cứng NVMe.",
        cmd: "htop   # Xem CPU/RAM\ndf -h  # Xem dung lượng ổ đĩa\niostat # Xem tốc độ IOPS",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <BookOpen className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-semibold text-[#10b981] font-[family-name:var(--font-dm-sans)]">
              Developer Documentation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Tài Liệu & <span className="text-[#10b981]">Hướng Dẫn Kỹ Thuật</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Tổng hợp các hướng dẫn chuẩn chỉ giúp bạn nhanh chóng làm chủ hạ tầng máy chủ, cấu hình bảo mật và triển khai ứng dụng trơn tru.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-5xl space-y-16">
        {guideSections.map((section) => (
          <div key={section.title} className="space-y-6">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white border-b border-white/8 pb-3">
              {section.title}
            </h2>

            <div className="grid gap-6">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm space-y-3"
                >
                  <h3 className="text-lg font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="p-3.5 rounded-lg bg-black/60 border border-white/8 font-[family-name:var(--font-fira-code)] text-xs text-[#06b6d4] overflow-x-auto whitespace-pre-wrap">
                    {item.cmd}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-8 rounded-xl border border-[#10b981]/30 bg-[#0f172a] text-center space-y-4">
          <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
            Cần Hỗ Trợ Trực Tiếp Từ Đội Ngũ Kỹ Thuật?
          </h3>
          <p className="text-sm text-[#94a3b8] max-w-xl mx-auto">
            Đội ngũ kỹ sư của Kiến Hưng sẵn sàng hỗ trợ cấu hình và xử lý các bài toán kỹ thuật phức tạp 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-sm transition-all"
          >
            Gửi Yêu Cầu Hỗ Trợ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
