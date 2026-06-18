# Project Handoff: ЛСТК-МК Knowledge Base

## Project Status
Knowledge base module completed. 10 SEO-optimized articles generated and integrated into Next.js application. Ready for production deployment.

## What Was Completed

### 10 Knowledge Articles
All articles live in `src/app/knowledge/[slug]/page.tsx`:

| Slug | Title | Category |
|------|-------|----------|
| calculation-krovlja | Расчёт кровли ангара: калькулятор и формулы | Калькуляторы |
| zakon-stroitelstvo | Закон о строительстве ангаров 2024 | Законодательство |
| sravnenie-sendvich | Сравнение сэндвич-панелей | Материалы |
| stoimost-m2 | Стоимость ангара за 1 м² | Цены |
| montazh-svoimi-rukami | Монтаж ЛСТК своими руками | Монтаж |
| otoplenie-gazom | Отопление ангара газом | Инженерия |
| proektirovanie-online | Проектирование ангаров онлайн | Проектирование |
| sravnenie-kirpich | ЛСТК vs кирпич | Сравнение |
| dokumenty-na-stroitelstvo | Документы для строительства | Документы |
| fundament-pod-angar | Фундамент под ангар | Фундамент |

### Article Features
- **SEO metadata** — unique titles, descriptions, keywords
- **JSON-LD schema** — Article structured data for search engines
- **HTML tables** — comparison tables with Tailwind CSS
- **FAQ sections** — 4-5 questions/answers per article
- **CTA blocks** — calculator link + phone call-to-action
- **Navigation** — breadcrumbs back to knowledge base
- **Responsive** — mobile-friendly tables

### Temporary Scripts (can be deleted)
Located in `scripts/` directory:
- `generate-articles.ts`
- `reformat-articles.ts`
- `restore-content.ts`
- `enhance-content.ts`
- `enhance-all-content.ts`
- `apply-enhanced.ts`
- `apply-all-enhanced.ts`

Used for batch content processing. Safe to remove after deployment.

## Current State

### Git Status
- Branch: `main`
- All changes committed and pushed to GitHub
- Latest commit: `fix: replace class with className for React JSX`

### Known Issues (Fixed)
- ✅ TypeScript errors with `article.category` — fixed by using static strings
- ✅ HTML `class` attribute — converted to React `className`
- ✅ JSON-LD schema — using `dangerouslySetInnerHTML`
- ✅ Build errors — resolved

### File Structure
```
src/app/knowledge/
├── page.tsx                    # Knowledge base listing with search/filter
├── [slug]/
│   ├── page.tsx               # Article page with full content
│   ├── content-old.txt        # Backup of original content
│   └── content-enhanced.txt   # Backup of final content
```

## Current Blockers / Known Issues
✅ All resolved — build passes successfully.

## Next Steps (Priority Order)

1. **Deploy to production** — immediate:
   ```bash
   cd /var/www/lstkmk.ru
   git pull origin main
   npm run build
   pm2 delete lstkmk 2>/dev/null || true
   rm -rf /tmp/next-*
   pm2 start ecosystem.config.js --env production
   pm2 save
   ```

2. **Content review** — verify factual accuracy in articles:
   - Prices and calculations
   - Legal references (zakon-stroitelstvo)
   - Technical specifications

3. **Enhancement ideas** — future improvements:
   - Add images/diagrams to articles
   - Implement article search/filter
   - Add "related articles" component
   - Analytics tracking on CTA clicks

## Technical Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Server Components
- JSON-LD structured data

## Styling Guidelines Used
```
Tables:
- overflow-x-auto my-6 (container)
- min-w-full border border-slate-300 (table)
- bg-slate-100 (header)
- border border-slate-300 px-4 py-2 (cells)

Typography:
- prose prose-slate max-w-none (content wrapper)
- h1, h2, h3 for headings
- strong for emphasis

Components:
- Navigation (imported from @/components/Navigation)
- Phosphor icons for UI elements
```

## Content Update Process
If editing articles in the future:
1. Content lives directly in `src/app/knowledge/[slug]/page.tsx`
2. Backup files (content-old.txt, content-enhanced.txt) are for reference
3. Always run `npm run build` locally before pushing
4. Use `className` not `class` in JSX (React requirement)

## Resources
- Local: `/Users/k/CascadeProjects/lstkmk`
- Production: `/var/www/lstkmk.ru`
- GitHub: `faded679/lstkmk`
