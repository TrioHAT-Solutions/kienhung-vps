export interface VPSConfig {
  vcpu: number;
  ram: number; // GB
  storage: number; // GB
  os: string;
  datacenter: string;
  billingCycle: 'monthly' | 'quarterly' | 'yearly';
  addons: {
    backup: boolean;
    monitoring: boolean;
    ddos: boolean;
  };
}

export interface Pricing {
  base: {
    vcpu: number; // per core per month
    ram: number; // per GB per month
    storage: number; // per GB per month
  };
  datacenters: Record<string, {
    multiplier: number;
    locations: string[];
  }>;
  os: Record<string, {
    price: number; // one-time
    name: string;
  }>;
  addons: {
    backup: number; // per GB per month
    monitoring: number; // per month
    ddos: number; // per month
  };
  discounts: {
    quarterly: number; // percentage
    yearly: number; // percentage
  };
}

export interface AppTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  stack: string[];
  config: {
    min_vcpu: number;
    min_ram: number;
    min_storage: number;
  };
  price: {
    monthly: number;
    yearly?: number;
  };
}

export interface Order {
  id: string;
  config: VPSConfig;
  pricing: {
    subtotal: number;
    discount: number;
    vat: number;
    total: number;
  };
  customer: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
  status: 'pending' | 'paid' | 'deploying' | 'active' | 'failed';
  createdAt: Date;
  paidAt?: Date;
}