# Task 05: VPS Configurator

## Status: NOT STARTED
## Priority: P1
## Estimated: 90 min

## Objective
Build the interactive VPS configuration panel with sliders, real-time price calculation, and custom server setup options.

## Steps
1. Create VPS configuration form with sliders
2. Implement CPU slider (1-8 cores)
3. Implement RAM slider (1-32 GB)
4. Implement Storage slider (20-500 GB SSD)
5. Build price calculator with live updates
6. Create configuration summary panel
7. Add operating system selector
8. Implement location selector (Vietnam regions)
9. Add validation for min/max values
10. Store config in Zustand

## Pricing Logic
- Base price: 99,000 VND/month
- CPU: +49,000 VND/core/month
- RAM: +29,000 VND/GB/month
- Storage: +0.5 VND/GB/month
- Bandwidth: 1TB included, +10,000 VND/100GB

## Design Integration
- Sliders: Custom styled (green accent)
- Live price: Animated counter
- Config summary: Glassmorphism card
- Responsive: 2-column on desktop, 1-column mobile

## Dependencies
- Task 04 (Hero Section)
- Task 03 (Layout Shell)

## Output
- VPS configurator component
- Price calculator logic
- Zustand store for config
- Configuration summary card

## Verification
- [ ] Sliders update price in real-time
- [ ] Min/max values enforced
- [ ] OS selector works
- [ ] Location selector works
- [ ] Config persists in Zustand
- [ ] Responsive layout

## Files to Create
- `components/sections/Configurator.tsx`
- `components/configurator/Slider.tsx`
- `components/configurator/PriceDisplay.tsx`
- `components/configurator/OSSelector.tsx`
- `components/configurator/LocationSelector.tsx`
- `stores/vps-config.ts`
- `lib/pricing.ts`

## Notes
- Use `motion` for slider animations
- Debounce price calculation
- Use native input[type=range] with custom styling