# 08. Task 8: Kiểm Thử Tự Động & Tiêu Chuẩn Nghiệm Thu (Verification)

> **Mục tiêu:** Đảm bảo toàn bộ mã nguồn sau khi refactor đạt chất lượng kỹ thuật cao nhất: 0 lỗi TypeScript, Build sạch sẽ, và vượt qua toàn bộ kịch bản kiểm thử E2E Playwright.

---

## 1. Các Lệnh Kiểm Thử Tự Động (Automated Quality Gates)

Chạy lần lượt 3 lệnh sau tại thư mục gốc `d:\KIENHUNG-CO\kienhung-vps`:

### Bước 1: Kiểm tra lỗi kiểu dữ liệu TypeScript (TypeCheck)
```bash
npx tsc --noEmit
```
- **Tiêu chuẩn đạt:** Kết quả trả về mã `0`, không có bất kỳ lỗi TS nào (kể cả cảnh báo kiểu `any` hay lỗi `as const` trong selector).

### Bước 2: Build thử nghiệm phiên bản Production
```bash
npm run build
```
- **Tiêu chuẩn đạt:** Next.js compile thành công toàn bộ static & dynamic routes (`/`, `/configure`, `/pricing`, `/apps`, `/checkout`, `/dashboard`, `/about`).

### Bước 3: Chạy bộ Smoke Test E2E với Playwright
```bash
npx playwright test
```
- **Tiêu chuẩn đạt:** Toàn bộ test cases trong `e2e/smoke.spec.ts` vượt qua (100% Passed):
  - Kịch bản truy cập Trang chủ và điều hướng.
  - Kịch bản tùy chỉnh cấu hình VPS và tính giá.
  - Kịch bản lọc và tìm kiếm Kho ứng dụng 1-Click.
  - Kịch bản nhập Form và tạo mã thanh toán VietQR.
  - Kịch bản tương tác Server Dashboard và thao tác Restart.

---

## 2. Bảng Kiểm Tra Visual & UX (Theo UI/UX Pro Max)

Trước khi bàn giao kết quả cuối cùng, kiểm tra lại danh sách sau:

- [ ] **Màu sắc & Gradient:** Không còn dải màu gradient tím-xanh rẻ tiền. Toàn bộ trang web mang phong cách Dark Developer Platform đẳng cấp.
- [ ] **Typography:** Font chữ Space Grotesk và DM Sans hiển thị sắc nét, không lỗi dấu tiếng Việt.
- [ ] **Độ tương phản:** Mọi đoạn văn bản phụ đều có màu `#94A3B8` trở lên (đạt chuẩn WCAG AA ≥ 4.5:1).
- [ ] **Iconography:** 100% dùng SVG Lucide Icons, tuyệt đối không dùng emoji làm icon điều hướng.
- [ ] **Tương tác:** Tất cả nút bấm, selector, tab có `cursor-pointer` và hiệu ứng hover/active 150-250ms.
- [ ] **Clipboard Feedback:** Các nút copy IP, SSH, STK, Số tiền đều có Toast phản hồi trực quan "Đã sao chép".
- [ ] **Responsive:** Kiểm tra giao diện hoàn hảo trên màn hình Mobile (375px), Tablet (768px) và Desktop (1440px).
