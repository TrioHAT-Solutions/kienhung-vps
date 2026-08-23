"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { AppCategoryFilter } from "./app-category-filter";
import { AppGridView } from "./app-grid-view";
import { AppListView } from "./app-list-view";
import type { AppTemplate } from "./app-card";
import { APPS, CATEGORY_LABELS } from "@/data/apps";

export function AppsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedApps, setSelectedApps] = useState<AppTemplate[]>([]);
  const [query, setQuery] = useState("");

  const categories = Object.keys(CATEGORY_LABELS).map((id) => ({
    id,
    name: CATEGORY_LABELS[id],
    icon: id,
    count:
      id === "all"
        ? APPS.length
        : APPS.filter((a) => a.category === id).length,
  }));

  const filteredApps = (() => {
    const q = query.trim().toLowerCase();
    return APPS.filter((app) => {
      const inCategory =
        selectedCategory === "all" || app.category === selectedCategory;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.tags.some((tag) => tag.includes(q))
      );
    });
  })();

  const toggleApp = (app: AppTemplate) => {
    setSelectedApps((prev) =>
      prev.some((a) => a.id === app.id)
        ? prev.filter((a) => a.id !== app.id)
        : [...prev, app]
    );
  };

  return (
    <div className="space-y-6">
      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748b]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm ứng dụng (VD: wordpress, docker...)"
          className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#1e293b] border border-white/8 text-white placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981]/50 transition-all"
        />
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-8">
        <aside>
          <div className="lg:sticky lg:top-24">
            <AppCategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              categories={categories}
            />
          </div>
        </aside>

        <main className="min-w-0">
          <p className="text-sm text-[#64748b] mb-4">
            Hiển thị <span className="text-[#10b981] font-medium">{filteredApps.length}</span> ứng dụng
          </p>

          {filteredApps.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/8 rounded-xl">
              <p className="text-[#94a3b8]">Không tìm thấy ứng dụng phù hợp</p>
              <button
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-2 text-[#10b981] hover:underline cursor-pointer"
              >
                Xóa bộ lọc
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <AppGridView
              apps={filteredApps}
              selectedApps={selectedApps}
              onSelectApp={toggleApp}
            />
          ) : (
            <AppListView
              apps={filteredApps}
              selectedApps={selectedApps}
              onSelectApp={toggleApp}
            />
          )}
        </main>
      </div>

      {selectedApps.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 border-t border-white/8 bg-[#080c14]/95 backdrop-blur-xl p-4">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            <span className="text-sm text-[#94a3b8]">
              Đã chọn <span className="text-[#10b981] font-bold">{selectedApps.length}</span> ứng dụng
            </span>
            <Link
              href="/configure"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Cấu hình VPS
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
