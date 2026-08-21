import Link from "next/link";
import { Server, Globe, Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500">
                <Server className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                TrioHAT<span className="text-cyan-400">-VPS</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 mb-4">
              Hạ Tầng Sẵn Sàng – Ứng Dụng Trong Tích Tắc
            </p>
            <div className="space-y-2 text-sm text-zinc-400">
              <p className="font-medium text-zinc-300">CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG</p>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>So 39/9, Duong Tran Hung Dao, Phuong Dong Hoa, TP. HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0976830911" className="hover:text-white transition-colors">0976830911</a>
              </div>
              <p className="text-xs">MST: 3703344754</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Dich vu</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Ho tro</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Phap luat</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="mailto:info@triohat.com" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © 2026 TrioHAT-VPS. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            MST: 3703344754 | Hotline: 0976830911
          </p>
        </div>
      </div>
    </footer>
  );
}