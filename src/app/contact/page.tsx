"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Building2, MessageSquare, Send, Check, ShieldCheck, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="py-20 border-b border-white/8 bg-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
            <MessageSquare className="h-4 w-4 text-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981] font-[family-name:var(--font-fira-code)]">
              24/7 Technical Support
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Liên Hệ & <span className="text-[#10b981]">Hỗ Trợ Kỹ Thuật</span>
          </h1>

          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Đội ngũ chuyên viên kỹ thuật và kinh doanh của Kiến Hưng luôn sẵn sàng hỗ trợ giải đáp mọi yêu cầu của bạn 24/7.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Thông Tin Trụ Sở Chính
              </h2>

              <div className="space-y-4 text-sm text-[#94a3b8]">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold font-[family-name:var(--font-space-grotesk)]">
                      CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG
                    </div>
                    <div className="text-xs font-[family-name:var(--font-fira-code)] text-[#10b981] mt-0.5">
                      Mã số thuế: 3703344754
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Địa chỉ văn phòng:</div>
                    <div>168 Hoàng Cầm (Quốc lộ 1K cũ), Linh Xuân, TP.HCM</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#10b981] shrink-0" />
                  <div>
                    <div className="text-white font-medium">Hotline tư vấn & kỹ thuật:</div>
                    <a href="tel:0357554576" className="text-[#10b981] hover:underline font-mono font-bold">
                      0357554576
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#10b981] shrink-0" />
                  <div>
                    <div className="text-white font-medium">Email tiếp nhận yêu cầu:</div>
                    <a href="mailto:kienhung.do1105@gmail.com" className="text-[#06b6d4] hover:underline font-mono">
                      kienhung.do1105@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#10b981] shrink-0" />
                  <div>
                    <div className="text-white font-medium">Thời gian làm việc:</div>
                    <div>Hỗ trợ kỹ thuật 24/7/365 | Tư vấn kinh doanh: 8:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-sm">
            <h2 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h2>
            <p className="text-xs text-[#94a3b8] mb-6">
              Điền thông tin bên dưới, kỹ sư của chúng tôi sẽ liên hệ lại trong vòng 15 phút.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 text-center space-y-3">
                <Check className="h-8 w-8 text-[#10b981] mx-auto" />
                <h3 className="text-base font-bold text-white">Yêu Cầu Đã Được Gửi Thành Công!</h3>
                <p className="text-xs text-[#94a3b8]">
                  Cảm ơn bạn đã liên hệ. Đội ngũ kỹ thuật sẽ phản hồi qua email hoặc số điện thoại của bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] border border-white/8 text-white placeholder-slate-500 focus:outline-none focus:border-[#10b981]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] border border-white/8 text-white placeholder-slate-500 focus:outline-none focus:border-[#10b981]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium">Số điện thoại</label>
                    <input
                      type="tel"
                      placeholder="0357554576"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] border border-white/8 text-white placeholder-slate-500 focus:outline-none focus:border-[#10b981]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium">Nội dung yêu cầu *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Mô tả nhu cầu cấu hình VPS, tư vấn gói dịch vụ hoặc câu hỏi kỹ thuật của bạn..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] border border-white/8 text-white placeholder-slate-500 focus:outline-none focus:border-[#10b981]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Gửi Yêu Cầu Hỗ Trợ
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
