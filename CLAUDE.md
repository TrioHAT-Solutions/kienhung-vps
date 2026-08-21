# CLAUDE.md — TrioHAT-VPS

> **Service**: VPS Hosting + Managed Software Deployment
> **Company**: CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG (MST: 3703344754)
> **Current Phase**: MVP Frontend (planning & specs only — no code yet)

---

## Project Identity

- **Name**: TrioHAT-VPS
- **Model**: VPS Hosting + 1-Click App Stacks + Managed Deployment
- **Target Market**: Vietnam (primary), international (secondary)
- **Differentiator**: "Hạ Tầng Sẵn Sàng – Ứng Dụng Trong Tích Tắc" — VPS with pre-configured app stacks + Vietnamese-language support + VietQR instant payment

## Tech Stack (MVP Frontend)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.3+ (App Router, Turbopack default) |
| React | React 19.2 (Compiler stable, auto-memoization) |
| Language | TypeScript 5.1+ (strict) |
| Styling | Tailwind CSS v4 (CSS-first, no tailwind.config.ts) |
| UI Components | Shadcn UI (Radix primitives) + Lucide Icons |
| UI Extras | glasscn-ui (glassmorphism variants) + Magic UI (animated components) |
| Animations | `motion` (from `motion/react`) — NOT `framer-motion` |
| Network | `proxy.ts` — Next.js 16 network boundary (replaces middleware for Node.js runtime) |
| State | Zustand v5 |
| Forms | React Hook Form + Zod |
| Payment (mock) | VietQR QuickLink (`img.vietqr.io`) |

## Coding Conventions

1. **Language split**: UI content in **Vietnamese**. Codebase (variables, types, comments, commits) in **English**.
2. **Components**: Server Components by default. Client Components (`'use client'`) only for interactive elements.
3. **Structure**: `@/components/ui/` for primitives, `@/components/features/` for feature components.
4. **Type Safety**: No `any`. All types defined in `@/types/`.
5. **Design**: Dark theme (zinc-950), accent colors (Cyan/Violet/Emerald), gradient effects, glassmorphism cards.

## SDD Workflow (Spec-Driven Development)

**Every feature starts with a spec. No code without a spec.**

1. **Read Spec First**: Check `docs/` for relevant feature spec before writing any code.
2. **Plan Before Code**: Use Plan Mode to design implementation approach.
3. **Spec Updates**: If business logic or data models change, update the corresponding spec in `docs/`.
4. **Visual Verification**: Responsive on Mobile/Tablet/Desktop. Pricing calculations must be pixel-perfect.

## Business Context (Legal)

| Field | Value |
|-------|-------|
| Company | CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG |
| International | KIEN HUNG DISTRIBUTION AND TRADING COMPANY LIMITED |
| Tax ID | 3703344754 |
| Address | Số 39/9, Đường Trần Hưng Đạo, Phường Đông Hòa, TP. HCM |
| Director | Do Kien Hung |
| Hotline | 0976830911 |

## Before Making Changes — Check ADRs First

Read Architecture Decision Records in `.claude/adr/` before making technical decisions:

| ADR | Decision |
|-----|----------|
| `.claude/adr/001-nextjs-16-framework.md` | Next.js 16.3+ as primary framework |
| `.claude/adr/002-tailwind-v4-design-system.md` | Tailwind CSS v4 CSS-first design |
| `.claude/adr/003-state-management-zustand.md` | Zustand v5 for client state |
| `.claude/adr/004-payment-vietqr-mock.md` | VietQR payment mock for MVP |

## Documentation Map

```
docs/
├── 00_CONSTITUTION.md          # Project-wide rules (immutable)
├── 01_PROJECT_OVERVIEW.md      # Market analysis, business model, legal
├── 02_SPECIFICATIONS.md        # Data models, pricing engine, API specs
├── 03_FRONTEND_ARCHITECTURE.md # Component hierarchy, design system, state
├── 04_APP_CATALOG_SPEC.md      # 15+ app templates with stack details
├── 05_MVP_ROADMAP.md           # Phase breakdown and deliverables
└── features/                   # Per-feature specs (added as needed)

.claude/
├── adr/                        # Architecture Decision Records
│   ├── 001-nextjs-16-framework.md
│   ├── 002-tailwind-v4-design-system.md
│   ├── 003-state-management-zustand.md
│   └── 004-payment-vietqr-mock.md
├── commands/                   # Custom slash commands
│   ├── spec.md                 # /spec — Write feature spec
│   ├── adr.md                  # /adr — Create ADR
│   └── review.md               # /review — Code review
├── skills/                     # Custom skills
│   ├── architect/SKILL.md      # Architecture planning
│   └── design-system/SKILL.md  # Design system management
├── hooks/                      # Pre/post tool hooks
└── memory/                     # Persistent memory
```

## Critical Rules

- **Read ADRs first** — before making any technical decision
- **No time-sensitive info in specs** (versions change — reference patterns, not numbers)
- **Specs are the source of truth** — not CLAUDE.md, not AGENTS.md
- **MVP scope = Frontend only** — backend integration is Phase 2
- **All monetary values in VND** — never display USD on UI
