# Initial site build plan: Artifact Gallery AgentSite

## Request
Create a static GitHub Pages site that demonstrates a searchable and filterable artifact gallery for contracts, QA output, deploy evidence, recipes, plans, and screenshots. Keep it backend-free and safe for autonomous agents to maintain.

## Audience
- AgentSite maintainers
- Autonomous website improvement agents
- Technical reviewers evaluating static proof

## Site sections
- Static behavior that feels like software (static-behavior)
- Future agents edit the data, not the architecture (agent-maintenance)
- Proof stays public-safe and static (safety-boundaries)

## Proof/artifacts
- Artifact data contract: src/data/artifacts.json is validated by npm run check:artifacts before build and deploy.
- Recipe docs: .agent/recipes/artifact-gallery documents fit, static safety rules, and acceptance criteria.
- Visual QA: npm run test:visual checks desktop and mobile layouts for overflow, console errors, and visible controls.

## Assumptions
- The site remains static and deploys to GitHub Pages.
- No analytics, payments, fake customers, fake metrics, or unsupported claims are included.

## Scope
- Generate a safe first-pass landing page and repo guardrails.

## Non-goals
- Payment, analytics, custom domains, server runtime, and unsupported claims.

## Files expected to change
- `AGENTS.md`
- `.agent/**`
- `.github/workflows/deploy.yml`
- `package.json`
- `scripts/**`
- `src/**`

## Acceptance criteria
- Hero and core sections reflect the brief.
- Contracts exist and payment remains disabled/no-payment.
- `npm run qa` passes locally.
- GitHub Pages deploy succeeds and live URL contains `Artifact Gallery AgentSite`.

## QA commands
```bash
npm run qa
npm audit --audit-level=moderate
```

## Deploy/verify
```bash
LIVE_URL="https://castiliad.github.io/agentsite-artifact-gallery-generated-20260516001714/" EXPECT_TEXT="Artifact Gallery AgentSite" REPO="castiliad/agentsite-artifact-gallery-generated-20260516001714" npm run verify:deploy
```
