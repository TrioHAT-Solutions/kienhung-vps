"use client";

import { FlaskConical } from "lucide-react";

export function MockBanner() {
  return (
    <div className="rounded-xl border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-4 py-3 flex items-center gap-3">
      <FlaskConical className="h-5 w-5 text-[#f59e0b] flex-shrink-0" />
      <p className="text-sm text-[#f59e0b]">
        <span className="font-semibold">Chế độ mô phỏng</span> — đây là bản preview
        giao diện quản trị, dữ liệu hiển thị là giả lập.
      </p>
    </div>
  );
}
