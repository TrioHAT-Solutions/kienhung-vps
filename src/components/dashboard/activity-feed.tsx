"use client";

import { ScrollText, Power, Camera, DatabaseBackup, TerminalSquare, Cog } from "lucide-react";
import type { ActivityEntry, ActivityType } from "@/data/mock-metrics";

const TYPE_ICON: Record<ActivityType, React.ComponentType<{ className?: string }>> = {
  power: Power,
  snapshot: Camera,
  backup: DatabaseBackup,
  ssh: TerminalSquare,
  system: Cog,
};

const TYPE_COLOR: Record<ActivityType, string> = {
  power: "text-[#f59e0b]",
  snapshot: "text-[#8b5cf6]",
  backup: "text-[#10b981]",
  ssh: "text-[#06b6d4]",
  system: "text-[#94a3b8]",
};

interface ActivityFeedProps {
  activities: ActivityEntry[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/8">
        <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] text-white flex items-center gap-2">
          <ScrollText className="h-4.5 w-4.5 text-[#94a3b8]" />
          Hoạt động gần đây
        </h3>
      </div>
      <div className="p-5" data-testid="activity-feed">
        <ul className="space-y-3">
          {activities.map((entry) => {
            const Icon = TYPE_ICON[entry.type];
            return (
              <li key={entry.id} className="flex items-start gap-3 text-sm">
                <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${TYPE_COLOR[entry.type]}`} />
                <span className="text-[#94a3b8] flex-1">{entry.message}</span>
                <span className="text-xs text-[#64748b] font-[family-name:var(--font-fira-code)] flex-shrink-0">
                  {entry.timestamp}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
