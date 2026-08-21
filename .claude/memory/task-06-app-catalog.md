# Task 06: 1-Click App Marketplace

## Status: NOT STARTED
## Priority: P1
## Estimated: 60 min

## Objective
Build the 1-Click App Marketplace with search, filtering, and app details.

## Steps
1. Create App Marketplace page layout
2. Build app grid with search bar
3. Implement filter by category (Web, DB, DevOps, Security)
4. Create app card component with icon, name, description
5. Add "1-Click Install" button
6. Create app detail modal/sheet
7. Implement search by name
8. Add category tag badges
9. Responsive: grid → list on mobile
10. Mock data for 20+ apps

## Design Integration
- Grid: CSS Grid 3-col → 2-col → 1-col
- Cards: Glassmorphism with icon
- Search: Input with magnifier icon
- Tags: Badge components (colored by category)
- Hover: Scale (1.02) + border glow

## App Categories
- **Web Server**: Nginx, Apache, Caddy
- **Database**: MySQL, PostgreSQL, MongoDB, Redis
- **DevOps**: Docker, Portainer, GitLab, Jenkins
- **Security**: Nginx Proxy Manager, Certbot
- **CMS**: WordPress, Ghost, Strapi
- **Monitoring**: Grafana, Prometheus, Uptime Kuma

## Dependencies
- Task 03 (Layout Shell)

## Output
- App Marketplace section/page
- App card components
- Search & filter functionality
- App detail modal

## Verification
- [ ] Grid displays correctly
- [ ] Search filters apps
- [ ] Category filters work
- [ ] 1-Click Install button visible
- [ ] Responsive layout

## Files to Create
- `components/sections/AppCatalog.tsx`
- `components/app/AppCard.tsx`
- `components/app/AppGrid.tsx`
- `components/app/AppSearch.tsx`
- `components/app/AppDetailSheet.tsx`
- `data/apps.ts` (mock data)

## Notes
- Use Lucide icons for app categories
- Lazy load images if using real icons
- Consider infinite scroll for large catalogs