"use client";

import { useState } from "react";
import { Terminal, Copy, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRESETS = [
  { name: "Node.js / Next.js", cpu: "2 vCPU", ram: "4 GB", ssd: "60 GB NVMe", price: "360.000", cmd: "curl -sS https://triohat.vn/install/nextjs | bash" },
  { name: "n8n AI Automation", cpu: "4 vCPU", ram: "8 GB", ssd: "120 GB NVMe", price: "720.000", cmd: "docker run -d --name n8n -p 5678:5678 n8nio/n8n" },
  { name: "WordPress Pro", cpu: "2 vCPU", ram: "2 GB", ssd: "40 GB NVMe", price: "250.000", cmd: "triohat app deploy wordpress-pro --ssl=auto" },
];

export function HeroInteractiveCli() {
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);

  const active = PRESETS[selected];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b]/90 border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ef4444]/80" />
          <div className="h-3 w-3 rounded-full bg-[#f59e0b]/80" />
          <div className="h-3 w-3 rounded-full bg-[#10b981]/80" />
          <span className="ml-2 text-xs font-[family-name:var(--font-fira-code)] text-[#94a3b8]">triohat-vps-console ~ vps-init</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-[11px] font-[family-name:var(--font-fira-code)] text-[#10b981]">READY</span>
        </div>
      </div>

      <div className="flex border-b border-white/5 bg-[#1e293b]/40 p-1.5 gap-1.5 overflow-x-auto">
        {PRESETS.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => setSelected(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selected === idx
                ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30"
                : "text-[#94a3b8] hover:text-white hover:bg-white/5"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-[11px] text-[#94a3b8]">vCPU Dedicated</div>
            <div className="text-sm font-bold text-white font-[family-name:var(--font-fira-code)]">{active.cpu}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-[11px] text-[#94a3b8]">RAM ECC</div>
            <div className="text-sm font-bold text-white font-[family-name:var(--font-fira-code)]">{active.ram}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-[11px] text-[#94a3b8]">SSD Gen4</div>
            <div className="text-sm font-bold text-white font-[family-name:var(--font-fira-code)]">{active.ssd}</div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-black/60 border border-[#10b981]/20 font-[family-name:var(--font-fira-code)] text-xs text-[#94a3b8] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#10b981]">$</span>
            <span className="text-[#06b6d4] truncate">{active.cmd}</span>
          </div>
          <button onClick={handleCopy} className="p-1.5 rounded hover:bg-white/10 text-[#94a3b8] hover:text-white transition-colors flex-shrink-0 cursor-pointer">
            {copied ? <Check className="h-4 w-4 text-[#10b981]" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="text-xs text-[#94a3b8]">Chi phí dự kiến</div>
            <div className="text-xl font-bold text-[#10b981] font-[family-name:var(--font-space-grotesk)]">
              {active.price} <span className="text-xs text-[#94a3b8]">đ/tháng</span>
            </div>
          </div>
          <Link
            href="/configure"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
          >
            Deploy Cấu Hình Này
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
