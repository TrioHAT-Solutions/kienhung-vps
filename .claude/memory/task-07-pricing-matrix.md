# Task 07: Pricing Matrix

## Status: NOT STARTED
## Priority: P1
## Estimated: 45 min

## Objective
Build the pricing comparison matrix with standard VPS packages and highlighted recommended option.

## Steps
1. Create pricing cards grid (3-4 packages)
2. Design Starter / Professional / Business / Enterprise tiers
3. Highlight recommended package (Professional)
4. Build feature comparison table
5. Add "Most Popular" badge
6. Create responsive card layout
7. Add hover effects on cards
8. Implement CTA button per card
9. Show price per month with VND formatting
10. Add annual discount toggle

## Pricing Tiers
| Package | CPU | RAM | Storage | Price |
|---------|-----|-----|---------|-------|
| Starter | 1 vCPU | 1GB | 20GB | 99K/mo |
| Professional | 2 vCPU | 4GB | 60GB | 299K/mo |
| Business | 4 vCPU | 8GB | 120GB | 599K/mo |
| Enterprise | 8 vCPU | 16GB | 250GB | 1,199K/mo |

## Design Integration
- Cards: Glassmorphism with border accent
- Highlighted card: Emerald border + glow
- Badge: "Most Popular" with gradient
- Pricing: Large number, small period text
- CTA: Primary button (emerald)

## Dependencies
- Task 03 (Layout Shell)
- Task 05 (Configurator pricing logic)

## Output
- Pricing matrix component
- Pricing card component
- Feature comparison list

## Verification
- [ ] All tiers displayed correctly
- [ ] Recommended card highlighted
- [ ] Price formatting (VND)
- [ ] Responsive: scroll horizontally on mobile
- [ ] CTA buttons functional

## Files to Create
- `components/sections/Pricing.tsx`
- `components/pricing/PricingCard.tsx`
- `components/pricing/FeatureList.tsx`
- `components/pricing/PricingToggle.tsx`
- `data/pricing.ts`

## Notes
- Use `motion` for card hover
- Annual toggle: 10% discount
- Consider sticky header on mobile scroll