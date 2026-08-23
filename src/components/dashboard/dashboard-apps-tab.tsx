"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Boxes,
  Play,
  RotateCw,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Plus,
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  Terminal,
} from "lucide-react";

interface InstalledApp {
  id: string;
  name: string;
  category: string;
  version: string;
  port: string;
  status: "running" | "stopped" | "restarting";
  memory: string;
  uptime: string;
  webUrl?: string;
  description: string;
}

const INITIAL_APPS: InstalledApp[] = [
  {
    id: "nodejs",
    name: "Node.js & PM2 Runtime",
    category: "Development",
    version: "v20.11.0 LTS",
    port: "3000",
    status: "running",
    memory: "142 MB",
    uptime: "14 ngày 2 giờ",
    webUrl: "http://localhost:3000",
    description: "Môi trường thực thi JavaScript server-side kèm PM2 Process Manager.",
  },
  {
    id: "nginx",
    name: "Nginx Reverse Proxy & SSL",
    category: "Web Server",
    version: "1.24.0",
    port: "80, 443",
    status: "running",
    memory: "38 MB",
    uptime: "14 ngày 2 giờ",
    webUrl: "https://localhost",
    description: "Máy chủ web hiệu năng cao, cân bằng tải và tự động quản lý SSL Let's Encrypt.",
  },
  {
    id: "docker",
    name: "Docker Engine & Compose",
    category: "Containers",
    version: "25.0.3",
    port: "Socket",
    status: "running",
    memory: "215 MB",
    uptime: "14 ngày 2 giờ",
    description: "Nền tảng đóng gói và cô lập container với 3 containers đang chạy.",
  },
  {
    id: "redis",
    name: "Redis In-Memory Cache",
    category: "Databases",
    version: "7.2.4",
    port: "6379",
    status: "running",
    memory: "64 MB",
    uptime: "14 ngày 2 giờ",
    description: "Bộ nhớ đệm tốc độ cao cho session, rate limiting và pub/sub messaging.",
  },
];

export function DashboardAppsTab() {
  const [apps, setApps] = useState<InstalledApp[]>(INITIAL_APPS);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleRestartApp = (appId: string, appName: string) => {
    setApps((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, status: "restarting" } : app))
    );
    setFeedback(`Đang khởi động lại ${appName}...`);

    setTimeout(() => {
      setApps((prev) =>
        prev.map((app) => (app.id === appId ? { ...app, status: "running" } : app))
      );
      setFeedback(`Đã khởi động lại ${appName} thành công!`);
      setTimeout(() => setFeedback(null), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Tab Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Boxes className="h-5 w-5 text-[#10b981]" />
            <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
              Ứng Dụng & Dịch Vụ Đã Cài Đặt
            </h2>
          </div>
          <p className="text-xs text-[#94a3b8]">
            Quản lý các tiến trình, web server và container đang chạy trực tiếp trên Cloud VPS của bạn.
          </p>
        </div>

        <Link
          href="/apps"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0"
        >
          <Plus className="h-4 w-4" />
          Cài Ứng Dụng Mới (1-Click)
        </Link>
      </div>

      {feedback && (
        <div className="p-3.5 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 text-xs text-[#10b981] flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* App Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="p-5 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                    {app.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] font-mono text-[#06b6d4] px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {app.version}
                    </span>
                    <span className="text-[11px] text-[#94a3b8]">{app.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[11px] font-mono text-[#10b981]">
                  {app.status === "restarting" ? (
                    <>
                      <RotateCw className="h-3 w-3 animate-spin text-[#f59e0b]" />
                      <span className="text-[#f59e0b]">Restarting</span>
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                      <span>Running</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
                {app.description}
              </p>

              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono">
                <div>
                  <span className="text-[#64748b] block text-[10px]">CỔNG (PORT)</span>
                  <span className="text-white">{app.port}</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10px]">BỘ NHỚ (RAM)</span>
                  <span className="text-[#10b981]">{app.memory}</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10px]">UPTIME</span>
                  <span className="text-white truncate block">{app.uptime}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
              <button
                onClick={() => handleRestartApp(app.id, app.name)}
                disabled={app.status === "restarting"}
                className="px-3 py-1.5 rounded bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <RotateCw className="h-3.5 w-3.5" />
                Khởi động lại
              </button>

              {app.webUrl && (
                <a
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#06b6d4]/10 hover:bg-[#06b6d4]/20 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-medium transition-all flex items-center gap-1.5"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Mở Web UI
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
