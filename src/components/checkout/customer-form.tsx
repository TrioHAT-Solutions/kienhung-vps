"use client";

import { useState } from "react";
import { User, Mail, Phone, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import { useCheckoutStore } from "@/stores/checkout-store";
import { customerSchema, type CustomerFormData } from "@/lib/validators";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export function CustomerForm() {
  const { customer, setCustomer, setStep, generateOrderId } = useCheckoutStore();
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: CustomerFormData): FormErrors => {
    const result = customerSchema.safeParse(data);
    if (result.success) return {};

    const fieldErrors: FormErrors = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof FormErrors;
      if (field) {
        fieldErrors[field] = issue.message;
      }
    });
    return fieldErrors;
  };

  const handleChange = (field: keyof CustomerFormData, value: string) => {
    setCustomer({ [field]: value });
    if (touched[field]) {
      const newCustomer = { ...customer, [field]: value };
      setErrors(validate(newCustomer));
    }
  };

  const handleBlur = (field: keyof CustomerFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(customer));
  };

  const handleSubmit = () => {
    const allTouched = { name: true, email: true, phone: true };
    setTouched(allTouched);
    const formErrors = validate(customer);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      generateOrderId();
      setStep("payment");
    }
  };

  const handleBack = () => {
    setStep("info");
  };

  return (
    <div className="rounded-xl border border-white/8 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/8">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-white flex items-center gap-2">
          <User className="h-5 w-5 text-[#06b6d4]" />
          Thông tin khách hàng
        </h3>
      </div>

      <div className="p-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm text-[#94a3b8] flex items-center gap-2">
            <User className="h-4 w-4" />
            Họ và tên <span className="text-[#ef4444]">*</span>
          </label>
          <input
            type="text"
            value={customer.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="Nguyễn Văn A"
            className={`w-full px-4 py-3 rounded-lg bg-[#1e293b] border text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all ${
              errors.name && touched.name
                ? "border-[#ef4444] focus:ring-[#ef4444]/50"
                : "border-white/8 focus:ring-[#10b981]/50 focus:border-[#10b981]/50"
            }`}
          />
          {errors.name && touched.name && (
            <p className="text-xs text-[#ef4444]">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#94a3b8] flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email <span className="text-[#ef4444]">*</span>
          </label>
          <input
            type="email"
            value={customer.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="email@example.com"
            className={`w-full px-4 py-3 rounded-lg bg-[#1e293b] border text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all ${
              errors.email && touched.email
                ? "border-[#ef4444] focus:ring-[#ef4444]/50"
                : "border-white/8 focus:ring-[#10b981]/50 focus:border-[#10b981]/50"
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-xs text-[#ef4444]">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#94a3b8] flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Số điện thoại <span className="text-[#ef4444]">*</span>
          </label>
          <input
            type="tel"
            value={customer.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            placeholder="0357554576"
            className={`w-full px-4 py-3 rounded-lg bg-[#1e293b] border text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all ${
              errors.phone && touched.phone
                ? "border-[#ef4444] focus:ring-[#ef4444]/50"
                : "border-white/8 focus:ring-[#10b981]/50 focus:border-[#10b981]/50"
            }`}
          />
          {errors.phone && touched.phone && (
            <p className="text-xs text-[#ef4444]">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#94a3b8] flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Công ty (tuỳ chọn)
          </label>
          <input
            type="text"
            value={customer.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Tên công ty của bạn"
            className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border border-white/8 text-white placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981]/50 transition-all"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/8 text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-all cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại
          </button>
          <button
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#022c22] font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
            onClick={handleSubmit}
          >
            Tiếp tục
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
