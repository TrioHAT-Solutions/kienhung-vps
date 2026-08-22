"use client";

import { useState } from "react";
import { User, Mail, Phone, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <User className="h-5 w-5 text-cyan-400" />
          Thông tin khách hàng
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm text-zinc-400 flex items-center gap-2">
            <User className="h-4 w-4" />
            Họ và tên <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={customer.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="Nguyễn Văn A"
            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
              errors.name && touched.name
                ? "border-red-500 focus:ring-red-500/50"
                : "border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50"
            }`}
          />
          {errors.name && touched.name && (
            <p className="text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm text-zinc-400 flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={customer.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="email@example.com"
            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
              errors.email && touched.email
                ? "border-red-500 focus:ring-red-500/50"
                : "border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50"
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm text-zinc-400 flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Số điện thoại <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            value={customer.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            placeholder="0976830911"
            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
              errors.phone && touched.phone
                ? "border-red-500 focus:ring-red-500/50"
                : "border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50"
            }`}
          />
          {errors.phone && touched.phone && (
            <p className="text-xs text-red-400">{errors.phone}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="text-sm text-zinc-400 flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Công ty (tuỳ chọn)
          </label>
          <input
            type="text"
            value={customer.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Tên công ty của bạn"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 border-white/10 hover:bg-white/5"
            onClick={handleBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600"
            onClick={handleSubmit}
          >
            Tiếp tục
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
