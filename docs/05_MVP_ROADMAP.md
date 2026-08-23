# 05. LỘ TRÌNH TRIỂN KHAI MVP & KẾ HOẠCH PHÁT TRIỂN (MVP ROADMAP)

> **Dự án**: TrioHAT-VPS  
> **Tài liệu**: Kế hoạch chia kỳ phát triển (Phases), các mốc bàn giao (Milestones) và kế hoạch Refactor UI/UX Frontend.

---

## 1. Mục Tiêu Giai Đoạn MVP (Frontend Refactor Release)

Mục tiêu trọng tâm là hoàn thiện một **Giao Diện Frontend & Trải Nghiệm Khách Hàng Chuẩn Developer Cloud Infrastructure** (xóa bỏ hoàn toàn "AI-generated look" rập khuôn):
1. **Design System & Shell**: Tối ưu màu OLED `#080C14`, Font `Space Grotesk` + `DM Sans`, Header đèn trạng thái nhấp nháy, Footer pháp lý Kiến Hưng.
2. **Interactive Hero**: Split Hero kết hợp CLI Simulator và bảng đo độ trễ Latency mạng ISP Việt Nam.
3. **VPS Configurator**: Bộ tùy biến cấu hình phần cứng mượt mà, tính giá tức thì, fix type add-ons.
4. **App Marketplace**: 15+ ứng dụng 1-click có stack tag chi tiết và Quick Deploy Drawer.
5. **Standard Pricing Matrix**: 4 tier cards, toggle theo năm -20%, bảng so sánh tính năng chi tiết.
6. **Checkout & VietQR**: Form chuẩn Zod, VietQR QuickLink 1-click Copy + Toast, Live Provisioning Animation.
7. **Developer Console Mockup**: Server Overview, Live Terminal Logs, Sparkline Usage Meters, Instant SSH Copy.
8. **Verification & Quality**: 0 lỗi TypeScript (`npx tsc --noEmit`), Build thành công, 100% Passed E2E Smoke Tests.

---

## 2. Kế Hoạch Thực Thi Chi Tiết

Mọi chi tiết kỹ thuật cho từng task được quy định tại thư mục [`refactor/`](file:///d:/KIENHUNG-CO/kienhung-vps/refactor):

```
refactor/
├── README.md                     # Hướng dẫn tổng thể
├── 00_DESIGN_SYSTEM_TOKENS.md    # Design Tokens & Quy chuẩn UI/UX Pro Max
├── 01_TASK_FOUNDATION.md         # Task 1: globals.css, layout.tsx, header, footer
├── 02_TASK_LANDING_HERO.md       # Task 2: page.tsx, Split Hero, CLI Simulator
├── 03_TASK_VPS_CONFIGURATOR.md   # Task 3: configure/page.tsx, Sliders, Sticky Price
├── 04_TASK_APP_MARKETPLACE.md    # Task 4: apps/page.tsx, App Cards, Drawer
├── 05_TASK_PRICING_MATRIX.md     # Task 5: pricing/page.tsx, Toggle -20%, Matrix
├── 06_TASK_CHECKOUT_PROVISION.md # Task 6: checkout/page.tsx, VietQR, Provisioning
├── 07_TASK_DEVELOPER_DASHBOARD.md# Task 7: dashboard/page.tsx, Terminal Logs, SSH
└── 08_VERIFICATION_AND_E2E.md    # Task 8: TypeCheck, Build, Playwright E2E
```

---

## 3. Lộ Trình Cho Các Giai Đoạn Tiếp Theo (Post-MVP)

- **Giai đoạn 2 (Backend & Automation Integration)**:
  - Tích hợp API hạ tầng VPS thật (Proxmox VE / KVM / Hetzner Cloud API).
  - Tích hợp Webhook thanh toán VietQR tự động (SePay / Casso / PayOS).
  - Hệ thống xác thực người dùng (NextAuth / Supabase Auth) và hóa đơn VAT.
- **Giai đoạn 3 (Enterprise Cloud & AI Agent PaaS)**:
  - Multi-server Cluster, Load Balancer.
  - 1-Click AI Agent Stacks (Ollama, vLLM, Open-WebUI).
