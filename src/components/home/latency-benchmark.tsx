import { Wifi, Globe, Server } from "lucide-react";

const benchmarks = [
  { provider: "VNPT", location: "TP. HCM", latency: "3ms", icon: Wifi },
  { provider: "Viettel", location: "TP. HCM", latency: "4ms", icon: Wifi },
  { provider: "FPT", location: "TP. HCM", latency: "2ms", icon: Wifi },
  { provider: "Singapore", location: "SG1", latency: "28ms", icon: Globe },
];

export function LatencyBenchmark() {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/8 flex items-center gap-2">
        <Server className="h-4 w-4 text-[#06b6d4]" />
        <h3 className="text-sm font-semibold font-[family-name:var(--font-space-grotesk)] text-white">Latency & Speed Benchmark</h3>
      </div>
      <div className="p-5">
        <div className="space-y-3">
          {benchmarks.map((item) => (
            <div key={item.provider} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-[#94a3b8]" />
                <div>
                  <div className="text-sm font-medium text-white">{item.provider}</div>
                  <div className="text-xs text-[#94a3b8]">{item.location}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold font-[family-name:var(--font-fira-code)] text-[#10b981]">{item.latency}</div>
                <div className="text-xs text-[#94a3b8]">ping</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20">
          <p className="text-xs text-[#10b981] text-center">
            Datacenter Tier 3 tại TP. Hồ Chí Minh & Hà Nội — Tốc độ trong nước &lt; 5ms
          </p>
        </div>
      </div>
    </div>
  );
}
