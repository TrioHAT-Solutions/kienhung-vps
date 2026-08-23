# 05. Task 5: Pricing Matrix & Full Comparison Table

> **Tệp tác động:**
> - `src/app/pricing/page.tsx`
> - `src/components/pricing/pricing-card-refactored.tsx` (Component mới)
> - `src/components/pricing/feature-comparison-table.tsx` (Component mới)

---

## 1. Mục Tiêu Task

- Tái cấu trúc trang Bảng Giá (`/pricing`): Loại bỏ card phẳng đơn điệu và màu tím rực.
- Bổ sung **Toggle Chu kỳ Thanh Toán** (Theo tháng vs Theo năm - Giảm ngay 20%).
- Nổi bật gói **Professional (Phổ Biến Nhất)** với viền LED Emerald vi tế (`border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]`).
- Xây dựng **Bảng So Sánh Chi Tiết Toàn Diện (Feature Matrix Table)**: So sánh CPU, RAM, NVMe Read/Write Speed, IPv4/IPv6, SLA Uptime, Backup tự động, Hỗ trợ kỹ thuật 24/7.
- Cải thiện mục **FAQ Accordion**: Cho phép click mở/đóng từng câu hỏi với animation mượt mà.

---

## 2. Chi Tiết Thay Đổi Code

### A. Toggle Chu Kỳ Thanh Toán
```tsx
const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
const discountRate = 0.2; // 20% khi chọn năm
```
- Nút chuyển đổi (Toggle Pill):
  - [Theo tháng]
  - [Theo năm (Tiết kiệm 20% 🎉)]

### B. Thẻ Bảng Giá Chuyên Nghiệp
Mỗi thẻ gói bao gồm:
1. **Tier Name & Target**: (vd: `Professional` — Dành cho ứng dụng Production & Web thương mại).
2. **Giá tiền theo tháng**: Hiển thị số to đậm bằng font `Space Grotesk`, tự động tính giảm 20% khi toggle yearly.
3. **Hardware Highlights**: 4 vCPU Intel/AMD, 8GB RAM ECC, 120GB SSD NVMe Gen4.
4. **Key Features**: Danh sách tick xanh với icon `Check` của Lucide.
5. **Nút CTA**: Chuyển thẳng sang `/configure` kèm cấu hình gói đã chọn sẵn.

### C. Bảng So Sánh Chi Tiết (Feature Comparison Matrix)
Tạo table responsive với các nhóm thông số:
- **Tài nguyên phần cứng:** vCPU, Dung lượng RAM, Chuẩn ổ cứng, Băng thông, Địa chỉ IPv4 riêng.
- **Mạng & Bảo mật:** Anti-DDoS Đa Tầng, Free SSL Certificate, Tường lửa phần cứng, Port tốc độ 1Gbps.
- **Hỗ trợ & Cam kết:** Uptime SLA 99.9%, Khởi tạo trong 60s, Hóa đơn VAT điện tử, Hỗ trợ 24/7/365 qua Ticket/Hotline.

---

## 3. Tiêu Chí Nghiệm Thu Task 5
- [ ] Bấm toggle "Theo năm" giá của toàn bộ 4 gói giảm 20% ngay lập tức.
- [ ] Gói Professional có hiệu ứng visual nổi bật đúng chuẩn tier Best-Seller.
- [ ] Bảng so sánh hiển thị tốt trên cả Desktop lẫn Mobile (Mobile có thể vuốt ngang hoặc thu gọn).
- [ ] FAQ accordion mở đóng mượt mà.
