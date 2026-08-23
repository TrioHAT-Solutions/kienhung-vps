"use client";

import { useState, useEffect, useRef } from "react";
import {
  ScrollText,
  Terminal,
  Search,
  Trash2,
  Download,
  Pause,
  Play,
  Filter,
  CheckCircle2,
} from "lucide-react";

interface LogEntry {
  id: string;
  timestamp: string;
  service: "SYSTEM" | "SSH" | "NGINX" | "DOCKER" | "UFW";
  level: "INFO" | "WARN" | "AUTH" | "ERROR";
  message: string;
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: "1",
    timestamp: "01:30:12",
    service: "SYSTEM",
    level: "INFO",
    message: "Kernel initialized. CPU governor set to 'performance' (2 vCPUs active).",
  },
  {
    id: "2",
    timestamp: "01:30:15",
    service: "UFW",
    level: "INFO",
    message: "Firewall rules loaded: 22/tcp, 80/tcp, 443/tcp ACCEPT.",
  },
  {
    id: "3",
    timestamp: "01:30:20",
    service: "NGINX",
    level: "INFO",
    message: "Nginx 1.24.0 worker processes started (pid 1420). SSL certs verified.",
  },
  {
    id: "4",
    timestamp: "01:30:28",
    service: "DOCKER",
    level: "INFO",
    message: "Docker daemon started. Container 'redis-cache' status: Up 14 days.",
  },
  {
    id: "5",
    timestamp: "01:32:05",
    service: "SSH",
    level: "AUTH",
    message: "Accepted publickey for root from 113.161.xx.xx port 52140 ssh2: RSA SHA256:...",
  },
  {
    id: "6",
    timestamp: "01:33:14",
    service: "NGINX",
    level: "INFO",
    message: "GET /api/v1/health 200 OK 1.2ms [113.161.xx.xx]",
  },
  {
    id: "7",
    timestamp: "01:34:02",
    service: "UFW",
    level: "WARN",
    message: "[UFW BLOCK] IN=eth0 OUT= SRC=45.142.122.8 DST=103.124.92.18 PROTO=TCP SPT=48212 DPT=23 (Telnet Scan Dropped)",
  },
  {
    id: "8",
    timestamp: "01:34:40",
    service: "SYSTEM",
    level: "INFO",
    message: "Automated snapshot 'daily-20260824' synced to secondary cluster (4.2GB).",
  },
];

export function DashboardLogsTab() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [selectedService, setSelectedService] = useState<string>("ALL");
  const [search, setSearch] = useState<string>("");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const services: LogEntry["service"][] = ["NGINX", "SSH", "UFW", "SYSTEM", "DOCKER"];
      const randomService = services[Math.floor(Math.random() * services.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      let msg = "";
      let lvl: LogEntry["level"] = "INFO";

      if (randomService === "NGINX") {
        const paths = ["/", "/api/v1/metrics", "/favicon.ico", "/checkout", "/apps"];
        msg = `GET ${paths[Math.floor(Math.random() * paths.length)]} 200 OK ${(Math.random() * 4).toFixed(1)}ms`;
      } else if (randomService === "UFW") {
        lvl = "WARN";
        msg = `[UFW BLOCK] Port scan dropped from ${Math.floor(Math.random() * 200)}.${Math.floor(Math.random() * 255)}.xx.xx on port ${Math.floor(Math.random() * 9000)}`;
      } else if (randomService === "DOCKER") {
        msg = `Container node-app health check: OK (RAM: 142MB, IOPS: 32)`;
      } else {
        msg = `System telemetry ping: Uptime ${Math.floor(Math.random() * 300 + 1200)}h, Load avg: 0.14, 0.22, 0.18`;
      }

      setLogs((prev) => [
        ...prev.slice(-40),
        {
          id: Date.now().toString(),
          timestamp: timeStr,
          service: randomService,
          level: lvl,
          message: msg,
        },
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (autoScroll && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, autoScroll]);

  const filteredLogs = logs.filter((log) => {
    const matchService = selectedService === "ALL" || log.service === selectedService;
    const matchSearch =
      search === "" ||
      log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.service.toLowerCase().includes(search.toLowerCase());
    return matchService && matchSearch;
  });

  const handleClear = () => {
    setLogs([]);
  };

  const handleDownload = () => {
    const content = logs.map((l) => `[${l.timestamp}] [${l.service}] [${l.level}] ${l.message}`).join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vps-logs-${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ScrollText className="h-5 w-5 text-[#10b981]" />
              <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Nhật Ký Hệ Thống Thời Gian Thực (Live Logs)
              </h2>
            </div>
            <p className="text-xs text-[#94a3b8]">
              Theo dõi luồng log thời gian thực từ Kernel, Nginx, UFW Firewall và SSH daemon.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isPaused
                  ? "bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]"
                  : "bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]"
              }`}
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              {isPaused ? "Tiếp tục stream" : "Tạm dừng"}
            </button>

            <button
              onClick={handleClear}
              className="px-3 py-1.5 rounded-lg border border-white/8 bg-[#1e293b] hover:bg-[#334155] text-xs text-[#94a3b8] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Xóa
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg border border-white/8 bg-[#1e293b] hover:bg-[#334155] text-xs text-[#94a3b8] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              Tải .txt
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#64748b] flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Lọc:
            </span>
            {["ALL", "NGINX", "SSH", "UFW", "DOCKER", "SYSTEM"].map((srv) => (
              <button
                key={srv}
                onClick={() => setSelectedService(srv)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                  selectedService === srv
                    ? "bg-[#10b981] text-[#022c22] font-bold"
                    : "bg-[#1e293b] text-[#94a3b8] hover:text-white"
                }`}
              >
                {srv}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              placeholder="Tìm kiếm trong log..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#1e293b] border border-white/8 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#10b981]"
            />
          </div>
        </div>
      </div>

      {/* Terminal View */}
      <div className="rounded-xl border border-white/8 bg-[#05080f] overflow-hidden shadow-2xl">
        <div className="px-4 py-2.5 bg-[#0a0f1d] border-b border-white/8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ef4444]/80" />
            <span className="h-3 w-3 rounded-full bg-[#f59e0b]/80" />
            <span className="h-3 w-3 rounded-full bg-[#10b981]/80" />
            <span className="text-xs text-[#64748b] font-mono ml-2">/var/log/syslog --tail=50</span>
          </div>
          <span className="text-[11px] font-mono text-[#10b981] flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#10b981] animate-ping" />
            LIVE STREAM
          </span>
        </div>

        <div className="p-4 font-[family-name:var(--font-fira-code)] text-xs h-[420px] overflow-y-auto space-y-2 scrollbar-thin">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-12 text-[#64748b]">
              Không có bản ghi log nào phù hợp với bộ lọc hiện tại.
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div key={log.id} className="flex items-start gap-2.5 hover:bg-white/[0.02] p-1 rounded transition-colors">
                <span className="text-[#64748b] shrink-0">{log.timestamp}</span>
                <span
                  className={`px-1.5 py-0.2 rounded text-[10px] shrink-0 font-bold ${
                    log.service === "UFW"
                      ? "bg-[#ef4444]/20 text-[#ef4444]"
                      : log.service === "SSH"
                      ? "bg-[#f59e0b]/20 text-[#f59e0b]"
                      : log.service === "NGINX"
                      ? "bg-[#06b6d4]/20 text-[#06b6d4]"
                      : "bg-[#10b981]/20 text-[#10b981]"
                  }`}
                >
                  {log.service}
                </span>
                <span
                  className={`break-all ${
                    log.level === "WARN"
                      ? "text-[#f59e0b]"
                      : log.level === "AUTH"
                      ? "text-[#38bdf8]"
                      : "text-[#cbd5e1]"
                  }`}
                >
                  {log.message}
                </span>
              </div>
            ))
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}
