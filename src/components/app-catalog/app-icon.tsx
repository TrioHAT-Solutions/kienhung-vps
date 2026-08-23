import {
  Globe,
  Database,
  Server,
  Bot,
  Shield,
  Layers,
  Code2,
  Cpu,
  Boxes,
  Terminal,
  Activity,
  Zap,
  type LucideIcon,
} from "lucide-react";

export function getAppIcon(category: string, id: string): LucideIcon {
  const cat = (category || "").toLowerCase();
  const appId = (id || "").toLowerCase();

  if (appId.includes("n8n") || appId.includes("ai") || appId.includes("ollama") || appId.includes("flowise")) {
    return Bot;
  }
  if (appId.includes("docker") || appId.includes("portainer") || appId.includes("compose")) {
    return Boxes;
  }
  if (appId.includes("redis") || appId.includes("sql") || appId.includes("mongo") || appId.includes("postgres") || cat.includes("database")) {
    return Database;
  }
  if (appId.includes("nginx") || appId.includes("node") || appId.includes("python") || appId.includes("fastapi") || cat.includes("dev")) {
    return Terminal;
  }
  if (appId.includes("grafana") || appId.includes("uptime") || appId.includes("prometheus") || cat.includes("monitoring")) {
    return Activity;
  }
  if (appId.includes("wireguard") || appId.includes("openvpn") || cat.includes("security")) {
    return Shield;
  }
  if (appId.includes("wordpress") || appId.includes("ghost") || appId.includes("strapi") || cat.includes("cms") || cat.includes("web")) {
    return Globe;
  }
  return Layers;
}

export function AppIconRenderer({ category, id, className }: { category: string; id: string; className?: string }) {
  const Icon = getAppIcon(category, id);
  return <Icon className={className || "h-6 w-6 text-[#10b981]"} />;
}
