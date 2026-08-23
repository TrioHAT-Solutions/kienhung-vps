# 02. Task 2: Landing Page & Interactive Hero Showcase

> **Tệp tác động:**
> - `src/app/page.tsx`
> - `src/components/home/hero-interactive-cli.tsx` (Component mới)
> - `src/components/home/latency-benchmark.tsx` (Component mới)

---

## 1. Mục Tiêu Task

- Xóa bỏ hoàn toàn Hero tĩnh với gradient tím-xanh rập khuôn và 3 thẻ bento đơn điệu.
- Xây dựng **Split Hero**:
  - Cột trái: Tiêu đề mạnh mẽ, dứt khoát ("Hạ Tầng Cloud VPS NVMe Cho Developer & Doanh Nghiệp"), nút chọn nhanh mục đích (Node.js/Next.js, n8n AI Automation, WordPress, Docker), nút CTA "Khởi tạo máy chủ trong 60s".
  - Cột phải: **Interactive Live Server Terminal**: Cho phép người dùng click đổi cấu hình (2 Core / 4GB / 8GB) để thấy ngay lệnh SSH mô phỏng và giá tiền cập nhật real-time.
- Thêm mục **Latency & Speed Benchmark**: Bảng so sánh tốc độ ping thực tế từ VNPT, Viettel, FPT tới cụm máy chủ TP. HCM / Hà Nội (< 5ms trong nước).
- Thêm mục **App Marketplace Highlights Carousel**: Trình diễn các app 1-click tiêu biểu.

---

## 2. Chi Tiết Thành Phần Mới

### A. `src/components/home/hero-interactive-cli.tsx`
Tạo card Terminal tương tác phong cách macOS/Linux:
```tsx
"use client";

import { useState } from "react";
import { Terminal, Copy, Check, Sparkles, ArrowRight } from "lucide-react";
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
    <div className="rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400">triohat-vps-console ~ vps-init</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-emerald-400">READY</span>
        </div>
      </div>

      {/* Preset Tabs */}
      <div className="flex border-b border-white/5 bg-slate-900/40 p-1.5 gap-1.5 overflow-x-auto">
        {PRESETS.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => setSelected(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selected === idx
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Spec details & CLI */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-[11px] text-slate-400">vCPU Dedicated</div>
            <div className="text-sm font-bold text-slate-100 font-mono">{active.cpu}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-[11px] text-slate-400">RAM ECC</div>
            <div className="text-sm font-bold text-slate-100 font-mono">{active.ram}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-[11px] text-slate-400">SSD Gen4</div>
            <div className="text-sm font-bold text-slate-100 font-mono">{active.ssd}</div>
          </div>
        </div>

        {/* Terminal Line */}
        <div className="p-3.5 rounded-lg bg-black/60 border border-emerald-500/20 font-mono text-xs text-slate-300 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="text-emerald-400">$</span>
            <span className="text-emerald-300 truncate">{active.cmd}</span>
          </div>
          <button onClick={handleCopy} className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex-shrink-0">
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="text-xs text-slate-400">Chi phí dự kiến</div>
            <div className="text-xl font-bold text-emerald-400 font-mono">
              {active.price} <span className="text-xs text-slate-400">đ/tháng</span>
            </div>
          </div>
          <Link
            href="/configure"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
          >
            Deploy Cấu Hình Này
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### B. `src/components/home/latency-benchmark.tsx`
Bảng kiểm tra độ trễ mạng:
- Hiển thị Ping VNPT (3ms), Viettel (4ms), FPT (2ms), Singapore (28ms).
- Thể hiện Datacenter chuẩn Tier 3 tại TP. Hồ Chí Minh & Hà Nội.

---

## 3. Tiêu Chí Nghiệm Thu Task 2
- [ ] Hero hiển thị chuyên nghiệp, không còn dải gradient lặp lại.
- [ ] CLI Terminal tương tác click chuyển tab mượt mà, copy lệnh hoạt động tốt.
- [ ] Không có card bento rỗng nội dung.
