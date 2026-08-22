export interface MetricPoint {
  cpu: number;
  ram: number;
  diskRead: number;
  diskWrite: number;
  netIn: number;
  netOut: number;
}

export type ActivityType = "power" | "snapshot" | "backup" | "ssh" | "system";

export interface ActivityEntry {
  id: string;
  type: ActivityType;
  message: string;
  timestamp: string;
}

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function clamp(v: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, v));
}

export function stableHistory(length = 30): MetricPoint[] {
  return Array.from({ length }, (_, i) => ({
    cpu: Math.round(32 + 12 * Math.sin(i / 3)),
    ram: Math.round(52 + 6 * Math.sin(i / 4)),
    diskRead: 20 + (i % 7) * 3,
    diskWrite: 10 + (i % 5) * 2,
    netIn: 15 + (i % 6) * 4,
    netOut: 8 + (i % 8) * 2,
  }));
}

export function generateMetricHistory(length = 30): MetricPoint[] {
  const points: MetricPoint[] = [];
  let cpu = rand(15, 35);
  let ram = rand(40, 55);

  for (let i = 0; i < length; i++) {
    cpu = clamp(cpu + rand(-6, 6), 5, 85);
    ram = clamp(ram + rand(-3, 3), 30, 75);
    points.push({
      cpu: Math.round(cpu),
      ram: Math.round(ram),
      diskRead: Math.round(rand(5, 60)),
      diskWrite: Math.round(rand(3, 40)),
      netIn: Math.round(rand(2, 45)),
      netOut: Math.round(rand(1, 25)),
    });
  }
  return points;
}

export function nextMetricPoint(prev: MetricPoint): MetricPoint {
  return {
    cpu: Math.round(clamp(prev.cpu + rand(-8, 8), 5, 95)),
    ram: Math.round(clamp(prev.ram + rand(-4, 4), 20, 85)),
    diskRead: Math.round(rand(5, 70)),
    diskWrite: Math.round(rand(3, 45)),
    netIn: Math.round(rand(2, 50)),
    netOut: Math.round(rand(1, 30)),
  };
}

export const IDLE_METRIC: MetricPoint = {
  cpu: 0,
  ram: 12,
  diskRead: 0,
  diskWrite: 0,
  netIn: 0,
  netOut: 0,
};

export function formatUptime(totalSeconds: number): string {
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${d}d ${h}h ${m}m ${s}s`;
}

export function seedActivity(): ActivityEntry[] {
  const now = Date.now();
  const mk = (minutesAgo: number, type: ActivityType, message: string): ActivityEntry => ({
    id: `act-${now}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    message,
    timestamp: new Date(now - minutesAgo * 60_000).toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  return [
    mk(2, "system", "Backup tự động hàng đêm hoàn tất"),
    mk(14, "ssh", "Đăng nhập SSH thành công từ 14.231.5.102"),
    mk(47, "backup", "Snapshot tự động 'daily-auto' tạo lúc 02:00"),
    mk(96, "system", "Cập nhật bảo mật Ubuntu 22.04.4 LTS"),
    mk(180, "power", "Server khởi động lại theo lịch"),
  ];
}

export function createActivity(type: ActivityType, message: string): ActivityEntry {
  return {
    id: `act-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    message,
    timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
  };
}
