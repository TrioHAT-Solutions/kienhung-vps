"use client";

import { create } from "zustand";
import { calculatePricing, calculateDurationDiscount } from "@/lib/pricing-engine";

export interface CheckoutConfig {
  cpu: { id: string; cores: number; price: number } | null;
  ram: { id: string; gb: number; price: number } | null;
  storage: { id: string; gb: number; price: number } | null;
  os: { id: string; name: string; price: number } | null;
  datacenter: { id: string; name: string; price: number } | null;
  bandwidth: { id: string; label: string; price: number } | null;
  addOns: { id: string; name: string; price: number }[];
  duration: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export type CheckoutStep = "info" | "payment" | "success";

interface CheckoutState {
  step: CheckoutStep;
  config: CheckoutConfig;
  customer: CustomerInfo;
  orderId: string;

  setStep: (step: CheckoutStep) => void;
  setConfig: (config: Partial<CheckoutConfig>) => void;
  setCustomer: (customer: Partial<CustomerInfo>) => void;
  generateOrderId: () => void;
  reset: () => void;
}

export interface CheckoutTotals {
  monthly: number;
  gross: number;
  discountRate: number;
  discount: number;
  total: number;
}

export function computeCheckoutPricing(config: CheckoutConfig): CheckoutTotals {
  const pricing = calculatePricing({
    cpu: config.cpu ? { price: config.cpu.price } : undefined,
    memory: config.ram ? { price: config.ram.price } : undefined,
    storage: config.storage ? { price: config.storage.price } : undefined,
    bandwidth: config.bandwidth ? { price: config.bandwidth.price } : undefined,
    location: config.datacenter ? { price: config.datacenter.price } : undefined,
    os: config.os ? { price: config.os.price } : undefined,
    addOns: config.addOns.map((a) => ({ price: a.price })),
  });

  const monthly = pricing.totalMonthly;
  const discountRate = calculateDurationDiscount(monthly, config.duration);
  const gross = monthly * config.duration;
  const discount = Math.round(gross * discountRate);
  const total = gross - discount;

  return { monthly, gross, discountRate, discount, total };
}

function generateOrderNumber(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `KHVPS-${y}${m}${d}-${rand}`;
}

const initialConfig: CheckoutConfig = {
  cpu: null,
  ram: null,
  storage: null,
  os: null,
  datacenter: null,
  bandwidth: null,
  addOns: [],
  duration: 1,
};

export const useCheckoutStore = create<CheckoutState>((set) => ({
  step: "info",
  config: { ...initialConfig },
  customer: { name: "", email: "", phone: "", company: "" },
  orderId: "",

  setStep: (step) => set({ step }),

  setConfig: (partial) =>
    set((state) => ({ config: { ...state.config, ...partial } })),

  setCustomer: (partial) =>
    set((state) => ({ customer: { ...state.customer, ...partial } })),

  generateOrderId: () => set({ orderId: generateOrderNumber() }),

  reset: () =>
    set({
      step: "info",
      config: { ...initialConfig },
      customer: { name: "", email: "", phone: "", company: "" },
      orderId: "",
    }),
}));
