# Task 01: Project Initialization

## Status: NOT STARTED
## Priority: P0 (Must do first)
## Estimated: 30 min

## Objective
Initialize Next.js 16.3+ project with full dependency stack for TrioHAT-VPS frontend.

## Steps
1. `npx create-next-app@latest TrioHAT-VPS --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
2. Verify Next.js 16.3+ and React 19.2 installed
3. Initialize Shadcn UI: `npx shadcn@latest init`
4. Add glassmorphism library: `npx shadcn@latest add "https://glasscn-components.vercel.app"`
5. Add Magic UI components: `npx shadcn@latest add "https://magicui.design"`
6. Install additional deps: `npm install zustand motion react-hook-form @hookform/resolvers zod lucide-react`
7. Verify Tailwind CSS v4 CSS-first config (no tailwind.config.ts)
8. Create base directory structure per CLAUDE.md

## Dependencies
- None (this is the first task)

## Output
- Working Next.js 16.3+ project with all dependencies
- Tailwind v4 CSS-first config in globals.css
- Shadcn UI + glasscn-ui + Magic UI components available
- Base directory structure created

## Verification
- [ ] `npm run dev` starts without errors
- [ ] Homepage loads at localhost:3000
- [ ] Dark theme works
- [ ] Shadcn components render correctly

## Notes
- Do NOT create tailwind.config.ts (Tailwind v4 uses CSS-first)
- Use `motion` package (not `framer-motion`)
- TypeScript strict mode enabled
