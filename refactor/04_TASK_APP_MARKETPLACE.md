# 04. Task 4: 1-Click App Marketplace & Quick Deploy Drawer

> **Tệp tác động:**
> - `src/app/apps/page.tsx`
> - `src/components/app-catalog/apps-catalog.tsx`
> - `src/components/app-catalog/app-card.tsx`
> - `src/components/app-catalog/app-category-filter.tsx`
> - `src/components/app-catalog/app-detail-modal.tsx` (Component mới)

---

## 1. Mục Tiêu Task

- Nâng cấp trải nghiệm Kho ứng dụng 1-Click: Giúp người dùng thấy rõ **Stack kỹ thuật đầy đủ** của từng ứng dụng (vd: n8n bao gồm Node 20, PostgreSQL, Webhook Engine, SSL Auto).
- Thêm **Badge Cấu Hình Khuyến Nghị** trên từng Card (vd: `Khuyên dùng: ≥ 2 Core / 4GB RAM`).
- Bổ sung **Quick Deploy Drawer / Modal**: Bấm vào bất kỳ ứng dụng nào sẽ hiển thị chi tiết:
  - Cổng dịch vụ mặc định (Default Port, vd: `5678`, `3000`, `8080`).
  - Hướng dẫn truy cập ban đầu.
  - Lệnh Docker Compose mẫu.
  - Nút "Triển Khai Cùng VPS Ngay" (Tự động chuyển sang `/configure` với thông số tối ưu).

---

## 2. Chi Tiết Thay Đổi Code

### A. Thẻ Ứng Dụng Mới (`app-card.tsx`)
```tsx
import { ArrowRight, Server, Layers, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AppCard({ app, onSelect }: { app: AppItem; onSelect: (app: AppItem) => void }) {
  return (
    <div
      onClick={() => onSelect(app)}
      className="group relative rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-5 transition-all duration-200 hover:border-emerald-500/40 hover:bg-slate-900/90 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
            {/* SVG Logo */}
          </div>
          <Badge variant="outline" className="text-[11px] border-white/10 text-slate-400">
            {app.category}
          </Badge>
        </div>

        <h3 className="text-base font-bold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
          {app.name}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {app.description}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {app.stack.map((s) => (
            <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-slate-400 text-[11px]">
          <Cpu className="h-3.5 w-3.5 text-emerald-400" />
          {app.minRequirements}
        </span>
        <span className="text-emerald-400 font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          Chi tiết <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
```

### B. Category Filter Pills (`app-category-filter.tsx`)
- Thêm đếm số lượng ứng dụng trong từng tab: `Tất cả (15)`, `Automation & AI (3)`, `Web & App Dev (4)`, `CMS & Blog (2)`, `DevOps & Tools (4)`, `Database (2)`.
- Thanh tìm kiếm tức thời (Search Input) có phím tắt `Ctrl + K` hoặc `Esc` để clear.

---

## 3. Tiêu Chí Nghiệm Thu Task 4
- [ ] Lọc danh mục và tìm kiếm hoạt động tức thời, không bị giật lag.
- [ ] Chuyển đổi giữa Grid View và List View mượt mà.
- [ ] Mở Modal Quick-Deploy hiển thị đầy đủ Stack và cổng dịch vụ.
