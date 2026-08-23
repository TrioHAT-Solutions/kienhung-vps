import Link from "next/link";
import { Server, Globe, Mail, Phone, MapPin, Shield, FileText } from "lucide-react";

const footerLinks = {
  services: [
    { label: "VPS Hosting", href: "/services/vps" },
    { label: "1-Click Apps", href: "/services/apps" },
    { label: "Cloud Storage", href: "/services/storage" },
    { label: "Managed Services", href: "/services/managed" },
  ],
  support: [
    { label: "Hướng dẫn sử dụng", href: "/docs" },
    { label: "Câu hỏi thường gặp", href: "/faq" },
    { label: "Hệ thống trạng thái", href: "/status" },
    { label: "Liên hệ hỗ trợ", href: "/contact" },
  ],
  legal: [
    { label: "Điều khoản sử dụng", href: "/terms" },
    { label: "Chính sách bảo mật", href: "/privacy" },
    { label: "Chính sách hoàn tiền", href: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080c14]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10b981]">
                <Server className="h-6 w-6 text-[#022c22]" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                TrioHAT<span className="text-[#06b6d4]">-VPS</span>
              </span>
            </Link>
            <p className="text-sm text-[#94a3b8] mb-4">
              Hạ Tầng Sẵn Sàng – Ứng Dụng Trong Tích Tắc
            </p>
            <div className="space-y-2 text-sm text-[#94a3b8]">
              <p className="font-medium text-white font-[family-name:var(--font-space-grotesk)]">CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG</p>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>168 Hoàng Cầm (Quốc lộ 1K cũ), Linh Xuân, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:0357554576" className="hover:text-white transition-colors">0357554576</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:kienhung.do1105@gmail.com" className="hover:text-white transition-colors">kienhung.do1105@gmail.com</a>
              </div>
              <p className="text-xs font-[family-name:var(--font-fira-code)]">MST: 3703344754</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">Dịch vụ</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">Hỗ trợ</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">Pháp luật</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="mailto:kienhung.do1105@gmail.com" className="text-[#94a3b8] hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e293b] border border-white/8">
              <Shield className="h-4 w-4 text-[#10b981]" />
              <span className="text-xs text-[#94a3b8]">Datacenter Tier 3 VNPT / Viettel IDC</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e293b] border border-white/8">
              <FileText className="h-4 w-4 text-[#10b981]" />
              <span className="text-xs text-[#94a3b8]">Hỗ trợ xuất hóa đơn VAT 100%</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748b]">
            © 2026 CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b] font-[family-name:var(--font-fira-code)]">
            MST: 3703344754 | Hotline: 0357554576
          </p>
        </div>
      </div>
    </footer>
  );
}
