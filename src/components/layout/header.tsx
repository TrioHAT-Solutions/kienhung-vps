"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Server, LayoutDashboard } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Cấu hình VPS", href: "/configure" },
  { label: "Bảng giá", href: "/pricing" },
  { label: "Kho ứng dụng", href: "/apps" },
  { label: "Về chúng tôi", href: "/about" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#080c14]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10b981]">
              <Server className="h-6 w-6 text-[#022c22]" />
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
              TrioHAT<span className="text-[#06b6d4]">-VPS</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#94a3b8] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="text-xs text-[#10b981] font-[family-name:var(--font-fira-code)]">Hệ thống: Hoạt động 100%</span>
            </div>
            <a href="tel:0357554576" className="hidden lg:flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors mr-2">
              <Phone className="h-4 w-4" />
              <span>0357554576</span>
            </a>
            <Link
              href="/dashboard"
              className="px-3 py-2 rounded-lg border border-white/8 hover:border-[#10b981]/40 bg-[#0f172a] hover:bg-[#1e293b] text-sm text-[#94a3b8] hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <LayoutDashboard className="h-4 w-4 text-[#06b6d4]" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/configure"
              className="bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] inline-flex items-center justify-center text-sm"
            >
              Bắt đầu
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#94a3b8] hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#94a3b8] hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
