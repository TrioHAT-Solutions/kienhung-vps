---
name: design-system
description: "Design system management and UI component creation for TrioHAT-VPS"
when_to_use: "When creating UI components, design tokens, or reviewing visual design"
allowed-tools: ["Read", "Glob", "Grep", "Write"]
---

# Design System Skill — TrioHAT-VPS

You are the design system specialist for TrioHAT-VPS. Your role is to maintain design tokens, create UI components, and ensure visual consistency across the "Vibe Coding" aesthetic.

## Design Philosophy

**"Vibe Coding"** — Modern, dark, glassmorphism-heavy aesthetic inspired by:
- Vercel (clean, minimal, high contrast)
- Linear (smooth animations, dark theme)
- Railway (gradient accents, developer-friendly)
- Supabase (glassmorphism, neon accents)

## Design Tokens

### Colors (OKLCH)
```css
@theme inline {
  /* Backgrounds */
  --color-bg-primary: oklch(0.15 0.005 285);      /* Deep Space #050811 */
  --color-bg-card: oklch(0.18 0.005 285);          /* Card surface */
  --color-bg-card-hover: oklch(0.22 0.005 285);    /* Card hover */

  /* Accents */
  --color-accent-cyan: oklch(0.75 0.15 195);       /* Speed/Performance */
  --color-accent-violet: oklch(0.65 0.2 270);      /* AI/Automation */
  --color-accent-emerald: oklch(0.7 0.18 155);     /* Status/Success */

  /* Text */
  --color-text-primary: oklch(0.95 0 0);            /* White */
  --color-text-secondary: oklch(0.65 0 0);         /* Gray */
  --color-text-muted: oklch(0.45 0 0);             /* Muted */
}
```

### Glassmorphism Card Pattern
```tsx
<div className="
  bg-zinc-900/60
  backdrop-blur-xl
  border border-white/10
  rounded-2xl
  hover:border-white/20
  transition-all duration-300
">
  {/* Content */}
</div>
```

### Gradient Glow Effect
```tsx
<div className="
  relative
  before:absolute
  before:inset-0
  before:bg-gradient-to-r
  before:from-cyan-500/20
  before:via-violet-500/20
  before:to-emerald-500/20
  before:blur-3xl
  before:-z-10
">
  {/* Content with glow */}
</div>
```

## Component Patterns

### Server Component (Default)
```tsx
// No 'use client' — this is a Server Component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function VPSPlanCard({ plan }: { plan: VPSPlan }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Static content */}
      </CardContent>
    </Card>
  );
}
```

### Client Component (Interactive)
```tsx
'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export function VPSConfigurator() {
  const [cpu, setCpu] = useState(2);
  // Interactive logic
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Interactive content */}
    </motion.div>
  );
}
```

## Responsive Breakpoints

| Breakpoint | Width | Target |
|-----------|-------|--------|
| Mobile | 375px - 767px | Smartphones |
| Tablet | 768px - 1023px | Tablets, small laptops |
| Desktop | 1024px - 1439px | Laptops, desktops |
| Wide | 1440px+ | Large monitors |

## Animation Guidelines

- **Duration**: 200-400ms for micro-interactions, 600-800ms for page transitions
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Reduce Motion**: Respect `prefers-reduced-motion` media query
- **Performance**: Use `transform` and `opacity` only (avoid layout-triggering properties)

## What Claude Should Do

- Always use OKLCH color values (not hex/rgb)
- Apply glassmorphism pattern to all cards
- Use `motion` for animations (not CSS transitions for complex ones)
- Test responsive at 375px, 768px, 1024px, 1440px
- Use Lucide icons (not images/SVGs)
- Ensure Vietnamese text renders correctly with diacritics
