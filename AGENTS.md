# AGENTS.md — Technical Patterns & Refactor Instructions for AI Agents

> **Framework**: Next.js 16.3+ (App Router, Turbopack stable, React 19.2, React Compiler)
> **Role**: Guidance for AI Developer Agents (e.g., OpenCode, Claude, Codex) executing frontend tasks.

---

## 1. Primary Instruction for OpenCode

When assigned to refactor or implement features in this repository:
1. **Always read [`refactor/README.md`](./refactor/README.md) first**.
2. **Execute tasks sequentially** from `01_TASK_FOUNDATION.md` through `08_VERIFICATION_AND_E2E.md`.
3. **Follow the Design System in [`refactor/00_DESIGN_SYSTEM_TOKENS.md`](./refactor/00_DESIGN_SYSTEM_TOKENS.md)** and [`design-system/MASTER.md`](./design-system/MASTER.md).
4. **Do NOT introduce generic AI gradients or emojis as icons**.
5. **Run `npx tsc --noEmit` after every task** to ensure 0 TypeScript errors.

---

## 2. Next.js 16.3+ Key Patterns

### 2.1. Explicit Caching with `'use cache'`
Next.js 16 is **dynamic by default**. Only cache when explicitly requested:

```tsx
export async function getVPSPlans() {
  'use cache';
  return PLANS_DATA;
}
```

### 2.2. React Compiler (Auto-Memoization)
React Compiler is active. Do **NOT** write manual `useMemo`/`useCallback` unless specifically required for reference equality in custom hooks.

### 2.3. Async Request APIs
`params` and `searchParams` are Promises in Next.js 16:

```tsx
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const query = await searchParams;
}
```

### 2.4. Tailwind CSS v4 (CSS-First)
Configuration lives in `src/app/globals.css` with `@theme`. No `tailwind.config.ts`.

---

## 3. UI/UX Pro Max Quality Checklist

Before completing any task, verify:
- [ ] No emojis used as UI icons (Use Lucide SVG icons).
- [ ] `cursor-pointer` on all clickable cards and buttons.
- [ ] Color contrast exceeds WCAG AA (Text secondary `#94A3B8` minimum).
- [ ] Smooth transitions (150-250ms) on hover and active states.
- [ ] Zero TypeScript errors (`npx tsc --noEmit`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
