# 06. Task 6: Checkout Flow, VietQR QuickLink & Live Provisioning Animation

> **Tệp tác động:**
> - `src/app/checkout/page.tsx`
> - `src/components/checkout/customer-form.tsx`
> - `src/components/checkout/payment-qr.tsx`
> - `src/components/checkout/order-summary.tsx`
> - `src/components/checkout/success-confirmation.tsx`
> - `src/components/checkout/progress-indicator.tsx`

---

## 1. Mục Tiêu Task

- Tối ưu luồng Đặt hàng & Thanh toán (Checkout Flow) thành trải nghiệm mua máy chủ mượt mà nhất.
- **Form Khách Hàng**: Input trường thông tin có focus ring sắc nét, validation Zod thời gian thực, tự động định dạng số điện thoại Việt Nam.
- **Khung Thanh Toán VietQR QuickLink**:
  - Mã QR động tạo theo chuẩn VietQR NAPAS 24/7.
  - **Nút Copy 1-Click** cho: Số tài khoản ngân hàng, Số tiền chính xác, Nội dung chuyển khoản (`KHVPS-XXXX`).
  - Phản hồi Toast "Đã sao chép vào bộ nhớ tạm!" tức thì.
  - Bộ đếm ngược thời gian giữ chỗ (15 phút).
- **Mô Phỏng Cấp Phát Máy Chủ Sống Động (Live Provisioning Simulator)**:
  - Khi bấm "Tôi đã chuyển khoản", hiển thị animation 4 bước theo thời gian thực (Check giao dịch ➔ Khởi tạo Hypervisor ➔ Cài đặt OS ➔ Bàn giao IP trong 3 giây) trước khi chuyển vào Dashboard.

---

## 2. Chi Tiết Thay Đổi Code

### A. Khung Thanh Toán VietQR Chuyên Nghiệp (`payment-qr.tsx`)
```tsx
// Bổ sung nút sao chép nhanh có icon feedback
function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
      <div>
        <div className="text-[11px] text-slate-400">{label}</div>
        <div className="text-sm font-mono font-bold text-slate-100">{value}</div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className="h-8 px-2.5 text-xs text-slate-300 hover:text-white hover:bg-white/10"
      >
        {copied ? (
          <span className="text-emerald-400 flex items-center gap-1">
            <Check className="h-3.5 w-3.5" /> Đã chép
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <Copy className="h-3.5 w-3.5" /> Sao chép
          </span>
        )}
      </Button>
    </div>
  );
}
```

### B. Live Provisioning Animation (`success-confirmation.tsx`)
Mô phỏng quy trình kích hoạt server 4 bước:
1. `[✓]` Xác nhận giao dịch VietQR hợp lệ (Mã đơn: `KHVPS-XXXX`).
2. `[✓]` Phân bổ tài nguyên vCPU & RAM ECC trên cụm máy chủ TP. HCM.
3. `[✓]` Tự động khởi chạy hệ điều hành & cấu hình SSH port 22.
4. `[✓]` Cấp phát IPv4 tĩnh `103.xxx.xxx.xxx` thành công.
➔ Tự động chuyển hướng vào `/dashboard` sau 3 giây hoặc click nút "Truy cập Console".

---

## 3. Tiêu Chí Nghiệm Thu Task 6
- [ ] Form validate chính xác theo chuẩn Zod (báo lỗi màu đỏ khi thiếu tên/email/sđt).
- [ ] Bấm sao chép STK, Số tiền, Nội dung hiển thị thông báo "Đã sao chép" rõ ràng.
- [ ] Bấm xác nhận thanh toán chạy animation 4 bước mượt mà và chuyển hướng vào Dashboard.
