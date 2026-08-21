# TrioHAT-VPS — Frontend Implementation Plan

## Overview

This document outlines the complete frontend implementation plan for TrioHAT-VPS landing page. The project follows Spec-Driven Development (SDD) with 10 tasks organized in dependency order.

**Tech Stack:**
- Next.js 16.3+ (App Router, React 19.2)
- Tailwind CSS v4 (CSS-first, no tailwind.config.ts)
- Shadcn UI + Glasscn-UI (glassmorphism) + Magic UI (animations)
- Zustand v5 (state management)
- Motion (Framer Motion successor)
- React Hook Form + Zod (validation)

**Design System:**
- Dark theme (bg-primary: #0F172A)
- Glassmorphism cards (backdrop-blur, subtle borders)
- Accent colors: Emerald (#22C55E), Cyan, Violet
- Typography: Fira Code (headings) + Fira Sans (body)
- Style: Vibrant & Block-based with Horizontal Scroll Journey pattern

---

## Task Dependency Graph

```
Task 01: Project Init
    ↓
Task 02: Design System Setup
    ↓
Task 03: Layout Shell (Navbar, Footer, MobileNav)
    ↓
Task 04: Hero Section
    ↓
Task 05: VPS Configurator (Sliders + Price Calculator)
    ↓
Task 06: 1-Click App Marketplace
Task 07: Pricing Matrix
    ↓
Task 08: Checkout Flow (VietQR Mock)
    ↓
Task 09: Dashboard Mock
    ↓
Task 10: Polish, Responsive & SEO
```

---

## Phase 1: Foundation (Task 01-02)

### Task 01: Project Initialization ⏱️ 30 min
**Status:** NOT STARTED
**Priority:** P0

**Objective:** Initialize Next.js 16.3+ project with full dependency stack.

**Checklist:**
- [ ] Create Next.js app: `npx create-next-app@latest TrioHAT-VPS --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] Verify Next.js 16.3+ and React 19.2
- [ ] Initialize Shadcn UI: `npx shadcn@latest init`
- [ ] Add glassmorphism: `npx shadcn@latest add "https://glasscn-components.vercel.app"`
- [ ] Add Magic UI: `npx shadcn@latest add "https://magicui.design"`
- [ ] Install deps: `npm install zustand motion react-hook-form @hookform/resolvers zod lucide-react`
- [ ] Verify Tailwind v4 CSS-first (no tailwind.config.ts)
- [ ] Create base directory structure

**Files:**
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Homepage
- `src/app/globals.css` - Tailwind v4 tokens

---

### Task 02: Design System Setup ⏱️ 45 min
**Status:** NOT STARTED
**Priority:** P0

**Objective:** Set up complete design system with dark theme, glassmorphism tokens, and custom components.

**Checklist:**
- [ ] Configure `globals.css` with Tailwind v4 CSS-first tokens (OKLCH colors)
- [ ] Set dark theme as default (no light mode for MVP)
- [ ] Create custom glassmorphism card variants
- [ ] Set up typography (Fira Code + Fira Sans via Google Fonts)
- [ ] Create base layout tokens (spacing, border-radius, shadows)
- [ ] Create shared components: Badge, GlowEffect
- [ ] Set up motion presets (fade-in, slide-up, scale-in)

**Design Tokens (OKLCH):**
```css
@theme inline {
  --color-bg-primary: oklch(0.15 0.005 285);    /* #0F172A */
  --color-bg-card: oklch(0.18 0.005 285);       /* #1E293B */
  --color-accent-cyan: oklch(0.75 0.15 195);    /* #22D3EE */
  --color-accent-violet: oklch(0.65 0.2 270);   /* #8B5CF6 */
  --color-accent-emerald: oklch(0.7 0.18 155);  /* #22C55E */
  --color-text-primary: oklch(0.95 0 0);         /* #F8FAFC */
  --color-text-secondary: oklch(0.65 0 0);       /* #94A3B8 */
}
```

**Files:**
- `src/app/globals.css` - Design tokens
- `src/components/ui/glow-effect.tsx` - Glow component
- `src/lib/motion-presets.ts` - Animation presets

---

## Phase 2: Core Layout (Task 03-04)

### Task 03: Layout Shell Setup ⏱️ 60 min
**Status:** NOT STARTED
**Priority:** P1

**Objective:** Create root layout structure with navbar, footer, and responsive navigation.

**Checklist:**
- [ ] Set up root layout with persistent navbar
- [ ] Create responsive navbar with menu toggle
- [ ] Implement Lucide icons
- [ ] Create mobile navigation drawer
- [ ] Set up responsive breakpoints (mobile/tablet/desktop)
- [ ] Create shared navigation components
- [ ] Implement dark theme propagation

**Navigation Items:**
- Trang chủ (Home)
- Cấu hình VPS (Configurator)
- Ứng dụng (Apps)
- Bảng giá (Pricing)
- Liên hệ (Contact)

**Files:**
- `src/app/layout.tsx` - Root layout
- `src/components/layout/Navbar.tsx` - Main nav
- `src/components/layout/MobileNav.tsx` - Mobile menu
- `src/components/layout/Footer.tsx` - Footer
- `src/components/layout/Logo.tsx` - Logo

---

### Task 04: Hero Section ⏱️ 45 min
**Status:** NOT STARTED
**Priority:** P1

**Objective:** Build the landing page hero section with glowing effects and animated elements.

**Checklist:**
- [ ] Create animated gradient text for headline
- [ ] Implement glowing background effect
- [ ] Build floating VPS icons/graphics
- [ ] Create responsive hero layout
- [ ] Add call-to-action buttons
- [ ] Implement scroll-triggered animations
- [ ] Add particle effects

**Hero Content:**
- Headline: "Triển khai VPS trong 60 giây"
- Subheadline: "1-Click App Marketplace + Managed Hosting"
- CTA: "Bắt đầu ngay" / "Xem bảng giá"

**Files:**
- `src/components/sections/Hero.tsx`
- `src/components/ui/gradient-text.tsx`
- `src/components/ui/glow-effect.tsx`
- `src/components/ui/floating-icons.tsx`

---

## Phase 3: Interactive Features (Task 05-07)

### Task 05: VPS Configurator ⏱️ 90 min
**Status:** NOT STARTED
**Priority:** P1

**Objective:** Build interactive VPS configuration panel with sliders and real-time price calculator.

**Checklist:**
- [ ] Create VPS configuration form with sliders
- [ ] Implement CPU slider (1-8 cores)
- [ ] Implement RAM slider (1-32 GB)
- [ ] Implement Storage slider (20-500 GB SSD)
- [ ] Build price calculator with live updates
- [ ] Create configuration summary panel
- [ ] Add OS selector (Ubuntu, CentOS, Debian)
- [ ] Implement location selector (Vietnam regions)
- [ ] Store config in Zustand

**Pricing Logic:**
```
vCPU: 50,000 VNĐ/Core/month
RAM: 35,000 VNĐ/GB/month
Storage: 2,000 VNĐ/GB/month (20,000 VNĐ per 10GB block)
Bandwidth: 1TB included
```

**Files:**
- `src/components/sections/Configurator.tsx`
- `src/components/configurator/Slider.tsx`
- `src/components/configurator/PriceDisplay.tsx`
- `src/components/configurator/OSSelector.tsx`
- `src/components/configurator/LocationSelector.tsx`
- `src/stores/vps-config.ts`
- `src/lib/pricing.ts`

---

### Task 06: 1-Click App Marketplace ⏱️ 60 min
**Status:** NOT STARTED
**Priority:** P1

**Objective:** Build the 1-Click App Marketplace with search, filtering, and app details.

**Checklist:**
- [ ] Create App Marketplace page layout
- [ ] Build app grid with search bar
- [ ] Implement filter by category
- [ ] Create app card component
- [ ] Add "1-Click Install" button
- [ ] Create app detail modal
- [ ] Implement search by name
- [ ] Responsive: grid → list on mobile

**App Categories:**
- Web Server: Nginx, Apache, Caddy
- Database: MySQL, PostgreSQL, MongoDB, Redis
- DevOps: Docker, Portainer, GitLab, Jenkins
- Security: Nginx Proxy Manager, Certbot
- CMS: WordPress, Ghost, Strapi
- Monitoring: Grafana, Prometheus, Uptime Kuma

**Files:**
- `src/components/sections/AppCatalog.tsx`
- `src/components/app/AppCard.tsx`
- `src/components/app/AppGrid.tsx`
- `src/components/app/AppSearch.tsx`
- `src/components/app/AppDetailSheet.tsx`
- `src/data/apps.ts`

---

### Task 07: Pricing Matrix ⏱️ 45 min
**Status:** NOT STARTED
**Priority:** P1

**Objective:** Build the pricing comparison matrix with standard packages.

**Checklist:**
- [ ] Create pricing cards grid (4 packages)
- [ ] Design Starter / Professional / Business / Enterprise tiers
- [ ] Highlight recommended package (Professional)
- [ ] Build feature comparison table
- [ ] Add "Most Popular" badge
- [ ] Create responsive card layout
- [ ] Add hover effects on cards
- [ ] Show price with VND formatting

**Pricing Tiers:**
| Package | CPU | RAM | Storage | Price (per spec) |
|---------|-----|-----|---------|-------|
| Starter | 1 vCPU | 1GB | 20GB | ~125K/mo |
| Professional | 2 vCPU | 4GB | 60GB | ~360K/mo |
| Business | 4 vCPU | 8GB | 120GB | ~720K/mo |
| Enterprise | 8 vCPU | 16GB | 250GB | ~1,460K/mo |

**Files:**
- `src/components/sections/Pricing.tsx`
- `src/components/pricing/PricingCard.tsx`
- `src/components/pricing/FeatureList.tsx`
- `src/data/pricing.ts`

---

## Phase 4: Checkout & Dashboard (Task 08-09)

### Task 08: Checkout Flow ⏱️ 90 min
**Status:** NOT STARTED
**Priority:** P1

**Objective:** Build checkout flow with order summary and VietQR mock payment.

**Checklist:**
- [ ] Create checkout page layout
- [ ] Build order summary sidebar
- [ ] Create customer info form (React Hook Form)
- [ ] Implement form validation (Zod schema)
- [ ] Add VietQR QuickLink mock payment
- [ ] Create payment confirmation display
- [ ] Build order ID generator
- [ ] Add progress indicator
- [ ] Implement form persistence in Zustand

**Customer Info Fields:**
- Full name (required)
- Email (required, email format)
- Phone (required, Vietnamese format: 0xxx xxx xxx)
- Company name (optional)

**Payment Flow:**
1. Customer info → 2. Order review → 3. VietQR payment → 4. Success

**Files:**
- `src/app/checkout/page.tsx`
- `src/components/checkout/CheckoutForm.tsx`
- `src/components/checkout/OrderSummary.tsx`
- `src/components/checkout/PaymentQR.tsx`
- `src/components/checkout/SuccessConfirmation.tsx`
- `src/components/checkout/ProgressIndicator.tsx`
- `src/lib/validators.ts`
- `src/lib/vietqr.ts`

---

### Task 09: Dashboard Mock ⏱️ 60 min
**Status:** NOT STARTED
**Priority:** P2

**Objective:** Build a mock VPS dashboard preview showing server status and metrics.

**Checklist:**
- [ ] Create dashboard layout with sidebar
- [ ] Build server status card (running/stopped indicator)
- [ ] Create CPU/RAM/Storage usage meters
- [ ] Implement basic charts (mock data)
- [ ] Build "Mock Mode" banner
- [ ] Create action buttons (Start/Stop/Restart)
- [ ] Add IP address display
- [ ] Build recent activity list
- [ ] Responsive: sidebar → bottom nav on mobile

**Dashboard Layout:**
```
┌─────────────────────────────────────┐
│ Mock Mode Banner                    │
├─────────┬───────────────────────────┤
│ Sidebar │ Server Status Card        │
│ - Stats │ CPU/RAM/Storage Meters    │
│ - Apps  │ Charts                    │
│ - Logs  │ Action Buttons            │
│ - Cfg   │ Recent Activity           │
└─────────┴───────────────────────────┘
```

**Files:**
- `src/app/dashboard/page.tsx`
- `src/components/dashboard/DashboardLayout.tsx`
- `src/components/dashboard/ServerStatus.tsx`
- `src/components/dashboard/UsageMeters.tsx`
- `src/components/dashboard/MockBanner.tsx`
- `src/components/dashboard/ActionButtons.tsx`
- `src/components/dashboard/ActivityFeed.tsx`
- `src/data/mock-metrics.ts`

---

## Phase 5: Polish (Task 10)

### Task 10: Polish, Responsive & SEO ⏱️ 60 min
**Status:** NOT STARTED
**Priority:** P2

**Objective:** Final polish: responsive testing, animations, SEO, and performance.

**Checklist:**
- [ ] Review all pages for responsive issues
- [ ] Add SEO metadata (title, description, OG tags)
- [ ] Implement page transitions with Motion
- [ ] Add loading states for all async content
- [ ] Optimize images and assets
- [ ] Add Open Graph images
- [ ] Implement structured data (JSON-LD)
- [ ] Add favicon and manifest
- [ ] Performance audit (Lighthouse)
- [ ] Cross-browser testing

**SEO Checklist:**
- [ ] Title tags per page
- [ ] Meta descriptions
- [ ] Open Graph tags
- [ ] Canonical URLs
- [ ] Structured data (Organization, Product)
- [ ] Sitemap generation
- [ ] robots.txt

**Performance Targets:**
- Lighthouse Performance: 90+
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Bundle size: < 200KB initial

**Files:**
- `src/app/layout.tsx` (update with SEO)
- `src/app/not-found.tsx` (404 page)
- `src/components/ui/PageTransition.tsx`
- `src/components/ui/SkeletonLoader.tsx`
- `src/lib/seo.ts`
- `public/robots.txt`
- `public/og-default.png`

---

## Summary

| Task | Name | Est. | Priority | Dependencies |
|------|------|------|----------|--------------|
| 01 | Project Init | 30 min | P0 | None |
| 02 | Design System | 45 min | P0 | Task 01 |
| 03 | Layout Shell | 60 min | P1 | Task 02 |
| 04 | Hero Section | 45 min | P1 | Task 03 |
| 05 | Configurator | 90 min | P1 | Task 04 |
| 06 | App Marketplace | 60 min | P1 | Task 03 |
| 07 | Pricing Matrix | 45 min | P1 | Task 03 |
| 08 | Checkout Flow | 90 min | P1 | Task 05, 07 |
| 09 | Dashboard Mock | 60 min | P2 | Task 03 |
| 10 | Polish & SEO | 60 min | P2 | All |

**Total Estimated Time:** ~10 hours

---

## Next Steps

1. **Approve this plan** - Review and confirm task order
2. **Start Task 01** - Initialize Next.js project
3. **Iterate** - Complete tasks in dependency order
4. **Review** - After each task, verify against checklist
5. **Deploy** - Final task: Vercel deployment

---

*Generated: 2026-08-21*
*Project: TrioHAT-VPS*
*MVP Scope: Frontend Only*