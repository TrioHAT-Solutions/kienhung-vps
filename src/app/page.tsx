import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-emerald-500/10" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              VPS Hosting + Managed Deployment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              TrioHAT-VPS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hạ Tầng Sẵn Sàng – Ứng Dụng Trong Tích Tắc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configure">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700">
                  Bắt Đầu Ngay
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                  Xem Bảng Giá
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tại Chọn TrioHAT-VPS?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Giải pháp VPS toàn diện với ứng dụng được cài đặt sẵn, hỗ trợ 24/7 và thanh toán tức thời
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900/80 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-400">
                ⚡ Tốc Độ Tối Ưu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                VPS hoạt động trong 60 giây sau thanh toán, hạ tầng SSD NVMe hiện đại
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/80 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-violet-400">
                🚀 1-Click App Stacks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                15+ ứng dụng phổ biến (WordPress, Docker, Kubernetes) được cấu hình sẵn
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/80 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-400">
                💎 Hỗ Trợ 24/7
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Đội ngũ kỹ thuật sẵn sàng hỗ trợ bạn 24/7 để đảm bảo dịch vụ hoạt động ổn định
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-emerald-500/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-400">15+</div>
              <div className="text-sm text-muted-foreground">App Templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">3</div>
              <div className="text-sm text-muted-foreground">Data Centers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">60s</div>
              <div className="text-sm text-muted-foreground">Deploy Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn Sàng Bắt Đầu?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Chọn cấu hình VPS phù hợp và triển khai ứng dụng chỉ trong vài phút
        </p>
        <Link href="/configure">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600">
            Tạo VPS Ngay
          </Button>
        </Link>
      </section>
    </div>
  );
}