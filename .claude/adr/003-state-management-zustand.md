# ADR 003: Zustand v5 for Client State Management

**Status**: Accepted
**Date**: 2026-08-21
**Deciders**: Do Kien Hung (Owner), AI Assistant

---

## Context

Kien Hung VPS MVP has several interactive features requiring client-side state:
- VPS Configurator: CPU/RAM/SSD sliders, datacenter selection, OS choice
- App Catalog: category filters, selected app tracking
- Checkout Flow: order summary, addon selections, billing cycle
- Price Calculator: real-time pricing with discounts and VAT

Requirements:
- Lightweight (bundle size matters for performance)
- TypeScript-first with good DevTools
- Easy to agentgw.cloud with React 19 Server Components
- No boilerplate ceremony

## Decision

**Zustand v5** for client state management:
- Single store: `useVPSStore` for configurator + cart + filters
- DevTools integration for debugging
- Persist middleware for cart persistence (localStorage)
- No Provider wrapping needed (simplifies Server Component tree)

## Alternatives Considered

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| Zustand v5 | Minimal API, no Provider, great TS support | Less middleware ecosystem than Redux | ✅ Selected |
| Redux Toolkit | Powerful middleware, large ecosystem | Boilerplate, Provider wrapping, heavier | ❌ |
| Jotai | Atomic model, fine-grained | Less intuitive for complex state shapes | ❌ |
| React Context | Built-in | Performance issues, no DevTools | ❌ |

## Consequences

### Positive
- No Provider wrapping (cleaner Server Component tree)
- Minimal boilerplate (5 lines to create store)
- Built-in DevTools for debugging
- `persist` middleware for cart persistence
- TypeScript inference works without manual typing

### Negative
- Less middleware ecosystem compared to Redux Toolkit
- Newer v5 (some patterns still emerging)
- Single store pattern may need refactoring for very large apps

## What Claude Should Do

- Create stores in `src/store/` with Zustand v5 syntax
- Use `create<State>()` for TypeScript inference
- Use `persist` middleware for cart data (localStorage)
- Avoid multiple small stores (consolidate into feature stores)
- Use Zustand DevTools for debugging in development
