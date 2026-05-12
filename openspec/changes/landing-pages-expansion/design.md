# Design: Landing Pages Expansion + Navigation Overhaul

## Context

**Problem:** The current CodyMaster landing site has 7 pages following a 5W1H framework. This covers the basics but lacks competitive proof, non-technical entry points, emotional trust, skill depth, and thought leadership — all of which exist in the old-version/ but haven't been migrated to the new style.

**Goal:** Add 5 new landing pages (Compare, Vibe Coding, Skills, Methodology, Story) and restructure the header navigation with dropdown menus to create a cohesive funnel that drives traffic and conversions.

**Constraints:**
- Pure static HTML/CSS/JS (no framework, no build step)
- Must match existing design system (OKLCH tokens, Newsreader, JetBrains Mono)
- CSS-only dropdowns (no new JS dependencies)
- Single tabbed page for Compare (not separate sub-pages)
- English only
- Cross-link to how-to/ guides from relevant pages

---

## Architecture Overview

### File Structure (new files only)

```
LandingPage/
├── assets/
│   ├── css/
│   │   ├── compare.css          # NEW — Compare page styles
│   │   ├── vibe-coding.css      # NEW — Vibe Coding page styles
│   │   ├── skills.css           # NEW — Skills page styles
│   │   ├── methodology.css      # NEW — Methodology page styles
│   │   ├── story.css            # NEW — Story page styles
│   │   └── base.css             # MODIFY — Add dropdown menu styles
│   ├── js/
│   │   └── components.js        # MODIFY — Add data-nav mappings for new pages
│   └── partials/
│       └── header.html          # MODIFY — Dropdown menu structure
├── compare.html                 # NEW
├── vibe-coding.html             # NEW
├── skills.html                  # NEW
├── methodology.html             # NEW
├── story.html                   # NEW
├── the-problem.html             # MODIFY — Update cross-links
├── the-solution.html            # MODIFY — Update cross-links
├── for-teams.html               # MODIFY — Update cross-links
├── demo.html                    # MODIFY — Update cross-links
├── workflow.html                # MODIFY — Update cross-links
├── get-started.html             # MODIFY — Update cross-links
├── index.html                   # MODIFY — Update cross-links
├── sitemap.xml                  # MODIFY — Add new page URLs
└── openspec/changes/landing-pages-expansion/
    ├── design.md                # THIS FILE
    └── tasks.md                 # Implementation checklist
```

---

## Component Design

### 1. Header Dropdown Menu

**Current nav (flat):**
```
Problem | Solution | Demo | Workflow | Course | Guide | GitHub | [Get Free]
```

**New nav (dropdown):**
```
Problem ▾ | Solution ▾ | Compare | Demo | Course | Guide | GitHub | [Get Free]
```

**Dropdown structure — CSS-only using `:hover` + `:focus-within`:**

```html
<!-- Desktop dropdown pattern -->
<div class="cm-dropdown">
  <a href="/the-problem.html" data-nav="why" class="cm-dropdown-toggle">
    Problem <span class="cm-dropdown-arrow">▾</span>
  </a>
  <div class="cm-dropdown-menu">
    <a href="/the-problem.html" data-nav="why">Why CodyMaster</a>
    <a href="/story.html" data-nav="story">The Story</a>
    <a href="/vibe-coding.html" data-nav="vibe">Vibe Coding Guide</a>
  </div>
</div>
```

**CSS approach:**
```css
.cm-dropdown { position: relative; }
.cm-dropdown-menu {
  position: absolute; top: 100%; left: 0;
  opacity: 0; visibility: hidden; transform: translateY(-4px);
  transition: all 0.15s ease;
  min-width: 200px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  box-shadow: 0 8px 24px oklch(0% 0 0 / 0.08);
  padding: 6px 0;
  z-index: 200;
}
.cm-dropdown:hover .cm-dropdown-menu,
.cm-dropdown:focus-within .cm-dropdown-menu {
  opacity: 1; visibility: visible; transform: translateY(0);
}
.cm-dropdown-menu a {
  display: block; padding: 8px 16px;
  font-size: 14px; color: var(--fg);
  border-radius: 4px; margin: 0 6px;
}
.cm-dropdown-menu a:hover {
  background: var(--accent-soft); text-decoration: none;
}
```

**Mobile menu — expandable accordion:**
```html
<div class="cm-mobile-menu" data-mobile-menu>
  <div class="cm-mobile-group">
    <button class="cm-mobile-toggle" data-mobile-toggle>Problem</button>
    <div class="cm-mobile-sub">
      <a href="/the-problem.html">Why CodyMaster</a>
      <a href="/story.html">The Story</a>
      <a href="/vibe-coding.html">Vibe Coding Guide</a>
    </div>
  </div>
  <!-- ... -->
</div>
```

**Active state logic:**
- `data-page="why"` → highlights "Problem" dropdown trigger
- `data-page="story"` → highlights "Problem" dropdown trigger + "The Story" sub-item
- `data-page="vibe"` → highlights "Problem" dropdown trigger + "Vibe Coding" sub-item
- `data-page="what"` → highlights "Solution" dropdown trigger
- `data-page="skills"` → highlights "Solution" dropdown trigger + "Skill Library" sub-item
- `data-page="methodology"` → highlights "Solution" dropdown trigger + "Methodology" sub-item
- `data-page="compare"` → highlights "Compare" (standalone, no dropdown)

---

### 2. Page Template Pattern

Every new page follows the existing pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta, OG, canonical, fonts -->
  <link rel="stylesheet" href="assets/css/base.css">
  <link rel="stylesheet" href="assets/css/shared.css">
  <link rel="stylesheet" href="assets/css/{page-name}.css">
  <link rel="stylesheet" href="assets/css/growth-sheet.css">
</head>
<body data-page="{page-id}">
  <div id="cm-header-mount"></div>

  <!-- Hero section -->
  <section class="section">
    <div class="container">
      <span class="section-label">{label}</span>
      <h1 class="section-title">{headline}</h1>
      <p class="section-sub">{subheadline}</p>
    </div>
  </section>

  <!-- Content sections... -->

  <!-- Cross-links -->
  <section class="section bg-warm">
    <div class="container">
      <span class="section-label">What's Next</span>
      <h2 class="section-title">Keep exploring</h2>
      <div class="next-grid">
        <!-- 3 cross-link cards -->
      </div>
    </div>
  </section>

  <div id="cm-footer-mount"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/growth-sheet.js"></script>
</body>
</html>
```

---

### 3. Page Specifications

#### 3a. `/compare.html` — Competitive Comparison

**`data-page="compare"`**

**Sections:**
1. **Hero** — "See How CodyMaster Stacks Up" — honest, balanced positioning
2. **Tab bar** — 6 tabs: Lovable | Bolt | Replit | Cursor | AI Studio | Scrum
3. **Tab content** (one visible at a time, CSS `:target` or JS toggle):
   - Side-by-side feature comparison table
   - "Where each wins" — honest pros for both
   - Pricing comparison (tool's price vs CodyMaster's $0)
   - "Best combo" recommendation
   - Verdict card
4. **Universal comparison** — Quick-reference table showing all 6 tools at once (compact)
5. **Testimonial/social proof strip** — "Switched from X to CodyMaster" quotes
6. **Cross-links** → the-problem.html, skills.html, demo.html

**Tab switching:** Lightweight JS (20 lines) toggles `.active` on tab buttons and `.tab-panel` visibility. No framework needed.

**CSS variables for comparison tables:**
```css
.compare-table { ... }
.compare-table .win { color: var(--green); }
.compare-table .lose { color: var(--muted); }
.compare-table .neutral { color: var(--fg-soft); }
```

---

#### 3b. `/vibe-coding.html` — Non-Technical Entry

**`data-page="vibe"`**

**Sections:**
1. **Hero** — "You Don't Need to Know Code. You Just Need to Know How to Talk."
2. **What is Vibe Coding** — Analogy: "You are the director. AI is the film crew." + 5-step visual flow
3. **How It Works** — Step-by-step: Chat → AI Plans → AI Designs → AI Codes → Deploy (pipeline visual)
4. **Prompt Library** — 6 copy-paste prompt cards with copy buttons:
   - Build a website
   - Create a dashboard
   - Fix a bug
   - Booking app
   - Content marketing
   - Documentation
5. **Cost Comparison** — Before/After table: Agency ($30K-50K) vs CodyMaster ($0), 3-6 months vs days
6. **Common Mistakes** — 5 anti-patterns with "Do this instead" cards
7. **7 Tips** — Grid of actionable tips
8. **FAQ** — Accordion for non-technical concerns (Is it really free? What if AI makes mistakes? Do I need to learn anything?)
9. **CTA strip** — "Start Building — No Code Required" → get-started.html
10. **Cross-links** → the-problem.html, methodology.html, get-started.html

**Copy button JS:**
```js
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
});
```

---

#### 3c. `/skills.html` — Skill Library

**`data-page="skills"`**

**Sections:**
1. **Hero** — "34+ Dedicated AI Experts. One Install." — search bar + category filter pills
2. **Category filters** — Pill buttons: All | Ideation | Design | Content | Code | Security | Deploy | Ops
3. **Skill grid** — Cards with:
   - Skill name (mono font)
   - Category tag
   - 1-line description
   - "When to use" on hover/expand
   - Example prompt snippet
4. **Skill Chains** — 3 visual flow diagrams showing how skills connect:
   - Feature Development chain (brainstorm → plan → tdd → review → deploy)
   - Bug Fix chain (debug → tdd → quality-gate)
   - Content Launch chain (content-factory → ux-master → ads-tracker)
5. **"Start with Just 3"** — Onboarding section: cm-start, cm-planning, cm-continuity
6. **Cross-links** → the-solution.html, methodology.html, demo.html

**Search/filter JS (~40 lines):**
```js
// Filter skills by category
// Search by name + description
// Show/hide cards based on filter
```

**Skill data:** Embedded as a JS array of objects (name, category, description, whenToUse, example). ~34 entries. Can be extracted from old-version/skills.html data.

---

#### 3d. `/methodology.html` — AI-First Thought Leadership

**`data-page="methodology"`**

**Sections:**
1. **Hero** — "The Old Way: 8 People, 6 Months, $500K. The New Way: You, 2 Weeks, $0."
2. **"Agile is Dead"** — Provocative thesis with supporting data
3. **Scrum vs CodyMaster** — Detailed comparison table:
   - Team size, cost, time-to-market, quality, flexibility
   - Role-by-role transformation cards (PM → Strategist, Dev → Architect, QA → Champion)
4. **The AI-First Methodology** — 6 core principles:
   - Memory (CONTINUITY.md)
   - Planning (cm-planning)
   - TDD (cm-tdd)
   - Quality Gates (cm-quality-gate)
   - Parallel Execution (TRIZ)
   - Safe Deploy (8-gate pipeline)
5. **TRIZ-Parallel Demo** — Visual: Raw parallel (45min, conflicts) vs TRIZ-parallel (12min, 0 conflicts)
6. **Stats strip** — 12x faster | 99% cost reduction | 1 person = full team | 34+ AI skills
7. **Manifesto** — Pull quote: "It's not about replacing people. It's about setting them free."
8. **Cross-links** → skills.html, story.html, get-started.html

---

#### 3e. `/story.html` — Founder Narrative

**`data-page="story"`**

**Sections:**
1. **Hero** — "A PM's Journey from Chaos to System"
2. **Timeline** — 7 chapters as alternating left/right cards:
   1. "AI Gave Me 100 Hands" — discovery
   2. "Design Chaos" — first struggles
   3. "The Week AI Deleted Everything" — turning point
   4. "The Lazy Person's Philosophy" — system thinking
   5. "Great Products Nobody Knows About" — marketing gap
   6. "Mission Control for 100 Hands" — CodyMaster born
   7. "Gratitude" — community
3. **Pull quote** — "CodyMaster" = "Code Đi" (Vietnamese: "Go code!")
4. **Philosophy** — "Code like an expert" — discipline, testing, planning, quality
5. **Stats** — 34+ skills | 8+ agents | 6 months of building | 12 products shipped
6. **CTA** — "Join the Movement" → get-started.html
7. **Cross-links** → for-teams.html, demo.html, vibe-coding.html

---

### 4. Cross-Link Integration Map

**Updated cross-links for EXISTING pages:**

| Existing Page | Old Cross-link 1 | Old Cross-link 2 | Old Cross-link 3 | NEW Cross-link 1 | NEW Cross-link 2 | NEW Cross-link 3 |
|---|---|---|---|---|---|---|
| the-problem.html | the-solution | for-teams | demo | **compare.html** | the-solution | **vibe-coding.html** |
| the-solution.html | (no cross-links section) | — | — | **skills.html** | for-teams | **compare.html** |
| for-teams.html | (no cross-links section) | — | — | **story.html** | workflow | **compare.html** |
| demo.html | the-problem | the-solution | get-started | the-problem | **skills.html** | get-started |
| workflow.html | the-problem | the-solution | demo | the-problem | **methodology.html** | get-started |
| get-started.html | (needs checking) | — | — | **vibe-coding.html** | demo | **skills.html** |

---

### 5. Footer Update

Add new pages to footer:

```html
<div class="footer-col">
  <h4>Product</h4>
  <a href="/the-problem.html">Why CodyMaster</a>
  <a href="/the-solution.html">The System</a>
  <a href="/compare.html">Compare</a>
  <a href="/skills.html">Skills</a>
  <a href="/get-started.html">Get Started</a>
</div>
<div class="footer-col">
  <h4>Learn</h4>
  <a href="/vibe-coding.html">Vibe Coding</a>
  <a href="/methodology.html">AI-First Method</a>
  <a href="/story.html">Our Story</a>
  <a href="/demo.html">Demo</a>
  <a href="/workflow.html">Workflow</a>
</div>
<div class="footer-col">
  <h4>Community</h4>
  <a href="https://github.com/tody-agent/codymaster" target="_blank">GitHub</a>
  <a href="https://github.com/tody-agent/codymaster/issues" target="_blank">Issues</a>
  <a href="https://github.com/tody-agent/codymaster/blob/main/LICENSE" target="_blank">License (ISC)</a>
</div>
```

---

### 6. Sitemap Update

Add to `sitemap.xml`:
```xml
<url><loc>https://cody.todyle.com/compare.html</loc></url>
<url><loc>https://cody.todyle.com/vibe-coding.html</loc></url>
<url><loc>https://cody.todyle.com/skills.html</loc></url>
<url><loc>https://cody.todyle.com/methodology.html</loc></url>
<url><loc>https://cody.todyle.com/story.html</loc></url>
```

---

## Verification

### Per-page verification:
- [ ] Loads base.css + shared.css + page-specific.css + growth-sheet.css
- [ ] `<body data-page="X">` matches PAGE_NAV_MAP in components.js
- [ ] Header/footer injected correctly via components.js
- [ ] Active nav state highlights correct dropdown item
- [ ] Mobile menu accordion works (dropdown toggle opens/closes)
- [ ] Cross-links section links to 3 correct pages
- [ ] Responsive at 900px, 768px, 600px breakpoints
- [ ] No console errors
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, SEO)

### Global verification:
- [ ] Dropdown menus work on desktop (hover) and mobile (click toggle)
- [ ] All existing pages still work (no broken nav)
- [ ] Footer shows all pages organized in 3 columns
- [ ] sitemap.xml includes all new URLs
- [ ] Growth sheet (exit intent) fires on new pages
- [ ] GA4 tracking fires on new pages
