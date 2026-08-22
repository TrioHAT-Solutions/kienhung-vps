"use client";

import { ScrollText, Power, Camera, DatabaseBackup, TerminalSquare, Cog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ActivityEntry, ActivityType } from "@/data/mock-metrics";

const TYPE_ICON: Record<ActivityType, React.ComponentType<{ className?: string }>> = {
  power: Power,
  snapshot: Camera,
  backup: DatabaseBackup,
  ssh: TerminalSquare,
  system: Cog,
};

const TYPE_COLOR: Record<ActivityType, string> = {
  power: "text-yellow-400",
  snapshot: "text-violet-400",
  backup: "text-emerald-400",
  ssh: "text-cyan-400",
  system: "text-zinc-400",
};

interface ActivityFeedProps {
  activities: ActivityEntry[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <ScrollText className="h-4.5 w-4.5 text-zinc-300" />
          Hoạt động gần đây
        </CardTitle>
      </CardHeader>
      <CardContent data-testid="activity-feed">
        <ul className="space-y-3">
          {activities.map((entry) => {
            const Icon = TYPE_ICON[entry.type];
            return (
              <li key={entry.id} className="flex items-start gap-3 text-sm">
                <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${TYPE_COLOR[entry.type]}`} />
                <span className="text-zinc-300 flex-1">{entry.message}</span>
                <span className="text-xs text-zinc-600 font-mono flex-shrink-0">
                  {entry.timestamp}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
