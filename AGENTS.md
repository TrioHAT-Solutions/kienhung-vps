# AGENTS.md — Next.js 16.3+ Technical Patterns for AI Agents

> **Framework**: Next.js 16.3+ (App Router, Turbopack stable, React 19.2, React Compiler)
> **Specs**: See `docs/` for business requirements. This file covers technical implementation patterns only.

---

## 1. Next.js 16.3+ Key Patterns

### 1.1. Explicit Caching with `'use cache'`
Next.js 16 is **dynamic by default**. Only cache when explicitly requested:

```tsx
// Correct: explicit cache directive
export async function getVPSPlans() {
  'use cache';
  return PLANS_DATA;
}

// Wrong: do NOT use old patterns
// export const revalidate = 3600;  // DON'T
// unstable_cache(...)              // DON'T
```

Use `revalidateTag()`, `updateTag()`, or `refresh()` for cache invalidation.

### 1.2. React Compiler (Auto-Memoization)
React Compiler is stable in Next.js 16. **Do NOT write manual `useMemo`/`useCallback`** unless you have a specific reason to preserve reference identity.

### 1.3. Async Request APIs (Breaking)
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

### 1.4. Network Boundary (`proxy.ts`)
Next.js 16 uses `src/proxy.ts` instead of `middleware.ts` for Node.js runtime. Handles headers, redirects, auth guards, reverse proxy routing. Define it in `src/proxy.ts` and export route handlers for the paths you need.

### 1.5. View Transitions (React 19.2)
Animate elements during navigation or within Transitions:

```tsx
'use client';
import { useTransition } from 'react';

// Wrap state updates in startTransition for View Transitions
const [isPending, startTransition] = useTransition();
```

### 1.6. `useActionState` for Forms
Replace manual loading state management:

```tsx
'use client';
import { useActionState } from 'react';

const [state, formAction, isPending] = useActionState(submitOrder, initialState);
```

### 1.7. `useEffectEvent`
Extract non-reactive logic from Effects:

```tsx
'use client';
import { useEffectEvent } from 'react';

const handlePriceChange = useEffectEvent((price: number) => {
  analytics.track('price_change', { price });
});
```

### 1.8. Activity (Background Rendering)
Render hidden UI while maintaining state:

```tsx
import { Activity } from 'react';

<Activity mode={isVisible ? 'visible' : 'hidden'}>
  <ExpensiveComponent />
</Activity>
```

---

## 2. Tailwind CSS v4 (CSS-First)

**No `tailwind.config.ts` file.** Configuration lives in `globals.css`:

```css
@import "tailwindcss";

@theme inline {
  --color-primary: oklch(0.75 0.15 195);     /* Electric Cyan */
  --color-accent: oklch(0.65 0.2 270);       /* Neon Violet */
  --color-success: oklch(0.7 0.18 155);       /* Emerald Green */
  --color-surface: oklch(0.15 0.005 285);     /* Deep Space */
}
```

Use `@theme inline` for private/custom tokens. This ensures values are inlined at build time and avoids CSS variable leakage.

---

## 3. Motion (from `motion/react`)

```tsx
'use client';
import { motion, AnimatePresence } from 'motion/react';

// Usage:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  {content}
</motion.div>
```

---

## 3.1. UI Libraries

- **glasscn-ui**: Glassmorphism variants of Shadcn components (blurred backgrounds, frosted glass effects). Use for cards, modals, and overlays in the dark theme.
- **Magic UI**: Pre-built animated components (butterflies, particles, text effects). Use sparingly for hero sections and visual accents.

---

## 4. Component Architecture Rules

| Rule | Detail |
|------|--------|
| Server Components (default) | Static content, SEO, metadata, layout shells |
| Client Components (`'use client'`) | Only for interactivity: sliders, modals, filters, calculators |
| Atomic UI | `@/components/ui/` — Button, Card, Slider, Dialog |
| Feature Components | `@/components/features/` — Configurator, AppCatalog, Checkout |
| Shared Components | `@/components/shared/` — Badges, Tooltips, SectionHeaders |

---

## 5. Spec-Driven Development References

| Document | Purpose |
|----------|---------|
| `docs/00_CONSTITUTION.md` | Immutable project rules |
| `docs/01_PROJECT_OVERVIEW.md` | Business model, market analysis |
| `docs/02_SPECIFICATIONS.md` | Data models, pricing engine, API |
| `docs/03_FRONTEND_ARCHITECTURE.md` | Design system, component hierarchy |
| `docs/04_APP_CATALOG_SPEC.md` | App templates and stack configs |
| `docs/05_MVP_ROADMAP.md` | Phase breakdown and milestones |
| `docs/features/` | Individual feature specs |

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
