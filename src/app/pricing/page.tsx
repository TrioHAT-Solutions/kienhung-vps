import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Server, Shield, Zap, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bảng giá - Kiến Hưng VPS",
  description: "Bảng giá dịch vụ VPS Hosting tại Kiến Hưng - Giá rẻ, chất lượng cao, hỗ trợ 24/7",
};

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Phù hợp cho blog và website nhỏ",
    price: 250000,
    features: [
      "2 vCPU Core",
      "2GB RAM DDR4",
      "50GB SSD NVMe",
      "100GB Bandwidth",
      "IPv4 1",
      "Ubuntu/Debian/CentOS",
    ],
    popular: false,
  },
  {
    id: "basic",
    name: "Basic",
    description: "Phù hợp cho website doanh nghiệp nhỏ",
    price: 450000,
    features: [
      "4 vCPU Core",
      "4GB RAM DDR4",
      "100GB SSD NVMe",
      "500GB Bandwidth",
      "IPv4 1",
      "Ubuntu/Debian/CentOS",
      "Free SSL Certificate",
    ],
    popular: false,
  },
  {
    id: "pro",
    name: "Professional",
    description: "Phù hợp cho ứng dụng web và ecommerce",
    price: 750000,
    features: [
      "6 vCPU Core",
      "8GB RAM DDR4",
      "200GB SSD NVMe",
      "1TB Bandwidth",
      "IPv4 1",
      "Ubuntu/Debian/CentOS",
      "Free SSL Certificate",
      "Auto Backup",
      "DDoS Protection",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Phù hợp cho ứng dụng doanh nghiệp lớn",
    price: 1200000,
    features: [
      "8 vCPU Core",
      "16GB RAM DDR4",
      "500GB SSD NVMe",
      "Không giới hạn Bandwidth",
      "IPv4 1",
      "Ubuntu/Debian/CentOS/Windows",
      "Free SSL Certificate",
      "Auto Backup",
      "DDoS Protection",
      "Priority Support 24/7",
      "Monitoring Dashboard",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Giá cạnh tranh nhất thị trường</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent">
              Bảng Giá
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Chọn gói phù hợp với nhu cầu của bạn. Tất cả đều đi kèm với hỗ trợ kỹ thuật 24/7 và đảm bảo uptime 99.9%.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Hoàn tiền 7 ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Hủy bất cứ lúc nào</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Không phí ẩn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular
                    ? "border-2 border-cyan-500/50 bg-cyan-500/5"
                    : "border border-white/10 bg-white/5"
                } backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-sm font-medium text-white">
                      Phổ biến nhất
                    </div>
                  </div>
                )}

                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        {plan.price.toLocaleString("vi-VN")}
                      </span>
                      <span className="text-zinc-500">đ/tháng</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {plan.popular ? (
                      <>
                        Chọn ngay
                        <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      "Chọn gói"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Tất cả gói đều bao gồm
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <Server className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Hardware</h3>
              <p className="text-sm text-zinc-500">Intel Xeon / AMD EPYC processor, DDR4 ECC RAM, NVMe SSD</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="font-semibold mb-2">DDoS Protection</h3>
              <p className="text-sm text-zinc-500">Bảo vệ tự động khỏi tấn công DDoS, đảm bảo website luôn online</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">High Performance</h3>
              <p className="text-sm text-zinc-500">SSD NVMe tốc độ cao, network 1Gbps, kết nối</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-zinc-500">Hỗ trợ kỹ thuật chuyên nghiệp, giải quyết sự cố nhanh chóng</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Câu hỏi thường gặp
            </span>
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Tôi có thể nâng cấp VPS sau khi mua không?</h3>
              <p className="text-zinc-400 text-sm">
                Có, bạn có thể nâng cấp cấu hình VPS bất cứ lúc nào. Hệ thống sẽ tự động áp dụng và chỉ tính phí chênh lệch.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Tôi nhận được hỗ trợ kỹ thuật như thế nào?</h3>
              <p className="text-zinc-400 text-sm">
                Bạn có thể liên hệ hỗ trợ qua ticket, email hoặc live chat. Đội ngũ kỹ thuật viên sẽ hỗ trợ 24/7.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Tôi có thể hủy dịch vụ và được hoàn tiền không?</h3>
              <p className="text-zinc-400 text-sm">
                Có, chính sách hoàn tiền trong 7 ngày đầu tiên áp dụng cho tất cả khách hàng mới.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Datacenter nằm ở đâu?</h3>
              <p className="text-zinc-400 text-sm">
                Datacenter chính tại TP.HCM và Hà Nội. Ngoài ra còn có lựa chọn Singapore và Tokyo cho khách hàng quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}