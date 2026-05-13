# CONTINUITY.md — CodyMaster Two-Zone Site
Updated: 2026-05-13 | Session: Phase A COMPLETE

## Current State: Phase A Done ✅

### Completed This Session
- [x] A1: index.html — monolith refactored, mount divs, components.js, data-page="home"
- [x] A2: the-problem.html — new page with problem grid + roots + founder story
- [x] A3: the-solution.html — team grid + compare table + phases + design pipeline
- [x] A4: compare.html — tab UI (Cursor/Claude/Lovable/Bolt/AI Studio) with JS filter
- [x] A5: skills.html — 30+ skill cards, filter by category (7 categories)
- [x] A6: get-started.html — profile selector, steps, platform chips, copy CLI
- [x] CSS: assets/css/pages/{shared,the-problem,the-solution,compare,skills,get-started}.css
- [x] Bridge B1: header.html — Docs link uncommented → /docs/
- [x] Bridge B2: VitePress custom.css — brand tokens + JetBrains Mono + bridge CTA
- [x] Visual QA: All 6 pages pass (header, footer, content, interactive elements)

### Pending — Phase B (Deploy)
- [ ] C1: Build VitePress docs (`npm run build:docs`)
- [ ] C2: Deploy to Cloudflare (`npm run deploy`)
- [ ] C3: Verify live URLs: cody.todyle.com + cody.todyle.com/docs/

### Pages Inventory
| File | Route | Status |
|------|-------|--------|
| index.html | / | ✅ |
| the-problem.html | /the-problem | ✅ |
| the-solution.html | /the-solution | ✅ |
| compare.html | /compare | ✅ |
| skills.html | /skills | ✅ |
| get-started.html | /get-started | ✅ |
| docs/ → VitePress | /docs/ | Pending deploy |

### Key Decisions
- `data-page` attribute on body → active nav highlighting (already handled by components.js)
- `/docs/` path — VitePress base stays at `/docs/` for CF Pages compatibility
- No `demo.html` yet — linked in header but 404 (defer to next sprint)

### Deploy Command
```bash
npm run build:docs && rm -rf docs && cp -r dist/docs docs && npx wrangler pages deploy . --project-name=codymaster-landing
```


## Active Goal
Build two-zone site: 7 HTML landing pages (cody.todyle.com) + VitePress docs (cody.todyle.com/docs) with bidirectional navigation and shared design tokens.

## Current Phase

## Plan Location
`openspec/changes/two-zone-site/` (design.md + tasks.md)

## Key Decisions
1. VitePress `base: '/docs/'` MUST NOT change (Cloudflare Pages deploy)
2. All HTML pages use `components.js` partial injection — NOT inline header/footer
3. `index.html` = refactored `codymaster-landing.html` (strip inline header/footer, add mount divs)
4. 3 phases: A (7 HTML pages) → B (cross-zone bridge) → C (cleanup + deploy)

## Next Actions (First 3 Tasks)
1. Copy `codymaster-landing.html` → `index.html`
2. Replace inline `<header>` block with `<div id="cm-header-mount"></div>`  
3. Replace inline `<footer>` block with `<div id="cm-footer-mount"></div>`

## Pages to Create
| File | data-page | Content Source |
|------|-----------|---------------|
| `index.html` | home | codymaster-landing.html (refactored) |
| `the-problem.html` | why | #problem, #roots, #story sections |
| `the-solution.html` | what | #solution, #different, #tour sections |
| `compare.html` | compare | New — tool comparison tabs |
| `skills.html` | skills | New — skill grid with search/filter |
| `demo.html` | how | #demo, #scenarios sections |
| `get-started.html` | started | #install, #quickstart sections |

## CSS Design Tokens (Landing)
```
--accent: oklch(64% 0.13 28)       /* orange-red */
--accent-hover: oklch(58% 0.14 28)
--font-display: 'Newsreader', Georgia, serif
--font-body: system-ui, sans-serif
--font-mono: 'JetBrains Mono', monospace
```

## VitePress Token Sync (Phase B)
Map to VitePress vars in `docs-source/.vitepress/theme/custom.css`:
- `--vp-c-brand-1` → `oklch(64% 0.13 28)`
- `--vp-font-family-mono` → JetBrains Mono

## Current Phase
✅ COMPLETE — all 8 phases done

## Summary of Changes

### New Files (5 pages + 5 CSS)
- `compare.html` + `compare.css` — Competitive comparison (6 tabs: Lovable, Bolt, Replit, Cursor, AI Studio, Scrum)
- `vibe-coding.html` + `vibe-coding.css` — Non-technical entry point (vibe coding guide)
- `skills.html` + `skills.css` — Browsable skill library (34+ skills with search/filter)
- `methodology.html` + `methodology.css` — AI-First thought leadership (Agile vs CodyMaster)
- `story.html` + `story.css` — Founder narrative (7-chapter timeline)

### Modified Files
- `assets/partials/header.html` — Dropdown menus (Problem ▾, Solution ▾, Compare, Demo)
- `assets/css/base.css` — Dropdown + mobile accordion styles
- `assets/js/components.js` — New page nav mappings + mobile accordion logic
- `assets/partials/footer.html` — 3-column footer (Product, Learn, Community)
- `sitemap.xml` — 5 new URLs added
- `the-problem.html` — Cross-links updated
- `the-solution.html` — Cross-links updated
- `for-teams.html` — Cross-links updated
- `demo.html` — Cross-links updated
- `workflow.html` — Cross-links updated
- `get-started.html` — Cross-links updated

### Navigation Structure
```
Header: Problem ▾ | Solution ▾ | Compare | Demo | Course | Guide | GitHub | [Get Free]
Problem ▾: Why CodyMaster, The Story, Vibe Coding Guide
Solution ▾: The System, Skill Library, AI-First Methodology
```

### Funnel Flow
- Awareness → Problem / Compare / Vibe Coding
- Interest → Solution / Skills / Methodology
- Trust → Story / Demo / For Teams
- Desire → Workflow / Get Started
- Action → Install / GitHub

## Next Steps
- Run `npx serve .` to verify locally
- Check all pages render correctly
- Test dropdown on desktop + mobile accordion
- Verify cross-links don't 404
- Run Lighthouse audit on new pages
- Deploy when ready
