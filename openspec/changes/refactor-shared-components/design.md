# Design: Refactor Shared Components — Header, Footer, CSS + SEO + Growth Hacking

## Status: APPROVED ✅

## Context & Problem

The LandingPage suite has **7 HTML pages** (index.html, codymaster-landing.html + 6 cm-5w1h-*.html). Each page contains **full duplicate copies** of:

1. **Header HTML** (~33 lines, identical across all 7 pages except the `class="active"` attribute on current nav link)
2. **Footer HTML** (~28 lines, 100% identical across all 7 pages)
3. **CSS reset/vars** — each page loads `base.css` (header/nav shared styles) but NO shared token layer for colors, typography, footer

**Missing SEO fundamentals** (none of the 5W1H pages have):
- `<meta name="description">`
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card meta tags
- Canonical `<link rel="canonical">`
- `<meta name="robots">` 
- Structured data (JSON-LD: `WebSite` + `SoftwareApplication`)
- AI-readable hints (`<meta name="keywords">`, llms.txt sitemap)

**Missing Growth Hacking** (no cross-page engagement triggers):
- Exit-intent bottom sheet ("Get Free" CTA before user leaves)
- Progress/breadcrumb bar for 5W1H journey continuity
- Cross-page reading progress indicator

## Proposed Architecture

### Option A: HTML `<template>` + JS injection (Recommended ✅)
- Create `assets/partials/header.html` and `assets/partials/footer.html` as standalone snippets
- A tiny `assets/js/components.js` fetches and injects them via `fetch()` at DOMContentLoaded
- Per-page active state set via `<body data-page="why">` → JS applies `.active` class
- **Pros**: Zero build tool, pure static, works with Cloudflare Pages as-is, easy to maintain 1 file
- **Cons**: One extra round-trip fetch (negligible, cached after first page)

### Option B: Python/shell build script that pre-processes HTML files
- `refactor.py` (already exists!) compiles partials into each HTML
- **Pros**: Zero JS, zero fetch, pure HTML delivered
- **Cons**: Must re-run script after any header/footer change — easy to forget

### Option C: Full SSG (Astro/Eleventy)
- Too heavy for this project scope, reject

**Decision: Option A** — JS injection. Matches existing `main.js` pattern, no build step required, instant dev workflow.

## Proposed Changes

### 1. New Files
```
assets/
├── partials/
│   ├── header.html          ← canonical header markup
│   └── footer.html          ← canonical footer markup
├── css/
│   ├── base.css             ← EXTENDED: add CSS custom properties (token layer)
│   ├── shared.css           ← NEW: footer styles + section utilities
│   └── [page].css           ← unchanged (page-specific only)
└── js/
    ├── main.js              ← EXTENDED: hamburger + active nav + scroll progress
    ├── components.js         ← NEW: fetch & inject header/footer partials
    └── growth-sheet.js       ← NEW: exit-intent bottom sheet (cm-growth-hacking)
```

### 2. Each HTML Page — Reduced to Skeleton
Replace full header/footer HTML with:
```html
<!-- Header injected by components.js -->
<div id="cm-header-mount"></div>

<!-- ...page content... -->

<!-- Footer injected by components.js -->
<div id="cm-footer-mount"></div>
```

### 3. Shared `<head>` Template Pattern
Each page's `<head>` gets full SEO suite:
```html
<meta name="description" content="[page-specific]">
<meta name="keywords" content="CodyMaster, AI coding agent, vibe coding, ...">
<link rel="canonical" href="https://codymaster.todyle.com/[page].html">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[Title] — CodyMaster">
<meta property="og:description" content="[page-specific]">
<meta property="og:image" content="https://codymaster.todyle.com/assets/og-image.png">
<meta property="og:url" content="https://codymaster.todyle.com/[page].html">
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title] — CodyMaster">
<meta name="twitter:description" content="[page-specific]">
<!-- JSON-LD -->
<script type="application/ld+json">...</script>
```

### 4. Global CSS Token Layer (base.css extension)
Add missing tokens currently hardcoded across pages:
```css
:root {
  /* Existing (already in codymaster-landing.css, NOT in base.css) */
  --bg: oklch(98% 0.012 70);
  --fg: oklch(22% 0.015 50);
  --fg-soft: oklch(42% 0.015 50);
  --muted: oklch(58% 0.012 50);
  --accent: oklch(64% 0.13 28);
  --accent-soft: oklch(64% 0.13 28 / 0.08);
  --surface: oklch(96% 0.018 70);
  --border: oklch(88% 0.02 70);
  --max-w: 1160px;
  --font-display: 'Newsreader', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  /* NEW tokens */
  --green: oklch(62% 0.14 155);
  --warm-bg: oklch(95% 0.02 60);
}
```

### 5. Growth Hacking: Exit-Intent Bottom Sheet
A lightweight `growth-sheet.js` implementing:
- **Trigger**: mouseleave from viewport (exit intent) OR 45s on page
- **Content**: "Before you leave…" CTA with install command + "Get Free" link
- **Respect**: sessionStorage dismissal — shows max 1x per session
- **Tracking**: `dataLayer.push()` events for GTM compatibility

### 6. shared.css — Footer + Common Section Styles
Extract footer CSS from `codymaster-landing.css` into `shared.css`, remove from page CSS files.

## Verification

| Check | Method |
|-------|--------|
| All 7 pages load header/footer | Open in browser, check DevTools Network |
| Active nav link correct per page | Each page shows correct `.active` class |
| Mobile hamburger works | Resize to 375px, click hamburger |
| Footer links not broken | Click all footer links |
| SEO meta tags present | `curl -s [url] \| grep "<meta"` |
| OG image renders | ogp.me validator |
| JSON-LD valid | Google Rich Results Test |
| Exit-intent sheet fires | DevTools console: watch dataLayer |
| No flash of header missing | LCP timing in Lighthouse |
