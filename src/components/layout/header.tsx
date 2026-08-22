"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500">
              <Server className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              TrioHAT<span className="text-cyan-400">-VPS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="tel:0976830911" className="hidden sm:flex items-center gap-2 text-sm text-zinc-300 hover:text-white">
              <Phone className="h-4 w-4" />
              <span>0976830911</span>
            </a>
            <Button variant="gradient">
              Bắt đầu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2"
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