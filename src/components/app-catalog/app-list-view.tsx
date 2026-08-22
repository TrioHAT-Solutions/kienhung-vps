"use client";

import { useState } from "react";
import { AppTemplate } from "./app-card";
import { AppCard } from "./app-card";

interface AppListViewProps {
  apps: AppTemplate[];
  selectedApps: AppTemplate[];
  onSelectApp: (app: AppTemplate) => void;
}

export function AppListView({ apps, selectedApps, onSelectApp }: AppListViewProps) {
  return (
    <div className="space-y-2">
      {apps.map((app) => (
        <AppCard
          key={app.id}
          app={app}
          onSelect={onSelectApp}
          isSelected={selectedApps.some(selected => selected.id === app.id)}
        />
      ))}
    </div>
  );
}