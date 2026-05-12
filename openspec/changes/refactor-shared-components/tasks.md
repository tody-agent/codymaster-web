# Implementation Checklist: Refactor Shared Components

## Phase 1: Foundation — CSS Token Layer
- [ ] 1.1 Extract all CSS custom properties into `base.css` `:root {}` block (from codymaster-landing.css)
- [ ] 1.2 Create `assets/css/shared.css` with footer styles + `.divider` + `.ext-links` styles
- [ ] 1.3 Remove duplicated token/footer CSS from `codymaster-landing.css` and `cm-5w1h-*.css`
- [ ] 1.4 **Verify**: Each page CSS file only contains page-specific rules

## Phase 2: HTML Partials
- [ ] 2.1 Create `assets/partials/` directory
- [ ] 2.2 Create `assets/partials/header.html` — canonical header with all nav links (no active class)
- [ ] 2.3 Create `assets/partials/footer.html` — canonical footer HTML
- [ ] 2.4 **Verify**: Partials are valid HTML fragments (no doctype/html/body wrapping)

## Phase 3: Component Injection JS
- [ ] 3.1 Create `assets/js/components.js` with fetch-and-inject logic
- [ ] 3.2 Implement `data-page` attribute pattern for active nav detection
- [ ] 3.3 Move hamburger logic from `main.js` into `components.js` (runs after injection)
- [ ] 3.4 Add scroll progress bar logic into `components.js`
- [ ] 3.5 **Verify**: Header/footer appears on all pages in browser

## Phase 4: Update All HTML Pages
- [ ] 4.1 `index.html` — replace header/footer HTML with mount divs + add SEO meta
- [ ] 4.2 `codymaster-landing.html` — same as index (they're identical, consolidate)
- [ ] 4.3 `cm-5w1h-01-why.html` — replace + add page-specific SEO meta
- [ ] 4.4 `cm-5w1h-02-what.html` — replace + add page-specific SEO meta
- [ ] 4.5 `cm-5w1h-03-who.html` — replace + add page-specific SEO meta
- [ ] 4.6 `cm-5w1h-04-when.html` — replace + add page-specific SEO meta
- [ ] 4.7 `cm-5w1h-05-where.html` — replace + add page-specific SEO meta
- [ ] 4.8 `cm-5w1h-06-how.html` — replace + add page-specific SEO meta
- [ ] 4.9 **Add** `<link rel="stylesheet" href="assets/css/shared.css">` to all pages
- [ ] 4.10 **Verify**: All pages load, no missing styles

## Phase 5: Full SEO Suite
- [ ] 5.1 Create `assets/og-image.png` (1200×630 social share image)
- [ ] 5.2 Create `llms.txt` in root (AI-readable sitemap)
- [ ] 5.3 Create `sitemap.xml` in root
- [ ] 5.4 Create `robots.txt` in root
- [ ] 5.5 Add JSON-LD `WebSite` schema to `index.html`
- [ ] 5.6 Add JSON-LD `SoftwareApplication` schema to `index.html`
- [ ] 5.7 Add page-specific JSON-LD `Article`/`FAQPage` schema to 5W1H pages
- [ ] 5.8 **Verify**: Google Rich Results Test passes for index.html

## Phase 6: Growth Hacking — Exit Intent Sheet
- [ ] 6.1 Create `assets/js/growth-sheet.js` using cm-growth-hacking bottom-sheet pattern
- [ ] 6.2 Implement exit-intent trigger (mouseleave from viewport top)
- [ ] 6.3 Implement 45s timer fallback trigger
- [ ] 6.4 Add sessionStorage dismiss key (`cm_exit_dismissed`)
- [ ] 6.5 Add install command CTA + "Get Free" button in sheet
- [ ] 6.6 Add `dataLayer.push()` tracking events
- [ ] 6.7 Add `assets/css/growth-sheet.css` for bottom sheet styles
- [ ] 6.8 Include `growth-sheet.js` + CSS in all HTML pages
- [ ] 6.9 **Verify**: Sheet fires on exit intent, respects session dismiss, tracks correctly

## Phase 7: Quality Gate
- [ ] 7.1 Open all 7 pages in browser — visual check
- [ ] 7.2 Test mobile hamburger on each page (375px viewport)
- [ ] 7.3 Check active nav link per page
- [ ] 7.4 Lighthouse audit: Performance, SEO, Accessibility (target: >90 all)
- [ ] 7.5 Validate OG tags at ogp.me
- [ ] 7.6 Validate JSON-LD at search.google.com/test/rich-results
- [ ] 7.7 Test exit-intent sheet on desktop (move mouse to top of viewport)
- [ ] 7.8 Confirm sheet doesn't reshow after dismiss in same session
