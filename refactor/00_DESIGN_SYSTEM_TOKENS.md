# 00. Hướng Dẫn Design System & Design Tokens

> **Triết lý:** Developer-First Cloud Infrastructure  
> **Tham chiếu phong cách:** Railway.app, Supabase, Vercel, Hetzner Console  
> **Tiêu chuẩn UI/UX Pro Max:** Đạt chuẩn WCAG AAA về tương phản, 60fps micro-interactions, responsive 375px - 1440px.

---

## 1. Bảng Màu (Color Tokens)

### Nguyên tắc cốt lõi:
- ❌ **CẤM:** Dải gradient màu tím-xanh lặp lại máy móc (`from-cyan-400 via-violet-400 to-emerald-400`).
- ✅ **NÊN:** Nền tối có chiều sâu (OLED/Deep Slate) kết hợp màu nhấn Emerald (`#10B981`) cho trạng thái hoạt động/thành công, Cyan (`#06B6D4`) cho hiệu năng/IOPS, Amber (`#F59E0B`) cho cảnh báo, Slate (`#94A3B8`) cho nội dung phụ.

### Chi tiết mã màu:
| Token Name | Hex Code | OKLCH / HSL Equivalent | Ý Nghĩa / Mục Đích Sử Dụng |
| :--- | :--- | :--- | :--- |
| `--color-bg-root` | `#080C14` | `oklch(0.10 0.01 260)` | Nền chính toàn bộ trang web (Deep dark developer aesthetic) |
| `--color-bg-card` | `#0F172A` | `oklch(0.16 0.015 260)` | Nền thẻ Card, Dashboard Surface, Selector Items |
| `--color-bg-card-hover`| `#1E293B` | `oklch(0.22 0.02 260)` | Nền thẻ khi hover hoặc active |
| `--color-accent-emerald`| `#10B981` | `oklch(0.72 0.19 155)` | Trạng thái Online, CTA Chính, Uptime 99.9%, Tiết kiệm giá |
| `--color-accent-cyan` | `#06B6D4` | `oklch(0.78 0.14 200)` | Tốc độ NVMe, Chỉ số IOPS, Terminal Highlight, Network In/Out |
| `--color-accent-amber`| `#F59E0B` | `oklch(0.76 0.16 75)` | Badge Khuyên Dùng, Cảnh báo dung lượng, Backup Add-on |
| `--color-border-subtle`| `rgba(255,255,255,0.08)` | 1px border cho các Card mặc định |
| `--color-border-hover` | `rgba(16,185,129,0.4)` | Viền sáng nhẹ khi hover hoặc focus |
| `--color-text-primary` | `#F8FAFC` | Tương phản cực cao 14.5:1 trên nền tối (WCAG AAA) |
| `--color-text-secondary`| `#94A3B8` | Tương phản 5.8:1 trên nền tối, rõ nét, không bị mờ |
| `--color-text-muted` | `#64748B` | Dành cho label phụ, caption nhỏ |

---

## 2. Typography (Cấu Hình Phông Chữ)

Sử dụng 3 font chữ chuyên dụng bổ trợ nhau:

1. **`Space Grotesk` (Display & Headings)**:
   - Dùng cho: Tiêu đề H1, H2, H3, Chỉ số giá tiền (Pricing figures), Thông số CPU/RAM lớn.
   - Đặc tính: Đậm chất công nghệ, hiện đại, sắc sảo.
2. **`DM Sans` (Body & Content)**:
   - Dùng cho: Đoạn văn mô tả, nhãn Form, danh sách tính năng, bảng so sánh.
   - Đặc tính: Tối ưu cho hiển thị tiếng Việt có dấu, đọc không bị mỏi mắt.
3. **`Fira Code` / `JetBrains Mono` (Code & Terminal)**:
   - Dùng cho: Lệnh SSH, IP Address, Port, JSON config, Log output.

---

## 3. Quy Chuẩn Glassmorphism & Shadow Sắc Nét

```css
/* Card Surface Developer Style */
.infra-card {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.infra-card:hover {
  background: rgba(30, 41, 59, 0.85);
  border-color: rgba(16, 185, 129, 0.35);
  box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 0 12px -2px rgba(16, 185, 129, 0.15);
}
```

---

## 4. Danh Sách Anti-Patterns Cần Tránh Tuyệt Đối

1. ❌ **Không dùng Emoji thay Icon**: Luôn dùng Lucide Icons (`Server`, `Shield`, `Zap`, `Terminal`, `Cpu`, `HardDrive`, `Check`, `Copy`).
2. ❌ **Không làm hover gây nhảy layout (Layout Shift)**: Tuyệt đối không dùng `hover:scale-105` trên card nằm trong grid gây rung lắc phần tử xung quanh. Chỉ dùng `transform: translateY(-2px)` hoặc thay đổi border/shadow/bg.
3. ❌ **Không để thiếu `cursor-pointer`**: Mọi nút bấm, tab filter, thẻ card chọn được đều phải có con trỏ pointer rõ ràng.
4. ❌ **Không dùng chữ xám mờ trên nền xám tối**: Đảm bảo toàn bộ chữ phụ có mã màu tối thiểu từ `#94A3B8` trở lên.
5. ❌ **Không để button thiếu trạng thái Loading / Active**: Nút thanh toán, copy, reboot phải có visual feedback tức thì.
