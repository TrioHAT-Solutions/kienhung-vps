import { CartItem } from "./cart";

// Pricing configuration
export interface PricingConfig {
  basePrice: number;
  cpuPrice: number;
  memoryPrice: number;
  storagePrice: number;
  bandwidthPrice: number;
  locationPrice: number;
  osPrice: number;
  addOnsPrice: number;
  totalMonthly: number;
  totalYearly: number;
}

// Promotion types
export interface Promotion {
  id: string;
  name: string;
  description: string;
  type: "percentage" | "fixed";
  value: number;
  minDuration: number; // months
  maxUses: number;
  currentUses: number;
}

// Calculate pricing for a configuration
export function calculatePricing(config: {
  cpu?: { price: number };
  memory?: { price: number };
  storage?: { price: number };
  bandwidth?: { price: number };
  location?: { price: number };
  os?: { price: number };
  addOns?: { price: number }[];
}): PricingConfig {
  const cpuPrice = config.cpu?.price || 0;
  const memoryPrice = config.memory?.price || 0;
  const storagePrice = config.storage?.price || 0;
  const bandwidthPrice = config.bandwidth?.price || 0;
  const locationPrice = config.location?.price || 0;
  const osPrice = config.os?.price || 0;
  const addOnsPrice = config.addOns?.reduce((sum, addOn) => sum + addOn.price, 0) || 0;

  const basePrice = 100000; // Base server price
  const totalMonthly = basePrice + cpuPrice + memoryPrice + storagePrice + bandwidthPrice + locationPrice + osPrice + addOnsPrice;
  const totalYearly = totalMonthly * 12 * 0.9; // 10% discount for yearly

  return {
    basePrice,
    cpuPrice,
    memoryPrice,
    storagePrice,
    bandwidthPrice,
    locationPrice,
    osPrice,
    addOnsPrice,
    totalMonthly,
    totalYearly,
  };
}

// Calculate discount based on duration
export function calculateDurationDiscount(
  monthlyPrice: number,
  months: number
): number {
  if (months >= 12) {
    return 0.1; // 10% discount
  } else if (months >= 6) {
    return 0.05; // 5% discount
  }
  return 0; // No discount
}

// Calculate total with all discounts
export function calculateTotal(
  config: {
    cpu?: { price: number };
    memory?: { price: number };
    storage?: { price: number };
    bandwidth?: { price: number };
    location?: { price: number };
    os?: { price: number };
    addOns?: { price: number }[];
  },
  durationMonths: number,
  promoCode?: string
): {
  monthlyPrice: number;
  durationDiscount: number;
  promoDiscount: number;
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  savings: number;
} {
  const pricing = calculatePricing(config);
  const monthlyPrice = pricing.totalMonthly;

  // Calculate duration discount
  const durationDiscountRate = calculateDurationDiscount(monthlyPrice, durationMonths);
  const totalBeforeDiscount = monthlyPrice * durationMonths;
  const durationDiscountAmount = totalBeforeDiscount * durationDiscountRate;

  // Calculate promo discount (placeholder - would agentgw.cloud with real promo system)
  const promoDiscountAmount = 0; // Would calculate based on promoCode

  const totalAfterDiscount = totalBeforeDiscount - durationDiscountAmount - promoDiscountAmount;
  const savings = durationDiscountAmount + promoDiscountAmount;

  return {
    monthlyPrice,
    durationDiscount: durationDiscountRate,
    promoDiscount: promoDiscountAmount,
    totalBeforeDiscount,
    totalAfterDiscount,
    savings,
  };
}

// Format price to Vietnamese currency
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Format price without currency symbol (for display)
export function formatPriceNumber(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Get duration options
export function getDurationOptions(): { value: number; label: string; discount: number }[] {
  return [
    { value: 1, label: "1 tháng", discount: 0 },
    { value: 3, label: "3 tháng", discount: 0 },
    { value: 6, label: "6 tháng", discount: 5 },
    { value: 12, label: "12 tháng", discount: 10 },
    { value: 24, label: "24 tháng", discount: 10 },
  ];
}

// Available promo codes (would be from database in real app)
const PROMO_CODES: Record<string, { type: "percentage" | "fixed"; value: number; minDuration: number }> = {
  "WELCOME10": { type: "percentage", value: 10, minDuration: 1 },
  "SAVE50K": { type: "fixed", value: 50000, minDuration: 3 },
  "ANNUAL20": { type: "percentage", value: 20, minDuration: 12 },
};

// Validate and apply promo code
export function validatePromoCode(
  code: string,
  durationMonths: number,
  totalAmount: number
): { valid: boolean; discount: number; message: string } {
  const promo = PROMO_CODES[code.toUpperCase()];

  if (!promo) {
    return { valid: false, discount: 0, message: "Mã giảm giá không hợp lệ" };
  }

  if (durationMonths < promo.minDuration) {
    return {
      valid: false,
      discount: 0,
      message: `Áp dụng cho hợp đồng tối thiểu ${promo.minDuration} tháng`
    };
  }

  let discount = 0;
  if (promo.type === "percentage") {
    discount = totalAmount * (promo.value / 100);
  } else {
    discount = Math.min(promo.value, totalAmount);
  }

  return {
    valid: true,
    discount,
    message: `Áp dụng thành công! Giảm ${promo.type === "percentage" ? `${promo.value}%` : formatPrice(promo.value)}`,
  };
}