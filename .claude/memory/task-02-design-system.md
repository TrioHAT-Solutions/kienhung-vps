# Task 02: Design System Setup

## Status: NOT STARTED
## Priority: P0 (After Task 01)
## Estimated: 45 min

## Objective
Set up complete design system with dark theme, glassmorphism tokens, and custom components.

## Steps
1. Configure `globals.css` with Tailwind v4 CSS-first tokens (OKLCH colors)
2. Set up dark theme as default (no light mode toggle for MVP)
3. Create custom glassmorphism card component variants
4. Set up typography (Inter/Geist Sans via next/font/google)
5. Create base layout tokens (spacing, border-radius, shadows)
6. Create shared components: Badge, SectionHeader, GlowEffect
7. Set up motion presets (fade-in, slide-up, scale-in)

## Design Tokens (from ADR-002)

```css
@theme inline {
  --color-bg-primary: oklch(0.15 0.005 285);
  --color-bg-card: oklch(0.18 0.005 285);
  --color-accent-cyan: oklch(0.75 0.15 195);
  --color-accent-violet: oklch(0.65 0.2 270);
  --color-accent-emerald: oklch(0.7 0.18 155);
  --color-text-primary: oklch(0.95 0 0);
  --color-text-secondary: oklch(0.65 0 0);
}
```

## Dependencies
- Task 01 (Project Init)

## Output
- globals.css with full design tokens
- Custom component variants
- Typography setup
- Motion presets

## Verification
- [ ] Dark theme renders correctly
- [ ] Glassmorphism cards work
- [ ] Typography displays Vietnamese diacritics
- [ ] Animations are smooth
