# 01. Task 1: Foundation, Global Styles & Layout Shell

> **Tệp tác động:**
> - `src/app/globals.css`
> - `src/app/layout.tsx`
> - `src/components/layout/header.tsx`
> - `src/components/layout/footer.tsx`

---

## 1. Mục Tiêu Task

- Cập nhật toàn bộ Design Tokens trong `globals.css` sang hệ màu Developer Dark Theme sắc nét.
- Nhúng font Google Fonts (`Space Grotesk`, `DM Sans`, `Fira Code`) vào `layout.tsx`.
- Thiết kế lại **Header**: Bổ sung Server Status Indicator nhấp nháy xanh lá ("All Systems Operational"), Menu Navigation tinh tế, Hotline và CTA Button nổi bật.
- Thiết kế lại **Footer**: Định vị thương hiệu **CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG** (MST: `3703344754`), hiển thị rõ chứng nhận Datacenter Tier 3, Cam kết SLA 99.9%, Hóa đơn VAT điện tử.

---

## 2. Chi Tiết Thay Đổi Code

### A. `src/app/globals.css`
Thay thế nội dung bằng cấu hình Tailwind v4 CSS-first tokens và các hiệu ứng:
```css
@import "tailwindcss";

@theme {
  --color-background: #080c14;
  --color-foreground: #f8fafc;
  --color-card: #0f172a;
  --color-card-foreground: #f8fafc;
  --color-popover: #0f172a;
  --color-popover-foreground: #f8fafc;
  
  --color-primary: #10b981;
  --color-primary-foreground: #022c22;
  --color-secondary: #1e293b;
  --color-secondary-foreground: #f8fafc;
  
  --color-muted: #1e293b;
  --color-muted-foreground: #94a3b8;
  --color-accent: #06b6d4;
  --color-accent-foreground: #080c14;
  
  --color-destructive: #ef4444;
  --color-destructive-foreground: #f8fafc;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-input: rgba(255, 255, 255, 0.08);
  --color-ring: #10b981;
  
  --font-display: var(--font-space-grotesk), sans-serif;
  --font-body: var(--font-dm-sans), sans-serif;
  --font-mono: var(--font-fira-code), monospace;
}

html {
  color-scheme: dark;
}

body {
  background-color: #080c14;
  color: #f8fafc;
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Developer Grid Dot Background */
.bg-grid-pattern {
  background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Subtle Shimmer Effect */
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### B. `src/app/layout.tsx`
Nhúng các font từ `next/font/google`:
```tsx
import { Space_Grotesk, DM_Sans, Fira_Code } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});
```

### C. `src/components/layout/header.tsx`
- Bổ sung Ping Status: `<span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span> <span className="text-xs text-emerald-400 font-mono">Hệ thống: Hoạt động 100%</span>`
- Thay thế nút gradient tím bằng nút Solid Emerald tinh tế: `bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]`.

### D. `src/components/layout/footer.tsx`
- Trình bày thông tin công ty trang trọng: CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG, MST: `3703344754`, Hotline: `0976830911`, Địa chỉ: Số 39/9, Đường Trần Hưng Đạo, P. Đông Hòa, TP. HCM.
- Thêm Badge cam kết: "Datacenter Tier 3 VNPT / Viettel IDC", "Hỗ trợ xuất hóa đơn VAT 100%".

---

## 3. Tiêu Chí Nghiệm Thu Task 1
- [ ] Giao diện toàn trang chuyển sang tông màu đen sâu kỹ thuật `#080C14`.
- [ ] Font chữ hiển thị chuẩn tiếng Việt không bị lỗi glyph.
- [ ] Header hiển thị đèn trạng thái xanh lá nhấp nháy mượt mà.
- [ ] Footer đầy đủ thông tin pháp lý Kiến Hưng.
