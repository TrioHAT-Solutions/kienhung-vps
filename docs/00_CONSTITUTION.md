# 00. HIẾN PHÁP DỰ ÁN (PROJECT CONSTITUTION)

> **Trạng thái**: Draft — Cần phê duyệt bởi Do Kien Hung
> **Áp dụng**: Toàn bộ dự án TrioHAT-VPS, mọi giai đoạn
> **Thay đổi**: Chỉ được sửa khi có sự đồng thuận của cả chủ dự án và lead developer

---

## 1. Mục Đích

Hiến pháp này là tài liệu **bất biến (immutable)**, làm nền tảng cho mọi quyết định thiết kế, phát triển và kinh doanh trong dự án TrioHAT-VPS. Mọi spec, code, và quyết định khác phải tuân thủ tài liệu này.

## 2. Giá Trị Cốt Lõi (Core Values)

### 2.1. Người Dùng Là Trọng Tâm
- Mọi quyết định thiết kế giao diện phải ưu tiên trải nghiệm người dùng cuối (end-user experience).
- Không hy sinh UX vì sự tiện lợi của developer.
- Giao diện phải thân thiện với cả người dùng công nghệ và không chuyên.

### 2.2. Minh Bạch Về Giá
- Tất cả giá hiển thị phải chính xác tuyệt đối (không có chi phí ẩn).
- Công thức tính giá phải được hiển thị công khai cho người dùng.
- Đơn vị tiền tệ: **VND** (đồng Việt Nam), không hiển thị USD.

### 2.3. Tốc Độ Là Hàng Đầu
- Thời gian load trang < 2 giây trên 3G.
- Tính giá tức thời khi kéo thanh trượt (không delay).
- VPS hoạt động trong vòng 60 giây sau thanh toán.

### 2.4. Pháp Lý Minh Bạch
- Thông tin công ty, MST, địa chỉ phải hiển thị rõ ràng ở mọi trang quan trọng.
- Hóa đơn VAT điện tử đầy đủ thông tin theo quy định pháp luật Việt Nam.

## 3. Phạm Vi MVP (MVP Scope)

### ✅ Bao gồm trong MVP
- Landing page giới thiệu dịch vụ
- Bảng giá và công cụ so sánh
- Trình tùy biến cấu hình VPS (configurator) với thanh trượt
- Kho ứng dụng 1-Click (App Catalog) với bộ lọc
- Luồng cấu hình đơn hàng và thanh toán VietQR (mock)
- Trang trải nghiệm Dashboard quản trị (mock)

### ❌ Không bao gồm trong MVP
- Backend API thật (database, authentication, provisioning)
- Hệ thống thanh toán thật (webhook, thanh toán qua ngân hàng)
- Dashboard quản trị thật (admin panel)
- Multi-language support (chỉ Tiếng Việt)
- Mobile app

## 4. Quy Tắc Kỹ Thuật Bất Biến (Technical Invariants)

| # | Quy tắc | Lý do |
|---|---------|-------|
| T1 | Next.js 16.3+ với App Router | Latest stable, Turbopack, React 19.2 |
| T2 | Tailwind CSS v4 CSS-first (không tailwind.config.ts) | Chuẩn mới, CSS-first |
| T3 | TypeScript strict mode | Type safety toàn diện |
| T4 | Shadcn UI + Radix primitives | UI component chuẩn, accessible |
| T5 | `motion` (from `motion/react`) | Animation chuẩn React 19 |
| T6 | Server Components by default | Performance + SEO |
| T7 | Client Components chỉ khi cần interactivity | Rõ ràng trách nhiệm |

## 5. Quy Tắc Thiết Kế (Design Invariants)

| # | Quy tắc | Chi tiết |
|---|---------|---------|
| D1 | Nền tối (Dark theme) | zinc-950 / Deep Space Black |
| D2 | Màu accent | Cyan (tốc độ), Violet (AI/automation), Emerald (trạng thái) |
| D3 | Glassmorphism cards | `backdrop-blur-xl`, `border border-white/10` |
| D4 | Gradients tinh tế | `bg-gradient-to-r`, mesh glow effects |
| D5 | Lucide Icons | Không dùng ảnh placeholder chất lượng thấp |
| D6 | Responsive-first | Mobile-first, test trên 375px → 1440px+ |

## 6. Quy Tắc Business (Business Invariants)

| # | Quy tắc | Chi tiết |
|---|---------|---------|
| B1 | MST công ty | 3703344754 — hiển thị ở footer mọi trang |
| B2 | Địa chỉ mới | Số 39/9, Đường Trần Hưng Đạo, Phường Đông Hòa, TP. HCM |
| B3 | Hotline | 0976830911 — hiển thị ở header và footer |
| B4 | Đơn vị tiền tệ | VND — không hiển thị USD trên UI |
| B5 | VietQR format | `img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-compact2.png?amount=<AMOUNT>&addInfo=<ORDER_CODE>&accountName=<NAME>` |

## 7. Quy Tắc Spec (Spec Invariants)

| # | Quy tắc | Chi tiết |
|---|---------|---------|
| S1 | Spec trước, code sau | Không viết code nếu chưa có spec |
| S2 | Spec là source of truth | Code phải tuân thủ spec, không ngược lại |
| S3 | Không thời hạn trong spec | Tránh version number cụ thể, dùng patterns |
| S4 | Cập nhật spec song hành | Nếu business logic thay đổi, spec phải update |
| S5 | Feature spec trong `docs/features/` | Mỗi feature có file spec riêng |

## 8. Kế Hoạch Phát Triển

| Giai Đoạn | Phạm vi | Trạng thái |
|-----------|---------|-----------|
| **MVP Frontend** | Landing, Configurator, App Catalog, Checkout, Dashboard Mock | 🔄 Đang lên plan |
| **Phase 2: Backend** | API, DB, Auth, Payment webhook, Provisioning | ⏳ Chờ |
| **Phase 3: Enterprise** | Multi-server, Load Balancer, AI Stacks, Affiliate | ⏳ Chờ |

---

## Phê Duyệt

| Vai trò | Họ tên | Ngày phê duyệt |
|---------|--------|----------------|
| Chủ dự án | Đỗ Kiến Hưng | ___/___/2026 |
| Lead Developer | ___ | ___/___/2026 |
