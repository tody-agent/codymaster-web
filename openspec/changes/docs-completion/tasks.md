# Implementation Checklist — docs-completion

## Phase 1: Sidebar & Nav Sync
- [ ] 1.1 Audit all sidebar entries against actual .md files in skills/ 
- [ ] 1.2 Remove deprecated entries: cm-secret-shield, cm-test-gate, cm-ui-preview, cm-ux-master, cm-dashboard, cm-git-worktrees, cm-skill-mastery
- [ ] 1.3 Add missing active skills to appropriate sidebar groups
- [ ] 1.4 Fix nav dropdown "Skills" — remove deprecated links
- [ ] 1.5 Fix nav dropdown "Guides" — verify all links valid

## Phase 2: Homepage Upgrade
- [ ] 2.1 Convert index.md to VitePress layout: home hero format
- [ ] 2.2 Write hero section (name, tagline, action buttons: Get Started + GitHub)
- [ ] 2.3 Write feature cards for 6 domains (Engineering, Operations, Product, Growth, Orchestration, Self-Healing)
- [ ] 2.4 Keep install code-group blocks below hero
- [ ] 2.5 Fix skill count inconsistency (34 vs 68+)

## Phase 3: Theme Enhancement
- [ ] 3.1 Add dark mode CSS token overrides to custom.css
- [ ] 3.2 Add hero gradient styling
- [ ] 3.3 Add skill badge/pill styles for category labels

## Phase 4: Verification
- [ ] 4.1 Run dev server and check all pages load
- [ ] 4.2 Run full build (npm run build:docs)
- [ ] 4.3 Copy to docs/ and verify structure matches
- [ ] 4.4 Commit + deploy to Cloudflare
