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
import { DashboardAppsTab } from "@/components/dashboard/dashboard-apps-tab";
import { DashboardLogsTab } from "@/components/dashboard/dashboard-logs-tab";
import { DashboardConfigTab } from "@/components/dashboard/dashboard-config-tab";
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

type DashboardTab = "overview" | "apps" | "logs" | "config";

const SIDEBAR_ITEMS: { id: DashboardTab; icon: typeof LayoutDashboard; label: string }[] = [
  { id: "overview", icon: LayoutDashboard, label: "Tổng quan" },
  { id: "apps", icon: Grid3X3, label: "Ứng dụng" },
  { id: "logs", icon: ScrollText, label: "Nhật ký" },
  { id: "config", icon: Settings, label: "Cấu hình" },
];

const HISTORY_LENGTH = 30;
const DEFAULT_IP = "103.124.92.18";

export default function DashboardPage() {
  const config = useCheckoutStore((s) => s.config);
  const orderId = useCheckoutStore((s) => s.orderId);

  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");
  const [power, setPower] = useState<PowerState>("running");
  const [metrics, setMetrics] = useState<MetricPoint[]>(() => stableHistory(HISTORY_LENGTH));
  const [uptimeSeconds, setUptimeSeconds] = useState(() => 14 * 86400 + 1325);
  const [activities, setActivities] = useState<ActivityEntry[]>([]);

  const [ipAddress, setIpAddress] = useState(DEFAULT_IP);

  useEffect(() => {
    const randomIp = `103.${Math.floor(100 + Math.random() * 150)}.${Math.floor(10 + Math.random() * 240)}.${Math.floor(10 + Math.random() * 240)}`;
    setIpAddress(randomIp);
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
      setMetrics((prev) => prev.map(() => ({ ...IDLE_METRIC })));
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
    <div className="min-h-screen bg-[#080c14] pb-20 lg:pb-8">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <MockBanner />

        <div className="mt-6 grid lg:grid-cols-[220px_1fr] gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <div className="flex items-center gap-2 px-3 pb-4 text-sm font-semibold text-white font-[family-name:var(--font-space-grotesk)]">
                <Server className="h-4 w-4 text-[#06b6d4]" />
                Console
              </div>
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all cursor-pointer font-medium ${
                    activeTab === item.id
                      ? "bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-semibold"
                      : "text-[#94a3b8] hover:text-white hover:bg-[#1e293b] border border-transparent"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Tab Content */}
          <main className="space-y-6 min-w-0">
            {activeTab === "overview" && (
              <>
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
                    <h3 className="text-base font-semibold flex items-center gap-2 text-white font-[family-name:var(--font-space-grotesk)]">
                      <Settings className="h-4 w-4 text-[#94a3b8]" />
                      Cấu hình hiện tại
                    </h3>
                    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl p-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      <span className="text-[#64748b]">vCPU</span>
                      <span className="text-white font-[family-name:var(--font-fira-code)]">{config.cpu?.cores ?? 2} Cores</span>
                      <span className="text-[#64748b]">RAM</span>
                      <span className="text-white font-[family-name:var(--font-fira-code)]">{ramTotalGb} GB DDR4</span>
                      <span className="text-[#64748b]">NVMe</span>
                      <span className="text-white font-[family-name:var(--font-fira-code)]">{storageTotalGb} GB</span>
                      <span className="text-[#64748b]">Bandwidth</span>
                      <span className="text-white font-[family-name:var(--font-fira-code)]">{config.bandwidth?.label ?? "Không giới hạn"}</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "apps" && <DashboardAppsTab />}

            {activeTab === "logs" && <DashboardLogsTab />}

            {activeTab === "config" && (
              <DashboardConfigTab
                config={config}
                ipAddress={ipAddress}
                serverName={serverName}
                osName={osName}
                location={location}
              />
            )}
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/8 bg-[#080c14]/95 backdrop-blur-xl">
        <div className="grid grid-cols-4">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 py-3 text-xs transition-colors cursor-pointer ${
                activeTab === item.id ? "text-[#10b981] font-bold" : "text-[#94a3b8]"
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
