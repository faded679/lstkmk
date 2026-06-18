# Project Handoff: LSTKM Knowledge Base Articles

## Summary
Successfully integrated Wellflow AI (Claude Opus 4.8) to generate 10 SEO-optimized articles for the LSTKM (ЛСТК-МК) construction company website. All articles now have proper structure with tables, FAQ sections, and CTA blocks.

## What Was Accomplished

### Articles Created (10 total)
All articles located in `src/app/knowledge/[slug]/page.tsx`:

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

### Key Features Added
- **SEO metadata** with titles, descriptions, keywords
- **JSON-LD schema** markup for search engines
- **HTML tables** with Tailwind styling for comparisons/data
- **FAQ sections** with 4-5 Q&A per article
- **CTA blocks** with calculator link and phone number
- **Navigation** and breadcrumbs

### Wellflow Integration
- API endpoint: `https://api.wellflow.dev/v1/messages`
- Model: `claude-opus-4.8`
- File: `src/lib/wellflow.ts`

### Scripts Created
- `scripts/generate-articles.ts` — initial article generation
- `scripts/reformat-articles.ts` — template reformatting
- `scripts/restore-content.ts` — content restoration
- `scripts/enhance-content.ts` — single article enhancement
- `scripts/enhance-all-content.ts` — batch enhancement via Wellflow
- `scripts/apply-enhanced.ts` — apply enhanced content to pages
- `scripts/apply-all-enhanced.ts` — batch apply all enhanced content

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
├── page.tsx                    # Knowledge base listing
├── [slug]/
│   ├── page.tsx               # Article page (enhanced content)
│   ├── content-old.txt        # Original Wellflow output
│   └── content-enhanced.txt   # Enhanced version with tables/FAQ
```

## Next Steps / TODO

1. **Server deployment** — pull latest changes and build:
   ```bash
   cd /var/www/lstkmk.ru
   git pull origin main
   npm run build
   pm2 delete lstkmk 2>/dev/null || true
   rm -rf /tmp/next-*
   pm2 start ecosystem.config.js --env production
   pm2 save
   ```

2. **Content quality check** — manually review articles for:
   - Factual accuracy
   - Brand voice consistency
   - Missing images/charts if needed

3. **SEO optimization** — verify:
   - Meta descriptions are unique
   - Keywords are relevant
   - Schema markup validates

4. **Performance** — check:
   - Page load speeds
   - Mobile responsiveness
   - Table overflow on small screens

## Important Notes for Next Agent

### Working with Wellflow
- Use `scripts/enhance-all-content.ts` for batch content improvements
- Use `scripts/apply-all-enhanced.ts` to apply changes to page.tsx files
- Wellflow API key is in `src/lib/wellflow.ts` (already configured)

### Content Updates
- Always backup to `content-old.txt` before major changes
- Enhanced versions go to `content-enhanced.txt`
- Final content is embedded directly in `page.tsx`

### Build Process
- Next.js with TypeScript
- Tailwind CSS for styling
- Check `npm run build` before committing
- Fix any TypeScript errors immediately

### Styling Conventions
- Use Tailwind classes: `prose`, `prose-slate`, `overflow-x-auto`, `my-6`
- Tables use: `border`, `border-slate-300`, `bg-slate-100`, `px-4`, `py-2`
- Always use `className` not `class` in JSX

## Contact / Resources
- Project root: `/Users/k/CascadeProjects/lstkmk`
- Server path: `/var/www/lstkmk.ru`
- Repo: `https://github.com/faded679/lstkmk`
- Wellflow API docs: https://api.wellflow.dev
