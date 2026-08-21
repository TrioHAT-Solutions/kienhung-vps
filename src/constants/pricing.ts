import { Pricing } from '@/types/vps';

export const PRICING: Pricing = {
  base: {
    vcpu: 50000, // 50K VND per core per month
    ram: 35000,  // 35K VND per GB per month
    storage: 20000, // 20K VND per GB per month
  },
  datacenters: {
    hcmc: {
      multiplier: 1.0,
      locations: ['TP. Hồ Chí Minh', 'Hồ Chí Minh City'],
    },
    hanoi: {
      multiplier: 1.1,
      locations: ['Hà Nội', 'Hanoi'],
    },
    danang: {
      multiplier: 1.05,
      locations: ['Đà Nẵng', 'Da Nang'],
    },
  },
  os: {
    ubuntu: {
      price: 0,
      name: 'Ubuntu 22.04 LTS',
    },
    centos: {
      price: 0,
      name: 'CentOS 8 Stream',
    },
    debian: {
      price: 0,
      name: 'Debian 11',
    },
    windows: {
      price: 200000, // 200K VND one-time
      name: 'Windows Server 2022',
    },
  },
  addons: {
    backup: 10000, // 10K VND per GB per month
    monitoring: 50000, // 50K VND per month
    ddos: 100000, // 100K VND per month
  },
  discounts: {
    quarterly: 0.05, // 5% discount
    yearly: 0.10, // 10% discount
  },
};

export const APP_CATEGORIES = [
  'web-servers',
  'databases',
  'development',
  'monitoring',
  'messaging',
  'storage',
  'security',
  'ai-ml',
] as const;

export const BILLING_CYCLES = [
  { value: 'monthly', label: 'Tháng', months: 1 },
  { value: 'quarterly', label: 'Quý', months: 3 },
  { value: 'yearly', label: 'Năm', months: 12 },
] as const;