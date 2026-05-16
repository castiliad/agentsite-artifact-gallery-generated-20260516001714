# Artifact Gallery AgentSite

A static AgentSite proof browser with searchable artifacts and agent-maintainable evidence data.

## Brief
Create a static GitHub Pages site that demonstrates a searchable and filterable artifact gallery for contracts, QA output, deploy evidence, recipes, plans, and screenshots. Keep it backend-free and safe for autonomous agents to maintain.

## Recipe registry
Selected recipes:
- product-cockpit
- artifact-gallery
- copy-evidence-strip

Visual preset: `cockpit-dark`

auto_recipe_selection: not requested; default recipe selection unchanged

Auto-selection signals:
- No auto-selection signals recorded

Registry commands:
```bash
npm run list:recipes
npm run score:recipes
npm run recommend:recipes -- --brief "Create a static GitHub Pages site that demonstrates a searchable and filterable artifact gallery for contracts, QA output, deploy evidence, recipes, plans, and screenshots. Keep it backend-free and safe for autonomous agents to maintain."
```

## Audience
- AgentSite maintainers
- Autonomous website improvement agents
- Technical reviewers evaluating static proof

## Live URL
https://castiliad.github.io/agentsite-artifact-gallery-generated-20260516001714/

## Repository
https://github.com/castiliad/agentsite-artifact-gallery-generated-20260516001714

## Local development
```bash
npm install
npm run dev
```

## QA
`npm run qa` is the fast local gate. Browser/mobile visual QA is explicit so normal edits stay quick.

## Recipe-enabled generation
Selecting `recipes: ["product-cockpit"]`, `visualPreset: "cockpit-dark"`, or `visualPreset: "product-cockpit"` renders the cockpit UI template instead of only recording metadata. The output remains static-safe: no analytics, payments, backend, authentication, live telemetry, fake metrics, customer logos, or quoted endorsements.

```bash
npm run qa
npm run test:visual
npm run qa:full
npm audit --audit-level=moderate
```

Visual QA builds and serves the static site, checks desktop and mobile layouts, fails on console/page errors, horizontal overflow, missing hero/nav/CTA visibility, broken hash anchors, and visible nav ellipses, then writes screenshots to `.agent/audits/screenshots/`. If Chromium is not installed yet, run `npx playwright install chromium` once.

## Deploy verification
```bash
LIVE_URL="https://castiliad.github.io/agentsite-artifact-gallery-generated-20260516001714/" \
EXPECT_TEXT="Artifact Gallery AgentSite" \
REPO="castiliad/agentsite-artifact-gallery-generated-20260516001714" \
npm run verify:deploy
```

## Agent maintenance notes
- Read `AGENTS.md` before editing.
- Keep visible copy aligned with `.agent/site.contract.yaml` and `.agent/brand.contract.yaml`.
- Payment mode is disabled in `.agent/payment.contract.yaml`; do not add payment links without explicit approval.
- Deployment is GitHub Pages via `.github/workflows/deploy.yml`.
