"use client";

import { FlaskConical } from "lucide-react";

export function MockBanner() {
  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 flex items-center gap-3">
      <FlaskConical className="h-5 w-5 text-amber-400 flex-shrink-0" />
      <p className="text-sm text-amber-300">
        <span className="font-semibold">Chế độ mô phỏng</span> — đây là bản preview
        giao diện quản trị, dữ liệu hiển thị là giả lập.
      </p>
    </div>
  );
}
