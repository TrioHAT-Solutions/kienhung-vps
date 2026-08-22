"use client";

import { useState } from "react";
import { RotateCw, Power, TerminalSquare, Camera, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <Button
          variant="outline"
          disabled={busy || !running}
          onClick={onRestart}
          className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300"
        >
          <RotateCw className={`h-4 w-4 ${busy ? "animate-spin" : ""}`} />
          Khởi động lại
        </Button>

        <Button
          variant="outline"
          disabled={busy}
          onClick={onTogglePower}
          className={
            running
              ? "border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300"
              : "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
          }
        >
          <Power className="h-4 w-4" />
          {running ? "Tắt nguồn" : "Bật nguồn"}
        </Button>

        <Button
          variant="outline"
          onClick={() => setShowSSH(!showSSH)}
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
        >
          <TerminalSquare className="h-4 w-4" />
          SSH Info
        </Button>

        <Button
          variant="outline"
          disabled={!running}
          onClick={onSnapshot}
          className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
        >
          <Camera className="h-4 w-4" />
          Tạo Snapshot
        </Button>
      </div>

      {showSSH && (
        <div className="bg-black/40 border border-white/10 rounded-lg p-3 font-mono text-sm flex items-center justify-between">
          <code className="text-emerald-400">{sshCommand}</code>
          <button
            onClick={handleCopy}
            className="text-zinc-500 hover:text-cyan-400 transition-colors ml-3"
            aria-label="Copy SSH command"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
