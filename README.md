# TrioHAT-VPS — Nền Tảng Máy Chủ Ảo & Triển Khai Phần Mềm Trọn Gói

> **Thuộc**: CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG (MST: 3703344754)  
> **Địa chỉ**: 168 Hoàng Cầm (Quốc lộ 1K cũ), Linh Xuân, TP.HCM, Việt Nam  
> **Hotline**: 0357554576 | **Email**: kienhung.do1105@gmail.com  

[![Next.js 16.3+](https://img.shields.io/badge/Next.js-16.3+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![UI/UX Pro Max](https://img.shields.io/badge/Design_System-UI%2FUX_Pro_Max-10b981?style=flat-square)](./refactor/00_DESIGN_SYSTEM_TOKENS.md)
[![Spec-Driven Development](https://img.shields.io/badge/Methodology-SDD-emerald?style=flat-square)](./docs/)

---

## ⚡ Giới Thiệu Dự Án

**TrioHAT-VPS** là dịch vụ cho thuê và vận hành máy chủ ảo SSD NVMe thế hệ mới kết hợp **1-Click App Stacks & Managed Deployment** dành riêng cho Developers, MMO, Agency và Doanh nghiệp vừa & nhỏ (SMBs) tại Việt Nam.

- ⚡ **Khởi tạo siêu tốc**: VPS hoạt động ngay sau khi thanh toán VietQR tự động trong 60 giây.
- 📦 **Kho ứng dụng 1-Click đa dạng**: Node.js/Next.js, Python FastAPI, n8n AI Automation, WordPress Pro, Docker Engine, CyberPanel...
- 🛠️ **Giao diện chuẩn Developer Cloud Platform**: Thiết kế Dark OLED sang trọng (`#080C14`), Space Grotesk + DM Sans typography, Interactive CLI Simulator, thanh trượt phần cứng mượt mà.
- 🛡️ **Bảo mật & Pháp lý minh bạch**: Hạ tầng Datacenter Tier 3 (VNPT/Viettel IDC), SLA Uptime 99.9%, hỗ trợ xuất hóa đơn VAT điện tử 100%.

---

## 🛠️ Kế Hoạch Triển Khai Refactor (Frontend)

Toàn bộ kế hoạch và các task độc lập cho OpenCode được lưu trữ tại thư mục [`refactor/`](./refactor/):

```
refactor/
├── README.md                     # Hướng dẫn tổng thể cho OpenCode
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

## 📚 Hệ Thống Tài Liệu Đặc Tả (SDD)

Tài liệu đặc tả chi tiết trong thư mục [`docs/`](./docs/):

| STT | Tài liệu | Nội dung |
|:---:|:---|:---|
| **00** | [`00_CONSTITUTION.md`](./docs/00_CONSTITUTION.md) | Quy tắc bất biến (immutable) cho toàn bộ dự án |
| **01** | [`01_PROJECT_OVERVIEW.md`](./docs/01_PROJECT_OVERVIEW.md) | Tổng quan, phân tích thị trường, USP, pháp lý |
| **02** | [`02_SPECIFICATIONS.md`](./docs/02_SPECIFICATIONS.md) | Data Models, Pricing Engine, API specs |
| **03** | [`03_FRONTEND_ARCHITECTURE.md`](./docs/03_FRONTEND_ARCHITECTURE.md) | Kiến trúc Frontend, Design System, Component Hierarchy |
| **04** | [`04_APP_CATALOG_SPEC.md`](./docs/04_APP_CATALOG_SPEC.md) | Danh mục 15+ ứng dụng 1-click |
| **05** | [`05_MVP_ROADMAP.md`](./docs/05_MVP_ROADMAP.md) | Lộ trình MVP Frontend và các giai đoạn tiếp theo |

---

## 🚀 Khởi Chạy Dự Án

```bash
# Cài đặt dependencies
npm install

# Khởi chạy dev server (Turbopack)
npm run dev

# Kiểm tra lỗi TypeScript
npx tsc --noEmit

# Chạy kiểm thử E2E
npx playwright test
```
