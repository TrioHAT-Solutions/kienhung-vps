# CLAUDE.md — TrioHAT-VPS

> **Service**: VPS Hosting + Managed Software Deployment
> **Company**: CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG (MST: 3703344754)
> **Current Phase**: UI/UX Refactor Release (Developer Cloud Platform Standard)

---

## Project Identity

- **Name**: TrioHAT-VPS
- **Model**: VPS Hosting + 1-Click App Stacks + Managed Deployment
- **Design Philosophy**: Developer-First Cloud Infrastructure (Railway/Supabase/Vercel standard)
- **Target Market**: Vietnam (primary), international (secondary)
- **Differentiator**: "Hạ Tầng Sẵn Sàng – Ứng Dụng Trong Tích Tắc" — VPS NVMe + Pre-configured App Stacks + Vietnamese Support + VietQR instant payment

## Tech Stack (MVP Frontend)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.3+ (App Router, Turbopack default) |
| React | React 19.2 (Compiler stable, auto-memoization) |
| Language | TypeScript 5.1+ (strict) |
| Styling | Tailwind CSS v4 (CSS-first tokens in `globals.css`) |
| Typography | `Space Grotesk` (Headings) + `DM Sans` (Body) + `Fira Code` (Monospace) |
| UI Components | Shadcn UI (Radix primitives) + Lucide Icons |
| Animations | `motion` (from `motion/react`) |
| State | Zustand v5 |
| Forms | React Hook Form + Zod |
| Payment (mock) | VietQR QuickLink (`img.vietqr.io`) |

## Coding & Design Conventions

1. **Language split**: UI content in **Vietnamese**. Codebase (variables, types, comments, commits) in **English**.
2. **Design Standard**: Developer Dark Theme (`#080C14` root, `#0F172A` card, `#10B981` Emerald accent, `#06B6D4` Cyan accent).
3. **No AI Gradients**: Avoid generic purple-to-blue gradient text and static bento cliches.
4. **Interactive First**: Provide CLI simulator, sliders, 1-click copy feedback toast, live server provisioning animation.
5. **Type Safety**: No `any`. All types defined in `@/types/` or component interfaces. All category arrays must use `as const`.

## SDD Workflow & Refactor Plan

All implementation tasks for OpenCode / AI agents are organized in the [`refactor/`](./refactor/) directory:

```
refactor/
├── README.md                     # Execution guide for OpenCode
├── 00_DESIGN_SYSTEM_TOKENS.md    # Design system tokens & UI/UX rules
├── 01_TASK_FOUNDATION.md         # Task 1: Globals, Layout, Header, Footer
├── 02_TASK_LANDING_HERO.md       # Task 2: Split Hero, CLI Simulator
├── 03_TASK_VPS_CONFIGURATOR.md   # Task 3: Configurator, Sliders, Add-ons
├── 04_TASK_APP_MARKETPLACE.md    # Task 4: 1-Click Apps, Drawer Modal
├── 05_TASK_PRICING_MATRIX.md     # Task 5: Pricing Matrix, Annual Toggle
├── 06_TASK_CHECKOUT_PROVISION.md # Task 6: VietQR, Copy Toast, Provisioning
├── 07_TASK_DEVELOPER_DASHBOARD.md# Task 7: Console, Terminal Logs, Copy SSH
└── 08_VERIFICATION_AND_E2E.md    # Task 8: TypeCheck, Build, Playwright E2E
```

## Business Context (Legal)

| Field | Value |
|-------|-------|
| Company | CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG |
| International | KIEN HUNG DISTRIBUTION AND TRADING COMPANY LIMITED |
| Tax ID | 3703344754 |
| Address | Số 39/9, Đường Trần Hưng Đạo, Phường Đông Hòa, TP. HCM |
| Director | Do Kien Hung |
| Hotline | 0976830911 |
