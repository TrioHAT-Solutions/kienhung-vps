"use client";

import { useState } from "react";
import { RotateCw, Power, TerminalSquare, Camera, Copy, Check } from "lucide-react";
import type { PowerState } from "./power-state";

interface ActionButtonsProps {
  power: PowerState;
  ipAddress: string;
  sshPort: number;
  onRestart: () => void;
  onTogglePower: () => void;
  onSnapshot: () => void;
}

export function ActionButtons({
  power,
  ipAddress,
  sshPort,
  onRestart,
  onTogglePower,
  onSnapshot,
}: ActionButtonsProps) {
  const [showSSH, setShowSSH] = useState(false);
  const [copied, setCopied] = useState(false);

  const sshCommand = `ssh root@${ipAddress} -p ${sshPort}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sshCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const busy = power === "restarting";
  const running = power === "running";

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          disabled={busy || !running}
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#f59e0b]/50 text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <RotateCw className={`h-4 w-4 ${busy ? "animate-spin" : ""}`} />
          Khởi động lại
        </button>

        <button
          disabled={busy}
          onClick={onTogglePower}
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
            running
              ? "border-[#ef4444]/50 text-[#ef4444] hover:bg-[#ef4444]/10"
              : "border-[#10b981]/50 text-[#10b981] hover:bg-[#10b981]/10"
          }`}
        >
          <Power className="h-4 w-4" />
          {running ? "Tắt nguồn" : "Bật nguồn"}
        </button>

        <button
          onClick={() => setShowSSH(!showSSH)}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#06b6d4]/50 text-[#06b6d4] hover:bg-[#06b6d4]/10 transition-all cursor-pointer"
        >
          <TerminalSquare className="h-4 w-4" />
          SSH Info
        </button>

        <button
          disabled={!running}
          onClick={onSnapshot}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#8b5cf6]/50 text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <Camera className="h-4 w-4" />
          Tạo Snapshot
        </button>
      </div>

      {showSSH && (
        <div className="bg-black/40 border border-white/5 rounded-lg p-3 font-[family-name:var(--font-fira-code)] text-sm flex items-center justify-between">
          <code className="text-[#10b981]">{sshCommand}</code>
          <button
            onClick={handleCopy}
            className="text-[#64748b] hover:text-[#06b6d4] transition-colors ml-3 cursor-pointer"
            aria-label="Copy SSH command"
          >
            {copied ? <Check className="h-4 w-4 text-[#10b981]" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
