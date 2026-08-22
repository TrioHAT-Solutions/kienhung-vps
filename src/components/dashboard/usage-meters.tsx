"use client";

import { Activity, Cpu, MemoryStick, HardDrive, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface MeterProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  unit: string;
  chartData?: number[];
  chartColor?: string;
  chartMax?: number;
}

function Meter({ label, icon: Icon, value, unit, chartData, chartColor = "#22d3ee", chartMax = 100 }: MeterProps) {
  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardContent className="pt-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Icon className="h-4 w-4" />
            {label}
          </div>
          <span className="text-lg font-bold font-mono text-white tabular-nums">
            {value}
            <span className="text-xs font-normal text-zinc-500 ml-1">{unit}</span>
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${Math.min(value / chartMax * 100, 100)}%`,
              backgroundColor: chartColor,
            }}
          />
        </div>
        {chartData && (
          <div data-chart={label}>
            <MiniChart data={chartData} color={chartColor} max={chartMax} />
          </div>
        )}
      </CardContent>
    </Card>
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
          chartColor="#22d3ee"
        />
        <Meter
          label="RAM Usage"
          icon={MemoryStick}
          value={latest.ram}
          unit="%"
          chartData={ramSeries}
          chartColor="#a78bfa"
        />
      </div>

      <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
        <CardContent className="pt-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <HardDrive className="h-4 w-4" />
              Disk NVMe
            </div>
            <span className="text-sm font-mono text-white">
              {storageUsedGb} GB <span className="text-zinc-500">/ {storageTotalGb} GB</span>
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-400"
              style={{ width: `${diskPercent}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center justify-between bg-black/30 rounded-lg px-3 py-2">
              <span className="text-zinc-500">Đọc</span>
              <span className="font-mono text-zinc-200">{running ? latest.diskRead : 0} MB/s</span>
            </div>
            <div className="flex items-center justify-between bg-black/30 rounded-lg px-3 py-2">
              <span className="text-zinc-500">Ghi</span>
              <span className="font-mono text-zinc-200">{running ? latest.diskWrite : 0} MB/s</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
        <CardHeader className="pb-2 pt-5">
          <CardTitle className="text-sm flex items-center gap-2 text-zinc-300">
            <Activity className="h-4 w-4 text-orange-400" />
            Network Traffic
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1 text-xs">
              <span className="flex items-center gap-1.5 text-zinc-500">
                <ArrowDownToLine className="h-3.5 w-3.5 text-cyan-400" />
                Inbound
              </span>
              <span className="font-mono text-zinc-200">{running ? latest.netIn : 0} Mbps</span>
            </div>
            <MiniChart data={netInSeries} color="#22d3ee" max={60} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1 text-xs">
              <span className="flex items-center gap-1.5 text-zinc-500">
                <ArrowUpFromLine className="h-3.5 w-3.5 text-violet-400" />
                Outbound
              </span>
              <span className="font-mono text-zinc-200">{running ? latest.netOut : 0} Mbps</span>
            </div>
            <MiniChart data={netOutSeries} color="#a78bfa" max={40} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
