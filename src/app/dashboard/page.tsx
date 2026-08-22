"use client";

import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Grid3X3,
  ScrollText,
  Settings,
  Server,
} from "lucide-react";
import { MockBanner } from "@/components/dashboard/mock-banner";
import { ServerStatus } from "@/components/dashboard/server-status";
import { UsageMeters } from "@/components/dashboard/usage-meters";
import { ActionButtons } from "@/components/dashboard/action-buttons";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import type { PowerState } from "@/components/dashboard/power-state";
import {
  generateMetricHistory,
  stableHistory,
  nextMetricPoint,
  IDLE_METRIC,
  seedActivity,
  createActivity,
  type MetricPoint,
  type ActivityEntry,
} from "@/data/mock-metrics";
import { useCheckoutStore } from "@/stores/checkout-store";

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Tổng quan", active: true },
  { icon: Grid3X3, label: "Ứng dụng", active: false },
  { icon: ScrollText, label: "Nhật ký", active: false },
  { icon: Settings, label: "Cấu hình", active: false },
];

const HISTORY_LENGTH = 30;
const DEFAULT_IP = "103.124.92.18";

export default function DashboardPage() {
  const config = useCheckoutStore((s) => s.config);
  const orderId = useCheckoutStore((s) => s.orderId);

  const [power, setPower] = useState<PowerState>("running");
  const [metrics, setMetrics] = useState<MetricPoint[]>(() => stableHistory(HISTORY_LENGTH));
  const [uptimeSeconds, setUptimeSeconds] = useState(() => 14 * 86400 + 1325);
  const [activities, setActivities] = useState<ActivityEntry[]>([]);

  const [ipAddress, setIpAddress] = useState(DEFAULT_IP);

  useEffect(() => {
    setIpAddress(
      `103.${Math.floor(100 + Math.random() * 150)}.${Math.floor(10 + Math.random() * 240)}.${Math.floor(10 + Math.random() * 240)}`
    );
    setActivities(seedActivity());
    setMetrics(generateMetricHistory(HISTORY_LENGTH));
  }, []);

  const serverName = orderId || "khvps-demo-01";
  const osName = config.os?.name ?? "Ubuntu 22.04 LTS";
  const location = config.datacenter?.name ?? "TP. Hồ Chí Minh, Việt Nam";
  const storageTotalGb = config.storage?.gb ?? 100;
  const ramTotalGb = config.ram?.gb ?? 4;

  useEffect(() => {
    if (power !== "running") return;

    const metricTimer = setInterval(() => {
      setMetrics((prev) => [...prev.slice(1), nextMetricPoint(prev[prev.length - 1])]);
    }, 2000);

    const uptimeTimer = setInterval(() => setUptimeSeconds((s) => s + 1), 1000);

    return () => {
      clearInterval(metricTimer);
      clearInterval(uptimeTimer);
    };
  }, [power]);

  const pushActivity = (type: ActivityEntry["type"], message: string) => {
    setActivities((prev) => [createActivity(type, message), ...prev].slice(0, 8));
  };

  const handleRestart = () => {
    setPower("restarting");
    pushActivity("power", "Yêu cầu khởi động lại server");
    setTimeout(() => {
      setPower("running");
      pushActivity("power", "Server đã khởi động thành công");
    }, 2500);
  };

  const handleTogglePower = () => {
    if (power === "running") {
      setPower("stopped");
      setMetrics((prev) => prev.map((m) => ({ ...IDLE_METRIC })));
      pushActivity("power", "Server đã được tắt nguồn");
    } else if (power === "stopped") {
      setPower("restarting");
      pushActivity("power", "Đang khởi động server...");
      setTimeout(() => {
        setPower("running");
        setMetrics(generateMetricHistory(HISTORY_LENGTH));
        pushActivity("power", "Server đã hoạt động trở lại");
      }, 2000);
    }
  };

  const handleSnapshot = () => {
    const size = (ramTotalGb * (2 + Math.floor(Math.random() * 3))).toFixed(1);
    pushActivity("snapshot", `Snapshot 'manual-${Date.now().toString(36)}' tạo thành công (${size} GB)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 pb-20 lg:pb-8">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <MockBanner />

        <div className="mt-6 grid lg:grid-cols-[220px_1fr] gap-6">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <div className="flex items-center gap-2 px-3 pb-4 text-sm font-semibold text-zinc-300">
                <Server className="h-4 w-4 text-cyan-400" />
                Console
              </div>
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  key={item.label}
                  disabled={!item.active}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    item.active
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 cursor-not-allowed"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Main */}
          <main className="space-y-6 min-w-0">
            <ServerStatus
              power={power}
              uptimeSeconds={uptimeSeconds}
              ipAddress={ipAddress}
              serverName={serverName}
              osName={osName}
              location={location}
            />

            <ActionButtons
              power={power}
              ipAddress={ipAddress}
              sshPort={22}
              onRestart={handleRestart}
              onTogglePower={handleTogglePower}
              onSnapshot={handleSnapshot}
            />

            <UsageMeters
              metrics={metrics}
              running={power === "running"}
              storageUsedGb={Math.round(storageTotalGb * 0.42)}
              storageTotalGb={storageTotalGb}
            />

            <div className="grid lg:grid-cols-2 gap-6">
              <ActivityFeed activities={activities} />
              <div className="space-y-4">
                <h3 className="text-base font-semibold flex items-center gap-2 text-zinc-200">
                  <Settings className="h-4 w-4 text-zinc-400" />
                  Cấu hình hiện tại
                </h3>
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <span className="text-zinc-500">vCPU</span>
                  <span className="text-white">{config.cpu?.cores ?? 2} Cores</span>
                  <span className="text-zinc-500">RAM</span>
                  <span className="text-white">{ramTotalGb} GB DDR4</span>
                  <span className="text-zinc-500">NVMe</span>
                  <span className="text-white">{storageTotalGb} GB</span>
                  <span className="text-zinc-500">Bandwidth</span>
                  <span className="text-white">{config.bandwidth?.label ?? "Không giới hạn"}</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Bottom nav - mobile */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl">
        <div className="grid grid-cols-4">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.label}
              disabled={!item.active}
              className={`flex flex-col items-center gap-1 py-3 text-xs ${
                item.active ? "text-cyan-400" : "text-zinc-600"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
