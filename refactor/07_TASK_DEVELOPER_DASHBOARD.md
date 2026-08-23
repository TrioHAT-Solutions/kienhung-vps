# 07. Task 7: Developer Console & Server Dashboard

> **Tệp tác động:**
> - `src/app/dashboard/page.tsx`
> - `src/components/dashboard/server-status.tsx`
> - `src/components/dashboard/usage-meters.tsx`
> - `src/components/dashboard/action-buttons.tsx`
> - `src/components/dashboard/activity-feed.tsx`
> - `src/components/dashboard/mock-banner.tsx`

---

## 1. Mục Tiêu Task

- Nâng cấp Bảng Điều Khiển (`/dashboard`) thành giao diện **Cloud Server Console chuẩn Developer** (tương tự Hetzner Cloud Console / Railway Dashboard).
- **Server Status Header**:
  - Tên máy chủ, OS Icon, Datacenter Location kèm cờ quốc gia, Uptime counter nhảy từng giây.
  - Quick Copy Lệnh SSH 1-Click: `ssh root@103.124.92.18 -p 22` có nút bấm copy tức thời.
- **Thao Tác Nhanh (Action Buttons)**:
  - Nút Khởi động lại (Reboot), Tắt/Bật nguồn (Power Toggle), Tạo Snapshot sao lưu.
  - Có Toast thông báo và Modal xác nhận an toàn trước khi Tắt nguồn.
- **Biểu Đồ Tài Nguyên Thời Gian Thực (Usage Meters)**:
  - Gauge Meter đo CPU Usage %, RAM Usage, Disk IOPS, Network Traffic In/Out.
  - Đồ thị sóng Sparkline mượt mà cập nhật mỗi 2 giây.
- **Terminal Activity Log (Nhật ký sự kiện thời gian thực)**:
  - Hiển thị dòng log theo phong cách Linux Systemd/Syslog (`[INFO] System kernel ready...`, `[AUTH] SSH connection from IP...`).

---

## 2. Chi Tiết Thay Đổi Code

### A. Quick SSH Copy Component (`server-status.tsx`)
```tsx
export function SshCommandBar({ ipAddress }: { ipAddress: string }) {
  const [copied, setCopied] = useState(false);
  const sshCmd = `ssh root@${ipAddress}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sshCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-xs">
      <span className="text-slate-500">SSH:</span>
      <span className="text-emerald-400 font-semibold">{sshCmd}</span>
      <button
        onClick={handleCopy}
        className="ml-auto p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        title="Sao chép lệnh SSH"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
```

### B. Nâng Cấp Usage Meters (`usage-meters.tsx`)
- Thay thế các thanh xám đơn điệu bằng thanh đo Progress có màu sắc cảnh báo thông minh:
  - Dưới 70%: Màu xanh Emerald `#10B981`.
  - 70% - 85%: Màu vàng Amber `#F59E0B`.
  - Trên 85%: Màu đỏ Red `#EF4444`.
- Sparkline SVG mềm mại hiển thị lịch sử 30 điểm đo gần nhất.

---

## 3. Tiêu Chí Nghiệm Thu Task 7
- [ ] Uptime timer nhảy số đều đặn từng giây.
- [ ] Bấm Khởi động lại (Restart) chuyển trạng thái `restarting` và tự động quay lại `running` sau 2.5s kèm dòng log mới trong Activity Feed.
- [ ] Bấm Copy SSH sao chép đúng chuỗi lệnh vào clipboard.
- [ ] Toàn bộ màn hình Dashboard hiển thị chuẩn trên cả Mobile (với bottom nav bar) lẫn Desktop.
