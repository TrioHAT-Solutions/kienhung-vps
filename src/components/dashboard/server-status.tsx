"use client";

import { Server, Cpu, MemoryStick, HardDrive, MapPin, Monitor, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatUptime } from "@/data/mock-metrics";
import type { PowerState } from "./power-state";

interface ServerStatusProps {
  power: PowerState;
  uptimeSeconds: number;
  ipAddress: string;
  serverName: string;
  osName: string;
  location: string;
}

const STATUS_CONFIG: Record<PowerState, { label: string; dot: string; text: string }> = {
  running: { label: "Đang chạy", dot: "bg-emerald-400", text: "text-emerald-400" },
  stopped: { label: "Đã dừng", dot: "bg-red-400", text: "text-red-400" },
  restarting: { label: "Đang khởi động lại...", dot: "bg-yellow-400 animate-pulse", text: "text-yellow-400" },
};

export function ServerStatus({
  power,
  uptimeSeconds,
  ipAddress,
  serverName,
  osName,
  location,
}: ServerStatusProps) {
  const status = STATUS_CONFIG[power];

  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Server className="h-5 w-5 text-cyan-400" />
            {serverName}
          </CardTitle>
          <div className={`flex items-center gap-2 text-sm font-medium ${status.text}`}>
            <span className={`h-2.5 w-2.5 rounded-full ${status.dot}`} />
            {status.label}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-sm">
          <div>
            <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
              <MapPin className="h-3.5 w-3.5" />
              Datacenter
            </div>
            <span className="text-white">{location}</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
              <Monitor className="h-3.5 w-3.5" />
              Hệ điều hành
            </div>
            <span className="text-white">{osName}</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
              <Cpu className="h-3.5 w-3.5" />
              IP Address
            </div>
            <span className="text-white font-mono">{ipAddress}</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5 col-span-2 md:col-span-1">
            <Clock className="h-3.5 w-3.5" />
            Uptime
          </div>
          <div className="font-mono text-zinc-200">{formatUptime(uptimeSeconds)}</div>
          <div className="flex items-center gap-1.5">
            <MemoryStick className="h-3.5 w-3.5" />
            KVM Virtualization
          </div>
          <div className="flex items-center gap-1.5 justify-end md:justify-start">
            <HardDrive className="h-3.5 w-3.5" />
            NVMe Gen4
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
