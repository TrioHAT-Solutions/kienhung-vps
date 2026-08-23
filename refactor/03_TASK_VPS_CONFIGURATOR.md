# 03. Task 3: VPS Configurator & Interactive Pricing Engine

> **Tệp tác động:**
> - `src/app/configure/page.tsx`
> - `src/components/vps-configurator/cpu-selector.tsx`
> - `src/components/vps-configurator/memory-selector.tsx`
> - `src/components/vps-configurator/storage-selector.tsx`
> - `src/components/vps-configurator/os-selector.tsx`
> - `src/components/vps-configurator/location-selector.tsx`
> - `src/components/vps-configurator/add-ons-selector.tsx`
> - `src/components/vps-configurator/price-summary.tsx`

---

## 1. Mục Tiêu Task

- Cải tiến giao diện chọn cấu hình từ các Card phẳng thành **Visual Hardware Rig**:
  - Hỗ trợ chọn nhanh các cấu hình chuẩn hoặc kéo thanh trượt tùy ý.
  - Hiển thị thanh đo tỷ lệ tài nguyên trực quan.
- **Sửa dứt điểm lỗi TypeScript** trong `add-ons-selector.tsx` (dùng `as const` cho danh mục filter).
- Nâng cấp **Sticky Price Summary**:
  - Thể hiện rõ cấu trúc giá: Chi phí CPU + RAM + NVMe + Add-on + Giảm giá chu kỳ thanh toán (-20% khi chọn 12 tháng).
  - Nút "Tiến Hành Đặt Hàng" có animation phản hồi mượt mà.

---

## 2. Chi Tiết Thay Đổi Code

### A. Sửa Lỗi TypeScript trong `add-ons-selector.tsx`
Cập nhật danh sách category với `as const` để không bị lỗi type `string` không gán được cho `SetStateAction`:
```tsx
const CATEGORIES = ["all", "backup", "security", "performance", "monitoring"] as const;

{CATEGORIES.map((cat) => (
  <Button
    key={cat}
    variant={category === cat ? "default" : "outline"}
    size="sm"
    onClick={() => setCategory(cat)}
    className={category === cat
      ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
      : "border-white/10 text-slate-300 hover:bg-white/5"
    }
  >
    {cat === "all" ? "Tất cả" :
     cat === "backup" ? "Sao lưu" :
     cat === "security" ? "Bảo mật" :
     cat === "performance" ? "Tối ưu tốc độ" : "Giám sát"}
  </Button>
))}
```

### B. Nâng Cấp Selector (`cpu-selector.tsx`, `memory-selector.tsx`, `storage-selector.tsx`)
- Thêm icon phần cứng chuyên biệt (`Cpu`, `HardDrive`, `Zap`).
- Đổi màu Active Ring từ Cyan rực rỡ sang viền sắc nét: `border-emerald-500/60 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]`.
- Hiển thị badge: `NVMe PCIe 4.0 Read up to 7,000 MB/s`.

### C. Nâng Cấp `price-summary.tsx`
- Giữ cố định trên Desktop (`sticky top-24`).
- Bổ sung bảng kê chi tiết minh bạch:
  ```
  Phần cứng cơ bản:  360.000 đ
  Add-ons đã chọn (2): +150.000 đ
  Chu kỳ 12 tháng:    -20% (Tiết kiệm 102.000 đ/tháng)
  Tổng thanh toán:    408.000 đ/tháng
  ```
- Nút CTA chuyển sang trang `/checkout` với hiệu ứng hover mượt.

---

## 3. Tiêu Chí Nghiệm Thu Task 3
- [ ] Chạy `npx tsc --noEmit` đạt **0 lỗi**.
- [ ] Chọn thay đổi CPU, RAM, Storage, OS, Datacenter, Add-on thì bảng giá cập nhật tức thì 100% chính xác.
- [ ] Chuyển chu kỳ 1 tháng / 3 tháng / 6 tháng / 12 tháng tính đúng tỷ lệ giảm giá.
- [ ] Bấm "Tiến Hành Đặt Hàng" chuyển hướng trơn tru sang `/checkout` và lưu cấu hình vào Zustand store.
