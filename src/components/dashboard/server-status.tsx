"use client";

import { useState } from "react";
import { Server, Cpu, MemoryStick, HardDrive, MapPin, Monitor, Clock, Copy, Check } from "lucide-react";
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
  running: { label: "Đang chạy", dot: "bg-[#10b981]", text: "text-[#10b981]" },
  stopped: { label: "Đã dừng", dot: "bg-[#ef4444]", text: "text-[#ef4444]" },
  restarting: { label: "Đang khởi động lại...", dot: "bg-[#f59e0b] animate-pulse", text: "text-[#f59e0b]" },
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
  const [copied, setCopied] = useState(false);

  const sshCommand = `ssh root@${ipAddress} -p 22`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sshCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white flex items-center gap-2">
            <Server className="h-5 w-5 text-[#06b6d4]" />
            {serverName}
          </h3>
          <div className={`flex items-center gap-2 text-sm font-medium ${status.text}`}>
            <span className={`h-2.5 w-2.5 rounded-full ${status.dot}`} />
            {status.label}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-sm">
          <div>
            <div className="flex items-center gap-1.5 text-[#64748b] mb-1">
              <MapPin className="h-3.5 w-3.5" />
              Datacenter
            </div>
            <span className="text-white">{location}</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#64748b] mb-1">
              <Monitor className="h-3.5 w-3.5" />
              Hệ điều hành
            </div>
            <span className="text-white">{osName}</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#64748b] mb-1">
              <Cpu className="h-3.5 w-3.5" />
              IP Address
            </div>
            <span className="text-white font-[family-name:var(--font-fira-code)]">{ipAddress}</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#64748b]">
          <div className="flex items-center gap-1.5 col-span-2 md:col-span-1">
            <Clock className="h-3.5 w-3.5" />
            Uptime
          </div>
          <div className="font-[family-name:var(--font-fira-code)] text-white">{formatUptime(uptimeSeconds)}</div>
          <div className="flex items-center gap-1.5">
            <MemoryStick className="h-3.5 w-3.5" />
            KVM Virtualization
          </div>
          <div className="flex items-center gap-1.5 justify-end md:justify-start">
            <HardDrive className="h-3.5 w-3.5" />
            NVMe Gen4
          </div>
        </div>

        <div className="mt-4 p-2.5 rounded-lg bg-black/40 border border-white/5 font-[family-name:var(--font-fira-code)] text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#64748b]">SSH:</span>
            <span className="text-[#10b981] font-semibold truncate">{sshCommand}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-white/5 text-[#94a3b8] hover:text-white transition-colors flex-shrink-0 cursor-pointer"
            title="Sao chép lệnh SSH"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-[#10b981]" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
