# Task 04: Hero Section

## Status: NOT STARTED
## Priority: P1
## Estimated: 45 min

## Objective
Build the landing page hero section with glowing effects and animated elements.

## Steps
1. Create animated gradient text for headline
2. Implement glowing background effect
3. Build floating VPS icons/graphics
4. Create responsive hero layout
5. Add call-to-action buttons
6. Implement scroll-triggered animations
7. Add particle effects or subtle background animation

## Design Integration
- Hero background: radial-gradient glow
- Accent colors: Cyan/Violet/Emerald
- Use Magic UI: AnimatedGradientText, BlurFade
- Motion: fade-in, slide-up on load
- Typography: Display size, Fira Sans Bold

## Dependencies
- Task 03 (Layout Shell)

## Output
- Hero section component
- Animated gradient text
- Floating graphics
- CTA buttons
- Responsive layout

## Verification
- [ ] Gradient text animates
- [ ] Glow effect visible
- [ ] Responsive: stacks on mobile
- [ ] Animations smooth (60fps)
- [ ] CTA buttons clickable

## Files to Create
- `components/sections/Hero.tsx`
- `components/ui/GradientText.tsx`
- `components/ui/GlowEffect.tsx`
- `components/ui/FloatingIcons.tsx`

## Notes
- Use CSS gradients, not images
- Maintain 4.5:1 contrast ratio
- Respect prefers-reduced-motion