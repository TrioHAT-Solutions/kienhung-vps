# Task 09: Dashboard Mock

## Status: NOT STARTED
## Priority: P2
## Estimated: 60 min

## Objective
Build a mock VPS dashboard preview showing server status, metrics, and basic controls.

## Steps
1. Create dashboard layout with sidebar
2. Build server status card (running/stopped indicator)
3. Create CPU/RAM/Storage usage meters
4. Implement basic charts (mock data)
5. Build "Mock Mode" banner
6. Create action buttons (Start/Stop/Restart)
7. Add IP address display
8. Build recent activity list
9. Responsive: sidebar → bottom nav on mobile
10. Add mock data loading states

## Dashboard Layout
```
┌─────────────────────────────────────┐
│ Mock Mode Banner                    │
├─────────┬───────────────────────────┤
│ Sidebar │ Server Status Card        │
│ - Stats │ CPU/RAM/Storage Meters    │
│ - Apps  │ Charts                    │
│ - Logs  │ Action Buttons            │
│ - Cfg   │ Recent Activity           │
│         │                           │
└─────────┴───────────────────────────┘
```

## Design Integration
- Sidebar: Dark glassmorphism
- Status: Green dot (running) / Red dot (stopped)
- Meters: Circular progress rings
- Charts: Simple line/area charts
- Banner: Yellow warning style

## Dependencies
- Task 03 (Layout Shell)
- Task 05 (Configurator for context)

## Output
- Dashboard page
- Status components
- Usage meters
- Mock data

## Verification
- [ ] Dashboard layout correct
- [ ] Status indicator works
- [ ] Meters display mock data
- [ ] Mock mode banner visible
- [ ] Responsive layout
- [ ] All buttons have hover states

## Files to Create
- `app/dashboard/page.tsx`
- `components/dashboard/DashboardLayout.tsx`
- `components/dashboard/ServerStatus.tsx`
- `components/dashboard/UsageMeters.tsx`
- `components/dashboard/MockBanner.tsx`
- `components/dashboard/ActionButtons.tsx`
- `components/dashboard/ActivityFeed.tsx`
- `data/mock-metrics.ts`

## Notes
- Use circular SVG for meters
- Mock data: random values within range
- No real API calls
- Clear "Mock Mode" branding