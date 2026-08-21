# Task 03: Layout Shell Setup

## Status: NOT STARTED
## Priority: P1
## Estimated: 60 min

## Objective
Create root layout structure with navbar, footer, and responsive navigation components.

## Steps
1. Set up root layout with navbar and footer
2. Create responsive navbar with menu toggle for mobile
3. Implement Heroicons/Lucide icon library
4. Create mobile navigation drawer
5. Set up responsive breakpoints (mobile/tablet/desktop)
6. Create shared navigation components (Logo, Menu, UserMenu)
7. Implement dark theme propagation

## Design System Integration
- Use glassmorphism navbar from design system
- Dark background (bg-primary/0F172A)
- Accent color: emerald-500 (#22C55E)
- Typography: Fira Code/Fira Sans from Google Fonts

## Dependencies
- Task 01 (Project Init)
- Task 02 (Design System)

## Output
- Root layout with persistent navbar
- Mobile navigation drawer
- Footer with company info
- Responsive breakpoints
- Icon components

## Verification
- [ ] Navbar sticks on scroll
- [ ] Mobile menu toggle works
- [ ] All links function
- [ ] Responsive at all breakpoints
- [ ] Dark theme applied

## Files to Create
- `app/layout.tsx` - Root layout
- `components/layout/Navbar.tsx` - Main navigation
- `components/layout/MobileNav.tsx` - Mobile menu
- `components/layout/Footer.tsx` - Company footer
- `components/layout/Logo.tsx` - Company logo

## Notes
- Use `useEffectEvent` for scroll handlers
- Mobile first design approach
- Accessible keyboard navigation