# ADR 002: Tailwind CSS v4 CSS-First Design System

**Status**: Accepted
**Date**: 2026-08-21
**Deciders**: Do Kien Hung (Owner), AI Assistant

---

## Context

TrioHAT-VPS requires a dark-themed, glassmorphism-heavy design system ("Vibe Coding" aesthetic). The UI needs:
- Dark background (zinc-950) with gradient glow effects
- Glassmorphism cards (`backdrop-blur-xl`, `border border-white/10`)
- Accent colors: Cyan (speed), Violet (AI/automation), Emerald (status)
- Responsive design (Mobile 375px → Desktop 1440px+)
- Vietnamese typography with proper diacritics

## Decision

**Tailwind CSS v4 CSS-first configuration** (no `tailwind.config.ts`):
- Configuration via `@theme inline` in `globals.css`
- OKLCH color tokens for modern color management
- Shadcn UI (Radix primitives) for accessible components
- Lucide React Icons for consistent iconography

## Consequences

### Positive
- CSS-native approach (no JS config file to maintain)
- OKLCH provides perceptually uniform colors (better gradients)
- Shadcn UI gives accessible, customizable components
- Lucide icons are tree-shakeable and consistent

### Negative
- Tailwind v4 is newer (fewer tutorials/examples)
- Need to learn `@theme inline` syntax (different from v3)
- No `tailwind.config.ts` (some tools expect it)

## What Claude Should Do

- Configure theme tokens in `src/app/globals.css` using `@theme inline`
- Use OKLCH color values for better gradient rendering
- Import Shadcn components via `npx shadcn@latest add <component>`
- Use Lucide icons: `import { Server, Cpu, HardDrive } from 'lucide-react'`
- Never create `tailwind.config.ts` (it's v3 pattern)
