"use client";

import { Activity, Cpu, MemoryStick, HardDrive, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import type { MetricPoint } from "@/data/mock-metrics";

function MiniChart({ data, color, max }: { data: number[]; color: string; max: number }) {
  const width = 300;
  const height = 64;
  const n = data.length;

  const points = data
    .map((v, i) => `${(i / (n - 1)) * width},${height - (Math.min(v, max) / max) * (height - 4) - 2}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-16"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points={`0,${height} ${points} ${width},${height}`} fill={color} opacity={0.12} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function getMeterColor(value: number): string {
  if (value >= 85) return "#ef4444";
  if (value >= 70) return "#f59e0b";
  return "#10b981";
}

interface MeterProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  unit: string;
  chartData?: number[];
  chartColor?: string;
  chartMax?: number;
}

function Meter({ label, icon: Icon, value, unit, chartData, chartColor, chartMax = 100 }: MeterProps) {
  const color = chartColor || getMeterColor(value);

  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
          <Icon className="h-4 w-4" />
          {label}
        </div>
        <span className="text-lg font-bold font-[family-name:var(--font-fira-code)] text-white tabular-nums">
          {value}
          <span className="text-xs font-normal text-[#64748b] ml-1">{unit}</span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${Math.min(value / chartMax * 100, 100)}%`,
            backgroundColor: color,
          }}
        />
      </div>
      {chartData && (
        <div data-chart={label}>
          <MiniChart data={chartData} color={color} max={chartMax} />
        </div>
      )}
    </div>
  );
}

interface UsageMetersProps {
  metrics: MetricPoint[];
  running: boolean;
  storageUsedGb: number;
  storageTotalGb: number;
}

export function UsageMeters({ metrics, running, storageUsedGb, storageTotalGb }: UsageMetersProps) {
  const latest = metrics[metrics.length - 1];
  const cpuSeries = metrics.map((m) => m.cpu);
  const ramSeries = metrics.map((m) => m.ram);
  const netInSeries = metrics.map((m) => m.netIn);
  const netOutSeries = metrics.map((m) => m.netOut);
  const diskPercent = Math.round((storageUsedGb / storageTotalGb) * 100);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Meter
          label="CPU Load"
          icon={Cpu}
          value={latest.cpu}
          unit="%"
          chartData={cpuSeries}
        />
        <Meter
          label="RAM Usage"
          icon={MemoryStick}
          value={latest.ram}
          unit="%"
          chartData={ramSeries}
        />
      </div>

      <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
            <HardDrive className="h-4 w-4" />
            Disk NVMe
          </div>
          <span className="text-sm font-[family-name:var(--font-fira-code)] text-white">
            {storageUsedGb} GB <span className="text-[#64748b]">/ {storageTotalGb} GB</span>
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${diskPercent}%`,
              backgroundColor: getMeterColor(diskPercent),
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="flex items-center justify-between bg-[#1e293b]/50 rounded-lg px-3 py-2 border border-white/5">
            <span className="text-[#64748b]">Đọc</span>
            <span className="font-[family-name:var(--font-fira-code)] text-white">{running ? latest.diskRead : 0} MB/s</span>
          </div>
          <div className="flex items-center justify-between bg-[#1e293b]/50 rounded-lg px-3 py-2 border border-white/5">
            <span className="text-[#64748b]">Ghi</span>
            <span className="font-[family-name:var(--font-fira-code)] text-white">{running ? latest.diskWrite : 0} MB/s</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
          <Activity className="h-4 w-4 text-[#f59e0b]" />
          Network Traffic
        </div>
        <div>
          <div className="flex items-center justify-between mb-1 text-xs">
            <span className="flex items-center gap-1.5 text-[#64748b]">
              <ArrowDownToLine className="h-3.5 w-3.5 text-[#06b6d4]" />
              Inbound
            </span>
            <span className="font-[family-name:var(--font-fira-code)] text-white">{running ? latest.netIn : 0} Mbps</span>
          </div>
          <MiniChart data={netInSeries} color="#06b6d4" max={60} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1 text-xs">
            <span className="flex items-center gap-1.5 text-[#64748b]">
              <ArrowUpFromLine className="h-3.5 w-3.5 text-[#10b981]" />
              Outbound
            </span>
            <span className="font-[family-name:var(--font-fira-code)] text-white">{running ? latest.netOut : 0} Mbps</span>
          </div>
          <MiniChart data={netOutSeries} color="#10b981" max={40} />
        </div>
      </div>
    </div>
  );
}
