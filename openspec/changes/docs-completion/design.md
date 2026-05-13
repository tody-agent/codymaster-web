# Design: Complete cody.todyle.com/docs

## Context & Technical Approach

**Stack**: VitePress (docs-source/) → build to dist/docs/ → copy to docs/ → Cloudflare Pages  
**Base URL**: `/docs/` | **Live**: `https://cody.todyle.com/docs/`

### Architecture
```
LandingPage/
├── docs-source/          # VitePress source (edit here)
│   ├── .vitepress/
│   │   ├── config.mts    # Nav, sidebar, head tags
│   │   └── theme/
│   │       ├── index.ts
│   │       ├── custom.css
│   │       └── docs-ga-events.js
│   ├── index.md          # Docs homepage
│   ├── skills/           # 54 skill docs
│   ├── sop/              # 5 SOP guides
│   ├── use-cases/        # 8 use case docs
│   └── api/              # 3 API docs
├── docs/                 # Build output (DO NOT edit)
└── package.json
```

## Proposed Changes

### Area 1: Sidebar Cleanup — Remove Deprecated Refs
Deprecated entries in config.mts sidebar:
- cm-secret-shield → cm-safe-deploy
- cm-test-gate → cm-quality-gate
- cm-ui-preview → cm-design-system
- cm-ux-master → removed
- cm-dashboard → cm-status
- cm-git-worktrees → cm-execution
- cm-skill-mastery → cm-skill-index

### Area 2: Add Missing Active Skills to Sidebar
Active skills in skills/ dir not in sidebar:
- cm-booking-calendar, cm-auto-publisher, cm-growth-hacking
- cm-google-form, cm-notebooklm, cm-reactor
- cm-clean-code, cm-design-system, cm-readit
- cm-sprint-bus, cm-guardian-runtime, cm-retro-cli

### Area 3: Homepage Upgrade — VitePress Hero Layout
Convert index.md to layout: home with:
- Hero section (name, tagline, actions)
- Feature cards for 6 domains
- Retain install code blocks + mermaid

### Area 4: Custom Theme Enhancement
Expand custom.css with:
- Dark mode token overrides
- Hero gradient + polish
- Skill category badge styles

### Area 5: Nav Cleanup
Remove deprecated skill refs from nav dropdown.

## Verification
- [ ] npm run dev --prefix docs-source → no errors
- [ ] All sidebar links resolve (no 404s)
- [ ] Homepage renders with hero section
- [ ] Dark mode looks correct
- [ ] npm run build:docs completes with 0 errors
