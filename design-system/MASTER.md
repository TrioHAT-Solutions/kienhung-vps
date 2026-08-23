# Design System Master File — TrioHAT-VPS

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> **Design Philosophy:** Developer-First Cloud Infrastructure (Inspired by Railway, Supabase, Vercel, Hetzner)
> **Compliance:** WCAG AAA Color Contrast, 60fps Micro-interactions, UI/UX Pro Max Certified.

---

**Project:** TrioHAT-VPS  
**Company:** CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG (MST: 3703344754)  
**Updated:** 2026-08-23 (Refactor Release)  
**Category:** Cloud VPS Hosting & Developer Infrastructure Platform  

---

## 1. Global Design Tokens

### Color Palette (Developer Dark Theme)

| Role | Hex | OKLCH / CSS Variable | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Root Background** | `#080C14` | `oklch(0.10 0.01 260)` / `--color-background` | Deep OLED black, comfortable for prolonged dev sessions |
| **Card / Surface** | `#0F172A` | `oklch(0.16 0.015 260)` / `--color-card` | Surface background for cards, modals, selectors |
| **Card Hover** | `#1E293B` | `oklch(0.22 0.02 260)` / `--color-card-hover` | Hover & active state background |
| **Accent Emerald** | `#10B981` | `oklch(0.72 0.19 155)` / `--color-primary` | Online state, primary CTA, 99.9% uptime, savings badge |
| **Accent Cyan** | `#06B6D4` | `oklch(0.78 0.14 200)` / `--color-accent` | NVMe IOPS speed, terminal command highlight, network traffic |
| **Accent Amber** | `#F59E0B` | `oklch(0.76 0.16 75)` / `--color-warning` | Popular tier badge, backup add-ons, resource warnings |
| **Border Subtle** | `rgba(255,255,255,0.08)` | `--color-border` | Default 1px crisp borders for cards |
| **Border Active** | `rgba(16,185,129,0.5)` | `--color-border-active` | Active selection, input focus ring |
| **Text Primary** | `#F8FAFC` | `--color-foreground` | High contrast heading & essential text (14.5:1 ratio) |
| **Text Secondary** | `#94A3B8` | `--color-muted-foreground` | Crisp subtitles, labels, body text (> 5.5:1 ratio) |
| **Text Muted** | `#64748B` | `--color-text-muted` | Minor captions, inactive indicators |

---

## 2. Typography Hierarchy

| Family | Role | Weights | Google Fonts Usage |
| :--- | :--- | :--- | :--- |
| **Space Grotesk** | Headings, Numbers, Metrics | 500, 600, 700 | Display titles, pricing numbers, CPU/RAM counters |
| **DM Sans** | Body, Labels, UI Text | 400, 500, 600, 700 | Clean Vietnamese reading experience, paragraphs, form labels |
| **Fira Code** | Monospace, Code, CLI | 400, 500 | SSH commands, IP addresses, ports, logs |

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fira+Code:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap');
```

---

## 3. Component Styling & Glassmorphism

### Primary Button
```css
.btn-primary {
  background: #10B981;
  color: #022C22;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.25);
  transition: all 150ms ease;
  cursor: pointer;
}
.btn-primary:hover {
  background: #34D399;
  transform: translateY(-1px);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}
```

### Infrastructure Glass Card
```css
.infra-card {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.infra-card:hover {
  background: rgba(30, 41, 59, 0.85);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}
```

---

## 4. Anti-Patterns (Do NOT Use)

- ❌ **NO AI Cliche Gradients**: Do NOT use generic purple-to-blue-to-green gradient text everywhere (`from-cyan-400 via-violet-400 to-emerald-400`).
- ❌ **NO Emojis as Icons**: Use Lucide SVG icons (`Server`, `Shield`, `Zap`, `Cpu`, `Terminal`, `Check`).
- ❌ **NO Layout-Shifting Hovers**: Avoid scale transforms that disrupt adjacent layout grid items.
- ❌ **NO Low Contrast Text**: Ensure secondary text is never darker than `#94A3B8`.
- ❌ **NO Missing Feedback**: All Copy-to-clipboard (SSH, QR info) and Action buttons must provide instant visual Toast feedback.
