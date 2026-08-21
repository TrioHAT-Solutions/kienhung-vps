# UI Libraries Research — TrioHAT-VPS

## Selected Stack (Best for This Project)

### 1. Shadcn UI (Base)
- **Why**: Industry standard, accessible, Radix primitives, TypeScript-first
- **Install**: `npx shadcn@latest init`
- **Components**: Button, Card, Slider, Dialog, Tabs, Input, Badge, Tooltip
- **Docs**: https://ui.shadcn.com

### 2. Glasscn-UI (Glassmorphism)
- **Why**: Drop-in glassmorphism variants for shadcn components
- **Install**: `npx shadcn@latest add "https://glasscn-components.vercel.app"`
- **Variants**: `glass`, `subtle`, `liquid-glass`
- **Props**: `variant="glass"`, `blur="xl"`
- **Docs**: https://glasscn-components.vercel.app

### 3. Magic UI (Animations)
- **Why**: 150+ animated components, perfect companion for shadcn
- **Install**: `npx shadcn@latest add "https://magicui.design"`
- **Key Components**: BorderBeam, AnimatedGradientText, BlurFade, ShimmerButton, Particles, Globe
- **Docs**: https://magicui.design

### 4. Motion (Framer Motion successor)
- **Why**: React 19 native, View Transitions support, industry standard
- **Install**: `npm install motion`
- **Import**: `import { motion, AnimatePresence } from "motion/react"`
- **Docs**: https://motion.dev

## Combined Install Commands

```bash
# Step 1: Init Shadcn
npx shadcn@latest init

# Step 2: Add glassmorphism
npx shadcn@latest add "https://glasscn-components.vercel.app"

# Step 3: Add Magic UI animations
npx shadcn@latest add "https://magicui.design"

# Step 4: Add core shadcn components
npx shadcn@latest add button card slider dialog tabs input badge tooltip separator sheet

# Step 5: Install additional deps
npm install zustand motion react-hook-form @hookform/resolvers zod lucide-react
```

## Why This Combo Works

| Need | Solution |
|------|----------|
| Base UI components | Shadcn UI |
| Glassmorphism cards | Glasscn-UI |
| Animated entrances | Magic UI (BlurFade, Particles) |
| Animated buttons | Magic UI (ShimmerButton, BorderBeam) |
| Gradient text | Magic UI (AnimatedGradientText) |
| Page transitions | Motion (View Transitions) |
| Micro-interactions | Motion (spring animations) |
| Form handling | React Hook Form + Zod |
| State management | Zustand v5 |
