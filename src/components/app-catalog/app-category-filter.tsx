"use client";
import { Grid, List, Filter, Globe, FileText, ShoppingCart, Database, Wrench, BarChart3 } from "lucide-react";

interface AppCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  all: Filter,
  web: Globe,
  cms: FileText,
  ecommerce: ShoppingCart,
  database: Database,
  devtools: Wrench,
  monitoring: BarChart3,
};

const DEFAULT_CATEGORIES: AppCategory[] = [
  { id: "all", name: "Tất cả", icon: "all", count: 50 },
  { id: "web", name: "Web Server", icon: "web", count: 15 },
  { id: "cms", name: "CMS", icon: "cms", count: 12 },
  { id: "ecommerce", name: "E-commerce", icon: "ecommerce", count: 8 },
  { id: "database", name: "Database", icon: "database", count: 6 },
  { id: "devtools", name: "Dev Tools", icon: "devtools", count: 5 },
  { id: "monitoring", name: "Monitoring", icon: "monitoring", count: 4 },
];

interface AppCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  categories?: AppCategory[];
}

export function AppCategoryFilter({
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  categories = DEFAULT_CATEGORIES,
}: AppCategoryFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-[#06b6d4]" />
          <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white">Bộ lọc</h3>
        </div>
        <div className="flex items-center gap-1 bg-[#1e293b] rounded-lg p-1 border border-white/8">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`h-8 w-8 p-0 rounded-md flex items-center justify-center transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-[#10b981]/20 text-[#10b981]"
                : "text-[#94a3b8] hover:text-white"
            }`}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`h-8 w-8 p-0 rounded-md flex items-center justify-center transition-all cursor-pointer ${
              viewMode === "list"
                ? "bg-[#10b981]/20 text-[#10b981]"
                : "text-[#94a3b8] hover:text-white"
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const IconComponent = CATEGORY_ICONS[category.icon] || Filter;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981]"
                  : "bg-[#1e293b] hover:bg-[#1e293b]/80 border border-white/8 text-[#94a3b8] hover:text-white"
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-xs text-[#64748b]">
                ({category.count})
              </span>
            </button>
          );
        })}
      </div>

      {selectedCategory !== "all" && (
        <div className="text-sm text-[#94a3b8] bg-[#1e293b]/50 rounded-lg p-3 border border-white/5">
          <span className="text-[#10b981] font-medium">
            {categories.find(c => c.id === selectedCategory)?.count} ứng dụng
          </span>{" "}
          trong danh mục này
        </div>
      )}
    </div>
  );
}
