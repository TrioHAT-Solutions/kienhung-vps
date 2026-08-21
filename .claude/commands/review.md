---
description: "Code review checklist for TrioHAT-VPS"
allowed-tools: ["Read", "Glob", "Grep"]
---

# /review — Feature Code Review

You are reviewing code for the TrioHAT-VPS project against SDD specs and design standards.

## Review Checklist

### 1. Spec Compliance
- [ ] Code matches the feature spec in `docs/features/`
- [ ] All acceptance criteria are implemented
- [ ] Edge cases from spec are handled
- [ ] No scope creep beyond spec

### 2. Technical Standards
- [ ] TypeScript strict mode (no `any` types)
- [ ] Server Components by default (client only when needed)
- [ ] Proper `'use client'` directive on interactive components
- [ ] No manual `useMemo`/`useCallback` (React Compiler handles it)
- [ ] `params`/`searchParams` treated as Promises (Next.js 16)
- [ ] No `tailwind.config.ts` (use CSS-first config)
- [ ] No `middleware.ts` (use `proxy.ts` for Next.js 16)

### 3. Design System
- [ ] Uses Tailwind CSS v4 tokens (not v3 patterns)
- [ ] Dark theme colors (zinc-950 background)
- [ ] Glassmorphism cards (backdrop-blur-xl, border-white/10)
- [ ] Accent colors: Cyan/Violet/Emerald
- [ ] Responsive: Mobile (375px) → Tablet (768px) → Desktop (1440px)
- [ ] Vietnamese content with proper diacritics
- [ ] Lucide icons (no placeholder images)

### 4. Performance
- [ ] Lighthouse score > 90
- [ ] No unnecessary re-renders
- [ ] Images optimized (WebP/AVIF, next/image)
- [ ] Fonts optimized (next/font/google)

### 5. Business Rules
- [ ] All prices in VND (never USD on UI)
- [ ] Company info correct (MST: 3703344754, Address: So 39/9...)
- [ ] VietQR format correct (img.vietqr.io URL)
- [ ] Checkout flow matches spec

## Output

Provide a structured review with:
1. **PASS/FAIL** for each checklist category
2. **Issues found** (with file:line references)
3. **Suggestions** (improvements not in spec)
4. **Verdict**: APPROVE / REQUEST_CHANGES / BLOCK
