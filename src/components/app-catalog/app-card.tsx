"use client";

import { useState } from "react";
import { ArrowRight, Server, Layers, Cpu } from "lucide-react";
import { AppIconRenderer } from "./app-icon";

export interface AppTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  version: string;
  size: string;
  installTime: number;
  rating: number;
  reviews: number;
  downloads: number;
  tags: string[];
  features: string[];
  requirements: string[];
  stack?: string[];
  defaultPort?: string;
  dockerCompose?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

interface AppCardProps {
  app: AppTemplate;
  onSelect?: (app: AppTemplate) => void;
  isSelected?: boolean;
}

export function AppCard({ app, onSelect, isSelected }: AppCardProps) {
  return (
    <div
      onClick={() => onSelect?.(app)}
      className="group relative rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-md p-5 transition-all duration-200 hover:border-[#10b981]/40 hover:bg-[#1e293b]/80 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="h-12 w-12 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
            <AppIconRenderer category={app.category} id={app.id} className="h-6 w-6 text-[#10b981]" />
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-[family-name:var(--font-fira-code)] bg-white/5 text-[#94a3b8] border border-white/8">
            {app.category}
          </span>
        </div>

        <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-1 group-hover:text-[#10b981] transition-colors">
          {app.name}
        </h3>
        <p className="text-xs text-[#94a3b8] line-clamp-2 mb-4 leading-relaxed">
          {app.description}
        </p>

        {app.stack && app.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {app.stack.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded bg-[#06b6d4]/10 text-[10px] font-[family-name:var(--font-fira-code)] text-[#06b6d4] border border-[#06b6d4]/20">
                {s}
              </span>
            ))}
          </div>
        )}

        {!app.stack && app.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {app.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-[family-name:var(--font-fira-code)] text-[#94a3b8]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-[#94a3b8] text-[11px]">
          <Cpu className="h-3.5 w-3.5 text-[#10b981]" />
          {app.requirements.join(" / ")}
        </span>
        <span className="text-[#10b981] font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          Chi tiết <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
