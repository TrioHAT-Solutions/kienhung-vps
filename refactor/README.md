# TrioHAT-VPS — Frontend UI/UX Refactor Plan (Opencode Guide)

> **Mục tiêu:** Refactor toàn bộ giao diện Frontend của TrioHAT-VPS (`kienhung-vps`) từ phong cách "AI-Generated / Template Đại Trà" sang phong cách **Developer-First Cloud Infrastructure** đẳng cấp quốc tế (lấy cảm hứng từ Railway, Supabase, Vercel, Hetzner), tối ưu theo tiêu chuẩn **UI/UX Pro Max**.
> 
> **Phạm vi kỹ thuật:** 100% Frontend (Next.js 16.3 + React 19.2 + Tailwind CSS v4 + Zustand v5 + Motion). Không chạm vào backend/devops.

---

## 🗺️ Bản Đồ Triển Khai (Task Dependency Graph)

```
[00_DESIGN_SYSTEM_TOKENS.md] ➔ Thiết lập Tokens, Màu, Font (Space Grotesk + DM Sans)
       ↓
[01_TASK_FOUNDATION.md]      ➔ Layout Shell, Header, Footer & Global CSS
       ↓
[02_TASK_LANDING_HERO.md]    ➔ Interactive Hero, Live CLI Simulator, Benchmark
       ↓
[03_TASK_VPS_CONFIGURATOR.md]➔ Interactive Sliders, Spec Rig, Sticky Price Summary
       ↓
[04_TASK_APP_MARKETPLACE.md] ➔ 1-Click App Catalog, Quick Deploy Drawer, Stack Tags
       ↓
[05_TASK_PRICING_MATRIX.md]  ➔ Pricing Cards (LED Accent), Annual Toggle, Feature Matrix
       ↓
[06_TASK_CHECKOUT_PROVISION.md]➔ VietQR QuickLink, 1-Click Copy, Live Provisioning Animation
       ↓
[07_TASK_DEVELOPER_DASHBOARD.md]➔ Terminal Logs, Resource Gauges, Server Console
       ↓
[08_VERIFICATION_AND_E2E.md] ➔ TypeCheck (0 error), Next Build, Playwright E2E
```

---

## 📂 Danh Mục Tài Liệu Chi Tiết

| File | Tên Nhiệm Vụ | Trọng Tâm Triển Khai |
| :--- | :--- | :--- |
| [`00_DESIGN_SYSTEM_TOKENS.md`](./00_DESIGN_SYSTEM_TOKENS.md) | **Design System & Tokens** | Bảng màu OKLCH, typography, border glass, anti-patterns cần tránh |
| [`01_TASK_FOUNDATION.md`](./01_TASK_FOUNDATION.md) | **Task 1: Foundation & Shell** | `globals.css`, `layout.tsx`, `header.tsx`, `footer.tsx`, font imports |
| [`02_TASK_LANDING_HERO.md`](./02_TASK_LANDING_HERO.md) | **Task 2: Landing Page Hero** | Split hero, live CLI simulator, latency benchmark, legal trust |
| [`03_TASK_VPS_CONFIGURATOR.md`](./03_TASK_VPS_CONFIGURATOR.md) | **Task 3: VPS Configurator** | Dual sliders/presets, dynamic pricing ticker, add-ons fix `as const` |
| [`04_TASK_APP_MARKETPLACE.md`](./04_TASK_APP_MARKETPLACE.md) | **Task 4: 1-Click App Catalog** | Filter pills, stack tags, quick-deploy drawer, compose preview |
| [`05_TASK_PRICING_MATRIX.md`](./05_TASK_PRICING_MATRIX.md) | **Task 5: Pricing Matrix** | 4 tier cards, annual -20% toggle, comparison table matrix |
| [`06_TASK_CHECKOUT_PROVISION.md`](./06_TASK_CHECKOUT_PROVISION.md) | **Task 6: Checkout & VietQR** | Floating labels, VietQR copy toast, 3-second live provisioning |
| [`07_TASK_DEVELOPER_DASHBOARD.md`](./07_TASK_DEVELOPER_DASHBOARD.md) | **Task 7: Developer Console** | Live streaming terminal logs, gauge meters, instant SSH copy |
| [`08_VERIFICATION_AND_E2E.md`](./08_VERIFICATION_AND_E2E.md) | **Task 8: Kiểm Thử & Nghiệm Thu** | `npx tsc --noEmit`, `npm run build`, `npx playwright test` |

---

## ⚡ Hướng Dẫn Thực Hiện Dành Cho Opencode

1. **Tuân thủ nghiêm ngặt từng file Task theo thứ tự từ Task 1 đến Task 8**.
2. **Không tự ý thêm gradient tím-xanh rẻ tiền**: Sử dụng đúng các token màu trong [`00_DESIGN_SYSTEM_TOKENS.md`](./00_DESIGN_SYSTEM_TOKENS.md).
3. **Giữ nguyên toàn bộ State Logic trong Zustand**: Chỉ refactor giao diện, layout, micro-interactions, components, styles, không làm hỏng data flow hiện có.
4. **Kiểm tra Type sau mỗi Task**: Chạy `npx tsc --noEmit` sau khi sửa để đảm bảo không phát sinh lỗi TypeScript.
