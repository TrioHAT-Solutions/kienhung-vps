---
description: "Create an Architecture Decision Record"
allowed-tools: ["Read", "Glob", "Grep", "Write", "mcp__Web_search__web_search"]
---

# /adr — Architecture Decision Record Writer

You are documenting an architecture decision for the TrioHAT-VPS project.

## Workflow

1. **Ask the user** what decision needs to be recorded (if not provided)
2. **Read existing ADRs** in `.claude/adr/` to check for conflicts
3. **Research** best practices via web search if needed
4. **Write the ADR** following the standard format
5. **Save to** `.claude/adr/NNN-decision-title.md` (sequential number)

## ADR Format

```markdown
# ADR NNN: [Title]

**Status**: Proposed | Accepted | Deprecated | Superseded by ADR NXX
**Date**: YYYY-MM-DD
**Deciders**: [Who was involved]

---

## Context
[Why this decision was needed]

## Decision
[What we decided to do]

## Alternatives Considered
| Option | Pros | Cons | Verdict |
|--------|------|------|---------|

## Consequences
### Positive
### Negative

## What Claude Should Do
[Specific guidance for AI agents]
```

## Rules

- ADRs are **append-only** (never edit, only supersede)
- Each ADR covers ONE decision
- Status must be explicit (Proposed/Accepted/Deprecated/Superseded)
- Include "What Claude Should Do" section for AI agent guidance
- Reference ADRs from CLAUDE.md and feature specs

## Existing ADRs

Check `.claude/adr/` for current decisions:
- 001: Next.js 16.3+ framework
- 002: Tailwind CSS v4 design system
- 003: Zustand v5 state management
- 004: VietQR payment mock
