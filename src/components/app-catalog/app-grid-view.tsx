"use client";

import { useState } from "react";
import { AppTemplate } from "./app-card";
import { AppCard } from "./app-card";

interface AppGridViewProps {
  apps: AppTemplate[];
  selectedApps: AppTemplate[];
  onSelectApp: (app: AppTemplate) => void;
}

export function AppGridView({ apps, selectedApps, onSelectApp }: AppGridViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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