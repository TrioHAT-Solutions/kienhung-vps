"use client";

import { useState } from "react";
import { Zap, Check, ChevronDown, ChevronUp } from "lucide-react";
import { PricingCardRefactored } from "@/components/pricing/pricing-card-refactored";
import { FeatureComparisonTable } from "@/components/pricing/feature-comparison-table";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Phù hợp cho blog và website nhỏ",
    price: 250000,
    target: "Dành cho blog cá nhân, portfolio",
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
    target: "Dành cho website doanh nghiệp nhỏ",
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
    target: "Dành cho ứng dụng Production & Web thương mại",
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
    target: "Dành cho ứng dụng enterprise quy mô lớn",
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

const faqs = [
  {
    question: "Tôi có thể nâng cấp VPS sau khi mua không?",
    answer: "Có, bạn có thể nâng cấp cấu hình VPS bất cứ lúc nào. Hệ thống sẽ tự động áp dụng và chỉ tính phí chênh lệch theo tỷ lệ.",
  },
  {
    question: "Tôi nhận được hỗ trợ kỹ thuật như thế nào?",
    answer: "Bạn có thể liên hệ hỗ trợ qua ticket, email hoặc live chat. Đội ngũ kỹ thuật viên sẽ hỗ trợ 24/7 với thời gian phản hồi nhanh nhất.",
  },
  {
    question: "Tôi có thể hủy dịch vụ và được hoàn tiền không?",
    answer: "Có, chính sách hoàn tiền trong 7 ngày đầu tiên áp dụng cho tất cả khách hàng mới. Nếu không hài lòng, bạn sẽ được hoàn 100% chi phí.",
  },
  {
    question: "Datacenter nằm ở đâu?",
    answer: "Máy chủ đặt trực tiếp tại trung tâm dữ liệu chuẩn Tier 3 tại TP. Hồ Chí Minh, tối ưu hóa độ trễ cực thấp (< 5ms) và băng thông 1Gbps cho người dùng tại Việt Nam.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const discountRate = 0.2;

  return (
    <div className="min-h-screen bg-[#080c14]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <Zap className="h-4 w-4 text-[#10b981]" />
            <span className="text-sm text-[#10b981] font-medium">Giá cạnh tranh nhất thị trường</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white">
            Bảng Giá
          </h1>

          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Chọn gói phù hợp với nhu cầu của bạn. Tất cả đều đi kèm với hỗ trợ kỹ thuật 24/7 và đảm bảo uptime 99.9%.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-[#64748b] mb-8">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#10b981]" />
              <span>Hoàn tiền 7 ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#10b981]" />
              <span>Hủy bất cứ lúc nào</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#10b981]" />
              <span>Không phí ẩn</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 p-1 bg-[#1e293b] rounded-lg border border-white/8 w-fit mx-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#10b981] text-[#022c22]"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              Theo tháng
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-[#10b981] text-[#022c22]"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              Theo năm (Tiết kiệm 20%)
            </button>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <PricingCardRefactored
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                discountRate={discountRate}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)] text-white">
            So sánh chi tiết các gói
          </h2>
          <FeatureComparisonTable />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)] text-white">
            Câu hỏi thường gặp
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/8 bg-[#0f172a]/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#94a3b8] shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#94a3b8] shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 border-t border-white/5">
                    <p className="text-[#94a3b8] text-sm pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
