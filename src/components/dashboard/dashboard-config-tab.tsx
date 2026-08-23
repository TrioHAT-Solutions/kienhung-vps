"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Shield,
  Key,
  Network,
  Cpu,
  HardDrive,
  Copy,
  Check,
  CheckCircle2,
  RefreshCw,
  Lock,
  ArrowRight,
} from "lucide-react";
import type { CheckoutConfig } from "@/stores/checkout-store";

interface DashboardConfigTabProps {
  config: CheckoutConfig;
  ipAddress: string;
  serverName: string;
  osName: string;
  location: string;
}

interface FirewallRule {
  id: string;
  port: string;
  protocol: "TCP" | "UDP" | "TCP/UDP";
  service: string;
  source: string;
  action: "ALLOW" | "DENY";
  enabled: boolean;
}

const INITIAL_RULES: FirewallRule[] = [
  { id: "1", port: "22", protocol: "TCP", service: "SSH Remote Access", source: "0.0.0.0/0", action: "ALLOW", enabled: true },
  { id: "2", port: "80", protocol: "TCP", service: "HTTP Web Traffic", source: "0.0.0.0/0", action: "ALLOW", enabled: true },
  { id: "3", port: "443", protocol: "TCP", service: "HTTPS Secure Web", source: "0.0.0.0/0", action: "ALLOW", enabled: true },
  { id: "4", port: "3000", protocol: "TCP", service: "Node.js Application", source: "127.0.0.1", action: "ALLOW", enabled: true },
  { id: "5", port: "6379", protocol: "TCP", service: "Redis Cache Server", source: "127.0.0.1", action: "ALLOW", enabled: true },
];

export function DashboardConfigTab({
  config,
  ipAddress,
  serverName,
  osName,
  location,
}: DashboardConfigTabProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [rules, setRules] = useState<FirewallRule[]>(INITIAL_RULES);
  const [feedback, setFeedback] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const toggleRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
    setFeedback("Đã cập nhật quy tắc tường lửa UFW!");
    setTimeout(() => setFeedback(null), 2500);
  };

  const handleResetPassword = () => {
    const newPass = "TrHAT@" + Math.random().toString(36).slice(-8) + "!";
    navigator.clipboard.writeText(newPass);
    setFeedback(`Đã tạo mật khẩu root mới: ${newPass} (Đã tự động copy vào clipboard)`);
    setTimeout(() => setFeedback(null), 6000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-1">
          <Settings className="h-5 w-5 text-[#10b981]" />
          <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
            Cấu Hình & Thiết Lập Hệ Thống
          </h2>
        </div>
        <p className="text-xs text-[#94a3b8]">
          Quản lý chi tiết mạng, quy tắc tường lửa bảo mật, tài khoản quản trị và nâng cấp tài nguyên VPS.
        </p>
      </div>

      {feedback && (
        <div className="p-3.5 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 text-xs text-[#10b981] flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Network & Server Identifiers */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <Network className="h-4 w-4 text-[#06b6d4]" />
            <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-white">
              Thông Số Mạng & IP Tĩnh
            </h3>
          </div>

          <dl className="space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#64748b]">IPv4 Công Khai:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-white font-bold">{ipAddress}</span>
                <button
                  onClick={() => copyToClipboard("ipv4", ipAddress)}
                  className="text-[#94a3b8] hover:text-white cursor-pointer"
                >
                  {copiedKey === "ipv4" ? <Check className="h-3.5 w-3.5 text-[#10b981]" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#64748b]">Gateway:</span>
              <span className="font-mono text-white">103.124.92.1</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#64748b]">Netmask:</span>
              <span className="font-mono text-white">255.255.255.0 (/24)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#64748b]">DNS Resolvers:</span>
              <span className="font-mono text-[#06b6d4]">1.1.1.1, 8.8.8.8</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#64748b]">Datacenter:</span>
              <span className="text-white">{location}</span>
            </div>
          </dl>
        </div>

        {/* Security & Access */}
        <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-white/5">
              <Key className="h-4 w-4 text-[#f59e0b]" />
              <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Bảo Mật & Quyền Quản Trị
              </h3>
            </div>

            <dl className="space-y-3 text-xs mt-3">
              <div className="flex items-center justify-between">
                <span className="text-[#64748b]">Tài khoản quản trị:</span>
                <span className="font-mono text-white font-bold">root</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748b]">Hệ điều hành:</span>
                <span className="text-white">{osName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748b]">Xác thực SSH:</span>
                <span className="text-[#10b981] font-mono">Password + Key Pair</span>
              </div>
            </dl>
          </div>

          <div className="pt-3 border-t border-white/5 flex gap-2">
            <button
              onClick={handleResetPassword}
              className="w-full py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Đặt lại mật khẩu Root
            </button>
          </div>
        </div>
      </div>

      {/* Firewall Rules */}
      <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#10b981]" />
            <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-white">
              Bảng Quy Tắc Tường Lửa UFW (Firewall)
            </h3>
          </div>
          <span className="text-xs text-[#10b981] font-mono">UFW: ACTIVE (5 Quy tắc)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#0a0f1d] text-[#64748b] border-b border-white/5">
              <tr>
                <th className="px-6 py-3">CỔNG (PORT)</th>
                <th className="px-6 py-3">GIAO THỨC</th>
                <th className="px-6 py-3">DỊCH VỤ</th>
                <th className="px-6 py-3">NGUỒN (SOURCE)</th>
                <th className="px-6 py-3">HÀNH ĐỘNG</th>
                <th className="px-6 py-3 text-right">TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white">
              {rules.map((rule) => (
                <tr key={rule.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-3.5 font-bold text-[#06b6d4]">{rule.port}</td>
                  <td className="px-6 py-3.5 text-[#94a3b8]">{rule.protocol}</td>
                  <td className="px-6 py-3.5 font-sans text-[#cbd5e1]">{rule.service}</td>
                  <td className="px-6 py-3.5 text-[#94a3b8]">{rule.source}</td>
                  <td className="px-6 py-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[#10b981]/20 text-[#10b981] font-bold">
                      {rule.action}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <button
                      onClick={() => toggleRule(rule.id)}
                      className={`px-3 py-1 rounded text-[11px] font-sans transition-all cursor-pointer ${
                        rule.enabled
                          ? "bg-[#10b981]/20 text-[#10b981] hover:bg-[#10b981]/30"
                          : "bg-[#ef4444]/20 text-[#ef4444] hover:bg-[#ef4444]/30"
                      }`}
                    >
                      {rule.enabled ? "Đang bật" : "Tắt"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hardware Specs & Upgrade Callout */}
      <div className="p-6 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
            Nâng Cấp Tài Nguyên Máy Chủ
          </h3>
          <p className="text-xs text-[#94a3b8]">
            Hiện tại: <span className="text-white font-mono">{config.cpu?.cores ?? 2} vCPU</span> |{" "}
            <span className="text-white font-mono">{config.ram?.gb ?? 4} GB RAM</span> |{" "}
            <span className="text-white font-mono">{config.storage?.gb ?? 100} GB NVMe</span>. Nâng cấp bất kỳ lúc nào mà không làm gián đoạn dữ liệu.
          </p>
        </div>

        <Link
          href="/configure"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0"
        >
          Nâng Cấp Ngay
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
