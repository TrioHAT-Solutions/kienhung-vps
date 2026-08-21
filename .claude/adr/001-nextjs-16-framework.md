# ADR 001: Next.js 16.3+ as Primary Framework

**Status**: Accepted
**Date**: 2026-08-21
**Deciders**: Do Kien Hung (Owner), AI Assistant

---

## Context

Kien Hung VPS needs a modern frontend framework for its MVP. The project targets Vietnam's VPS hosting market with a "Vibe Coding" aesthetic (dark theme, micro-interactions, real-time configurator). Requirements:
- Server-side rendering for SEO (landing page, pricing, app catalog)
- Client-side interactivity (VPS configurator slider, real-time price calculator)
- Modern developer experience for AI-assisted coding (Claude Code)
- Vietnamese language content with proper typography

## Decision

**Next.js 16.3+ (App Router)** with:
- Turbopack (stable, default bundler)
- React 19.2 (View Transitions, `useActionState`, `useEffectEvent`)
- React Compiler (auto-memoization)
- `'use cache'` (explicit caching, replaces old revalidation patterns)
- `proxy.ts` (replaces `middleware.ts` for Node.js runtime)

## Alternatives Considered

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| Next.js 16.3+ | Latest stable, React 19.2, Turbopack, AI-friendly | Newer patterns, less community examples | ✅ Selected |
| Next.js 15 | More stable, larger community | Missing View Transitions, older caching model | ❌ |
| Remix | Simpler mental model | Less SEO control, smaller ecosystem | ❌ |
| Vite + React | Fast dev server | No SSR/SSG built-in, more setup | ❌ |

## Consequences

### Positive
- Turbopack delivers 10x faster HMR on large projects
- React Compiler eliminates manual `useMemo`/`useCallback` boilerplate
- `'use cache'` provides explicit, predictable caching behavior
- `proxy.ts` simplifies middleware logic
- Best AI-agent compatibility (Claude Code optimized for Next.js patterns)

### Negative
- Smaller community compared to Next.js 15 (fewer Stack Overflow answers)
- Some patterns still evolving (proxy.ts relatively new)
- Need to learn new caching model (`'use cache'` vs old `revalidate`)

## What Claude Should Do

- Use `'use cache'` for static data (VPS plans, app catalog)
- Use `proxy.ts` instead of `middleware.ts`
- Treat `params` and `searchParams` as Promises (async)
- Avoid manual `useMemo`/`useCallback` (React Compiler handles it)
- Use `useActionState` for form handling instead of manual loading states
