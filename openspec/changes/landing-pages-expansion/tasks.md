# Implementation Checklist — Landing Pages Expansion

**Estimated total:** ~8-10 hours across 8 phases
**Dependencies:** Each phase depends on the previous one (sequential)
**Verification:** Run `npx serve .` after each phase to verify locally

---

## Phase 1: Header Dropdown + Mobile Menu (~1.5h)

### 1.1 — Modify `assets/partials/header.html`
- [ ] Replace flat `<nav class="cm-nav">` with dropdown structure
- [ ] Wrap "Problem" links in `.cm-dropdown` container with trigger + menu
- [ ] Wrap "Solution" links in `.cm-dropdown` container with trigger + menu
- [ ] Keep "Demo" as standalone link (no dropdown)
- [ ] Add "Compare" as standalone link
- [ ] Keep "Course" and "Guide" as external links
- [ ] Replace flat mobile menu with accordion groups
- [ ] Add `.cm-mobile-group` + `.cm-mobile-toggle` + `.cm-mobile-sub` structure
- [ ] Test: header renders without JS (CSS-only fallback)

### 1.2 — Modify `assets/css/base.css`
- [ ] Add `.cm-dropdown` positioning styles
- [ ] Add `.cm-dropdown-menu` (hidden by default, absolute positioned)
- [ ] Add hover/focus-within reveal transition (opacity + visibility + transform)
- [ ] Add `.cm-dropdown-arrow` rotation on open
- [ ] Add `.cm-mobile-group` / `.cm-mobile-toggle` / `.cm-mobile-sub` accordion styles
- [ ] Add active states for dropdown parent (when child page is active)
- [ ] Test: dropdown appears on hover, disappears on leave, transitions smooth

### 1.3 — Modify `assets/js/components.js`
- [ ] Add new entries to `PAGE_NAV_MAP`: `story`, `vibe`, `skills`, `methodology`, `compare`
- [ ] Map `story` → `why` (parent), `vibe` → `why` (parent)
- [ ] Map `skills` → `what` (parent), `methodology` → `what` (parent)
- [ ] Map `compare` → `compare` (standalone)
- [ ] Add mobile accordion toggle logic (click `.cm-mobile-toggle` → toggle `.open` on next `.cm-mobile-sub`)
- [ ] Ensure `applyActiveNav` works for both parent trigger and child items
- [ ] Test: correct nav item highlighted on each page; mobile accordion opens/closes

### Phase 1 Verification
- [ ] Desktop: hover "Problem" → dropdown with 3 items appears
- [ ] Desktop: hover "Solution" → dropdown with 3 items appears
- [ ] Desktop: "Demo" and "Compare" are standalone links
- [ ] Mobile: hamburger opens → accordion groups visible
- [ ] Mobile: tap "Problem" → expands sub-items
- [ ] Active state: visiting `/story.html` highlights "Problem" dropdown
- [ ] All existing pages still work (no broken nav)

---

## Phase 2: Compare Page (~1.5h)

### 2.1 — Create `compare.html`
- [ ] Boilerplate: DOCTYPE, head (meta, OG, canonical, fonts, CSS), body with `data-page="compare"`
- [ ] Hero section: "See How CodyMaster Stacks Up" + sub
- [ ] Tab bar: 6 buttons (Lovable, Bolt, Replit, Cursor, AI Studio, Scrum)
- [ ] Tab panels: 6 `.tab-panel` divs, first visible, rest hidden
- [ ] Each panel: comparison table, "Where each wins", pricing, "Best combo", verdict
- [ ] Universal comparison table (all 6 tools compact view)
- [ ] Social proof strip (testimonial quotes)
- [ ] Cross-links section → the-problem.html, skills.html, demo.html
- [ ] Footer mount + scripts

### 2.2 — Create `compare.css`
- [ ] Tab bar styles (flex, pill buttons, active state)
- [ ] Tab panel show/hide
- [ ] Comparison table styles (alternating rows, win/lose/neutral colors)
- [ ] Verdict card styles
- [ ] Responsive: stack tables on mobile, scroll horizontal if needed

### 2.3 — Add tab switching JS (inline or in compare.css → JS needed)
- [ ] ~20 lines: click tab → add `.active` to button, show matching panel
- [ ] Default: first tab active on load
- [ ] URL hash support: `#lovable` → auto-selects that tab

### Phase 2 Verification
- [ ] All 6 tabs switch correctly
- [ ] Comparison tables readable on desktop and mobile
- [ ] Cross-links render correctly
- [ ] No console errors
- [ ] Responsive at 900px, 768px, 600px

---

## Phase 3: Vibe Coding Page (~1.5h)

### 3.1 — Create `vibe-coding.html`
- [ ] Boilerplate with `data-page="vibe"`
- [ ] Hero section: "You Don't Need to Know Code..."
- [ ] "What is Vibe Coding" section with director/crew analogy
- [ ] 5-step visual flow (pipeline steps with arrows)
- [ ] Prompt Library: 6 cards with prompt text + copy button (`data-copy="..."`)
- [ ] Cost Comparison: Before/After table (agency vs CodyMaster)
- [ ] Common Mistakes: 5 cards with mistake + fix
- [ ] 7 Tips grid
- [ ] FAQ accordion (5-6 questions)
- [ ] CTA strip → get-started.html
- [ ] Cross-links → the-problem.html, methodology.html, get-started.html

### 3.2 — Create `vibe-coding.css`
- [ ] Pipeline/flow visual styles (step cards with connecting arrows)
- [ ] Prompt card styles (dark bg, mono font, copy button)
- [ ] Cost comparison table styles
- [ ] Mistake/fix card pairs
- [ ] FAQ accordion styles (expand/collapse)
- [ ] Responsive: single column on mobile

### 3.3 — Add copy + accordion JS (inline, ~30 lines)
- [ ] Copy button: `navigator.clipboard.writeText()`, show "Copied!" feedback
- [ ] FAQ accordion: click question → toggle answer visibility

### Phase 3 Verification
- [ ] Copy buttons work (clipboard API)
- [ ] FAQ accordion opens/closes
- [ ] Pipeline visual renders correctly
- [ ] Responsive at all breakpoints
- [ ] No console errors

---

## Phase 4: Skills Page (~1.5h)

### 4.1 — Create `skills.html`
- [ ] Boilerplate with `data-page="skills"`
- [ ] Hero section: "34+ Dedicated AI Experts. One Install." + search bar
- [ ] Category filter pills: All | Ideation | Design | Content | Code | Security | Deploy | Ops
- [ ] Skill grid: 34+ cards with name, category tag, description, when-to-use
- [ ] Skill Chains section: 3 flow diagrams (Feature, Bug Fix, Content)
- [ ] "Start with Just 3" onboarding section
- [ ] Cross-links → the-solution.html, methodology.html, demo.html

### 4.2 — Create `skills.css`
- [ ] Search bar styles (input with icon)
- [ ] Filter pill button styles (active/inactive states)
- [ ] Skill card grid (auto-fit, minmax 280px)
- [ ] Category tag colors (each category gets a distinct soft color)
- [ ] Skill chain flow diagram styles (boxes + arrows)
- [ ] Responsive: single column cards on mobile

### 4.3 — Add search/filter JS (inline, ~40 lines)
- [ ] Skill data array (34 objects: name, category, description, whenToUse)
- [ ] Filter by category: click pill → show matching cards
- [ ] Search by name/description: input event → filter cards
- [ ] "All" pill resets filter

### Phase 4 Verification
- [ ] Search filters skills in real-time
- [ ] Category pills toggle correctly
- [ ] All 34 skills render
- [ ] Skill chain diagrams visible
- [ ] Responsive at all breakpoints

---

## Phase 5: Methodology Page (~1h)

### 5.1 — Create `methodology.html`
- [ ] Boilerplate with `data-page="methodology"`
- [ ] Hero: "The Old Way: 8 People, 6 Months, $500K..."
- [ ] "Agile is Dead" thesis section with supporting data
- [ ] Scrum vs CodyMaster comparison table
- [ ] Role transformation cards (PM, Designer, Dev, QA)
- [ ] 6 AI-First principles section
- [ ] TRIZ-Parallel visual demo (before/after)
- [ ] Stats strip (12x, 99%, 1 person, 34+ skills)
- [ ] Manifesto pull quote
- [ ] Cross-links → skills.html, story.html, get-started.html

### 5.2 — Create `methodology.css`
- [ ] Role transformation card styles
- [ ] Stats strip (full-width, accent bg, large numbers)
- [ ] Manifesto quote block styles (large italic serif)
- [ ] Before/after comparison visual
- [ ] Responsive adjustments

### Phase 5 Verification
- [ ] All sections render correctly
- [ ] Stats strip responsive on mobile
- [ ] Comparison table readable
- [ ] Cross-links correct

---

## Phase 6: Story Page (~1h)

### 6.1 — Create `story.html`
- [ ] Boilerplate with `data-page="story"`
- [ ] Hero: "A PM's Journey from Chaos to System"
- [ ] Timeline: 7 chapters as alternating left/right cards
- [ ] Pull quote: "Code Đi" explanation
- [ ] Philosophy section
- [ ] Stats section
- [ ] CTA → get-started.html
- [ ] Cross-links → for-teams.html, demo.html, vibe-coding.html

### 6.2 — Create `story.css`
- [ ] Timeline layout (vertical line + alternating cards)
- [ ] Chapter card styles (numbered, with pull quotes)
- [ ] Alternating left/right on desktop, single column on mobile
- [ ] Philosophy section styles
- [ ] Responsive: single column timeline on mobile

### Phase 6 Verification
- [ ] Timeline renders correctly (alternating sides)
- [ ] Mobile: single column timeline
- [ ] Cross-links correct
- [ ] Story reads well end-to-end

---

## Phase 7: Update Existing Pages (~1h)

### 7.1 — Update cross-links on `the-problem.html`
- [ ] Change cross-link 1: for-teams → **compare.html** ("Compare tools")
- [ ] Change cross-link 3: demo → **vibe-coding.html** ("No code? Start here")

### 7.2 — Add cross-links to `the-solution.html`
- [ ] Add new "What's Next" section with 3 cards: skills.html, for-teams.html, compare.html

### 7.3 — Add cross-links to `for-teams.html`
- [ ] Add new "What's Next" section with 3 cards: story.html, workflow.html, compare.html

### 7.4 — Update cross-links on `demo.html`
- [ ] Change cross-link 2: the-solution → **skills.html** ("Explore all skills")

### 7.5 — Update cross-links on `workflow.html`
- [ ] Change cross-link 2: the-solution → **methodology.html** ("The AI-First way")

### 7.6 — Update cross-links on `get-started.html`
- [ ] Add/update cross-links: vibe-coding.html, demo.html, skills.html

### 7.7 — Update `index.html`
- [ ] Add "Compare" card or link in appropriate section
- [ ] Optionally: add "Vibe Coding" entry in hero or features section

### Phase 7 Verification
- [ ] All cross-links point to correct pages (no 404s)
- [ ] Cross-link cards follow consistent styling
- [ ] Navigation flow makes sense (each page leads naturally to next)

---

## Phase 8: Footer, Sitemap, Final Polish (~0.5h)

### 8.1 — Update `assets/partials/footer.html`
- [ ] Restructure into 3 columns: Product | Learn | Community
- [ ] Product: Why, System, Compare, Skills, Get Started
- [ ] Learn: Vibe Coding, Methodology, Story, Demo, Workflow
- [ ] Community: GitHub, Issues, License

### 8.2 — Update `sitemap.xml`
- [ ] Add 5 new page URLs with today's date

### 8.3 — Final global verification
- [ ] All 12 pages load without errors
- [ ] Header dropdown works on all pages
- [ ] Footer shows on all pages with correct links
- [ ] Mobile menu works on all pages
- [ ] Growth sheet fires on new pages
- [ ] GA4 tracking fires on new pages
- [ ] sitemap.xml valid
- [ ] robots.txt allows crawling

---

## Content Sources (for page content)

| Page | Primary source | Secondary source |
|---|---|---|
| compare.html | `old-version/vs-lovable.html`, `vs-bolt.html`, `vs-replit.html`, `vs-google-ai-studio.html`, `vs-scrum.html` | — |
| vibe-coding.html | `old-version/vibe-coding.html` | `how-to/03-vibe-coding-loop.md` |
| skills.html | `old-version/skills.html` | `how-to/17-skill-chain-automation.md` |
| methodology.html | `old-version/vs-scrum.html`, `old-version/parallel-coding.html` | `how-to/12-parallel-execution.md` |
| story.html | `old-version/story.html` | `old-version/why-cody-master.html` |

---

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| Dropdown breaks existing mobile menu | Test hamburger on all existing pages after Phase 1 |
| Compare page content becomes stale | Add "Last updated" date; easy to update tab content |
| Skills data gets outdated | Skills array in JS is easy to update; consider JSON file later |
| Too many nav items overwhelm users | Dropdown grouping keeps top-level clean (only 4 items + CTA) |
| Cross-link changes break existing flow | Verify each page's cross-links manually after Phase 7 |
