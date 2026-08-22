"use client";

import { useCheckoutStore } from "@/stores/checkout-store";
import { ProgressIndicator } from "@/components/checkout/progress-indicator";
import { OrderSummary } from "@/components/checkout/order-summary";
import { CustomerForm } from "@/components/checkout/customer-form";
import { PaymentQR } from "@/components/checkout/payment-qr";
import { SuccessConfirmation } from "@/components/checkout/success-confirmation";
import { Shield, Zap, Clock } from "lucide-react";

export default function CheckoutPage() {
  const { step } = useCheckoutStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              {step === "success" ? "Hoàn thành" : "Thanh toán"}
            </span>
          </h1>
          {step !== "success" && (
            <p className="text-zinc-400">
              Hoàn tất thông tin để kích hoạt VPS của bạn
            </p>
          )}
        </div>

        {/* Progress */}
        <ProgressIndicator currentStep={step} />

        {/* Content */}
        <div className={`grid gap-8 ${step === "success" ? "grid-cols-1" : "lg:grid-cols-5"}`}>
          {/* Main Content */}
          <div className={step === "success" ? "lg:col-span-5" : "lg:col-span-3"}>
            {step === "info" && <CustomerForm />}
            {step === "payment" && <PaymentQR />}
            {step === "success" && <SuccessConfirmation />}
          </div>

          {/* Sidebar */}
          {step !== "success" && (
            <div className="lg:col-span-2">
              <OrderSummary />

              {/* Trust */}
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <Shield className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>SSL Secure & AES-256 Encryption</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span>Kích hoạt server trong 60 giây</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <Clock className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span>Hỗ trợ kỹ thuật 24/7</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
