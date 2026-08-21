---
description: "Write a feature spec for TrioHAT-VPS"
allowed-tools: ["Read", "Glob", "Grep", "Write", "mcp__Web_search__web_search"]
---

# /spec — Feature Spec Writer

You are writing a feature specification for the TrioHAT-VPS project.

## Workflow

1. **Ask the user** what feature they want to spec (if not provided in args)
2. **Read existing specs** in `docs/` to understand context and avoid conflicts
3. **Research** similar features in competitor products using web search
4. **Write the spec** using the template in `docs/features/_TEMPLATE.md`
5. **Save to** `docs/features/<feature-name>.md`

## Spec Quality Checklist

- [ ] Problem statement is clear and user-focused
- [ ] User stories follow "As a [role], I want [action], so that [benefit]" format
- [ ] Acceptance criteria are testable (given/when/then)
- [ ] Technical design references ADRs for decisions already made
- [ ] Edge cases are documented
- [ ] Definition of Done includes responsive testing (375px/768px/1440px)
- [ ] No time-sensitive version numbers (use patterns, not specific versions)

## Output Format

Save the spec as a markdown file in `docs/features/` with the feature name as filename (kebab-case).

## Context

- Project: TrioHAT-VPS (VPS Hosting + Managed Software Deployment)
- Company: CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG (MST: 3703344754)
- Current Phase: MVP Frontend (no backend yet)
- Design: Dark theme, glassmorphism, "Vibe Coding" aesthetic
- Read `docs/00_CONSTITUTION.md` for immutable project rules
