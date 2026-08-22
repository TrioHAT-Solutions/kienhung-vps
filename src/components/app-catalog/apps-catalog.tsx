"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { AppCategoryFilter } from "./app-category-filter";
import { AppGridView } from "./app-grid-view";
import { AppListView } from "./app-list-view";
import type { AppTemplate } from "./app-card";
import { Button } from "@/components/ui/button";
import { APPS, CATEGORY_LABELS } from "@/data/apps";

const CATEGORY_ICONS: Record<string, string> = {
  all: "🔍",
  web: "🌐",
  cms: "📝",
  ecommerce: "🛒",
  database: "🗄️",
  devtools: "🛠️",
  monitoring: "📊",
};

export function AppsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedApps, setSelectedApps] = useState<AppTemplate[]>([]);
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () =>
      Object.keys(CATEGORY_LABELS).map((id) => ({
        id,
        name: CATEGORY_LABELS[id],
        icon: CATEGORY_ICONS[id],
        count:
          id === "all"
            ? APPS.length
            : APPS.filter((a) => a.category === id).length,
      })),
    []
  );

  const filteredApps = useMemo(() => {
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
  }, [selectedCategory, query]);

  const toggleApp = (app: AppTemplate) => {
    setSelectedApps((prev) =>
      prev.some((a) => a.id === app.id)
        ? prev.filter((a) => a.id !== app.id)
        : [...prev, app]
    );
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm ứng dụng (VD: wordpress, docker...)"
          className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
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
          <p className="text-sm text-zinc-500 mb-4">
            Hiển thị <span className="text-cyan-400 font-medium">{filteredApps.length}</span> ứng dụng
          </p>

          {filteredApps.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
              <p className="text-zinc-400">Không tìm thấy ứng dụng phù hợp</p>
              <Button
                variant="link"
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-2"
              >
                Xóa bộ lọc
              </Button>
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

      {/* Selection bar */}
      {selectedApps.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl p-4">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            <span className="text-sm text-zinc-300">
              Đã chọn <span className="text-cyan-400 font-bold">{selectedApps.length}</span> ứng dụng
            </span>
            <Link href="/configure">
              <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600">
                Cấu hình VPS
                <ShoppingCart className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
