"use client";

import { useState } from "react";
import { Grid, List, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const appCategories: AppCategory[] = [
  { id: "all", name: "Tất cả", icon: "🔍", count: 50 },
  { id: "web", name: "Web Server", icon: "🌐", count: 15 },
  { id: "cms", name: "CMS", icon: "📝", count: 12 },
  { id: "ecommerce", name: "E-commerce", icon: "🛒", count: 8 },
  { id: "database", name: "Database", icon: "🗄️", count: 6 },
  { id: "devtools", name: "Dev Tools", icon: "🛠️", count: 5 },
  { id: "monitoring", name: "Monitoring", icon: "📊", count: 4 },
];

interface AppCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function AppCategoryFilter({
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
}: AppCategoryFilterProps) {
  return (
    <div className="space-y-4">
      {/* View Mode Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-cyan-400" />
          <h3 className="text-lg font-semibold">Bộ lọc</h3>
        </div>
        <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("grid")}
            className="h-8 w-8 p-0"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("list")}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {appCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              selectedCategory === category.id
                ? "bg-cyan-500/20 border border-cyan-500/50 text-cyan-400"
                : "bg-white/10 hover:bg-white/20 text-white/70"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
            <span className="text-xs text-muted-foreground">
              ({category.count})
            </span>
          </button>
        ))}
      </div>

      {/* Category Stats */}
      {selectedCategory !== "all" && (
        <div className="text-sm text-muted-foreground bg-white/5 rounded-lg p-3">
          <span className="text-cyan-400 font-medium">
            {appCategories.find(c => c.id === selectedCategory)?.count} ứng dụng
          </span>{" "}
          trong danh mục này
        </div>
      )}
    </div>
  );
}