"use client";

import { useState } from "react";
import { X, Copy, Check, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";
import type { AppTemplate } from "./app-card";

interface AppDetailModalProps {
  app: AppTemplate;
  onClose: () => void;
}

export function AppDetailModal({ app, onClose }: AppDetailModalProps) {
  const [copied, setCopied] = useState(false);

  const dockerCompose = app.dockerCompose || `version: '3.8'
services:
  ${app.id}:
    image: ${app.id}:latest
    ports:
      - "${app.defaultPort || "3000"}:${app.defaultPort || "3000"}"
    restart: unless-stopped`;

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerCompose);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-white/8 bg-[#0f172a] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0f172a]">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
              <span className="text-xl">{app.icon}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">{app.name}</h2>
              <p className="text-xs text-[#94a3b8]">{app.version} • {app.size}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">Mô tả</h3>
            <p className="text-white">{app.description}</p>
          </div>

          {app.stack && app.stack.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">Stack kỹ thuật</h3>
              <div className="flex flex-wrap gap-2">
                {app.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-[#06b6d4]/10 text-sm font-[family-name:var(--font-fira-code)] text-[#06b6d4] border border-[#06b6d4]/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {app.defaultPort && (
            <div>
              <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">Cổng dịch vụ mặc định</h3>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#1e293b] text-sm font-[family-name:var(--font-fira-code)] text-white border border-white/8">
                  :{app.defaultPort}
                </span>
                <span className="text-xs text-[#64748b]">TCP</span>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">Yêu cầu tối thiểu</h3>
            <div className="flex flex-wrap gap-2">
              {app.requirements.map((req) => (
                <span key={req} className="px-3 py-1 rounded-lg bg-[#10b981]/10 text-sm text-[#10b981] border border-[#10b981]/20">
                  {req}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">Tính năng nổi bật</h3>
            <ul className="space-y-2">
              {app.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-[#94a3b8]">Docker Compose</h3>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2 py-1 rounded text-xs text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="h-3 w-3 text-[#10b981]" /> : <Copy className="h-3 w-3" />}
                {copied ? "Đã copy" : "Copy"}
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-black/40 border border-white/5 overflow-x-auto">
              <code className="text-xs font-[family-name:var(--font-fira-code)] text-[#94a3b8]">{dockerCompose}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">Hướng dẫn truy cập</h3>
            <div className="p-4 rounded-lg bg-[#1e293b]/50 border border-white/5 space-y-2">
              <p className="text-sm text-white">
                1. Triển khai VPS với cấu hình tối thiểu {app.requirements.join(", ")}
              </p>
              <p className="text-sm text-white">
                2. Cài đặt {app.name} qua kho ứng dụng 1-Click
              </p>
              <p className="text-sm text-white">
                3. Truy cập <span className="font-[family-name:var(--font-fira-code)] text-[#06b6d4]">http://your-ip:{app.defaultPort || "3000"}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 px-6 py-4 border-t border-white/8 bg-[#0f172a] flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {app.demoUrl && (
              <a
                href={app.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
            {app.documentationUrl && (
              <a
                href={app.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Docs
              </a>
            )}
          </div>
          <Link
            href="/configure"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            Triển Khai Cùng VPS Ngay
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
