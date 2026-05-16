# AGENTS.md

## Mission
Artifact Gallery AgentSite is a static AgentSite generated from this requester brief: Create a static GitHub Pages site that demonstrates a searchable and filterable artifact gallery for contracts, QA output, deploy evidence, recipes, plans, and screenshots. Keep it backend-free and safe for autonomous agents to maintain.

## Audience
- AgentSite maintainers
- Autonomous website improvement agents
- Technical reviewers evaluating static proof

## Stack
- Astro static site
- Astro production build checks
- GitHub Pages via GitHub Actions
- Lightweight repo-local scripts in `scripts/`

## Recipe registry
Selected recipes: product-cockpit, artifact-gallery, copy-evidence-strip
Archetype: product-cockpit
Visual preset: cockpit-dark
auto_recipe_selection: not requested; default recipe selection unchanged

Use `npm run list:recipes`, `npm run score:recipes`, and `npm run recommend:recipes` before applying or changing registered patterns. Recipe guidance is static-safe composition guidance, not permission to add live data, analytics, payments, or unsupported claims.

## Safe edit boundaries
Agents may safely edit:
- `src/components/**`, `src/pages/**`, `src/styles/**`, `src/data/**`
- Copy that remains consistent with `.agent/site.contract.yaml` and `.agent/brand.contract.yaml`
- Supported claims listed in `.agent/site.contract.yaml`
- Documentation, runbooks, and plan files that reflect actual behavior

## Approval-required changes
Get explicit human approval before:
- Adding analytics, cookies, tracking pixels, or third-party forms
- Adding payment links or enabling payment mode
- Linking private artifacts or secrets
- Introducing server-side runtime, authentication, or a database

## QA commands
Run before handoff:
```bash
npm run qa
```

Individual gates:
```bash
npm run check:contract
npm run check:claims
npm run check:seo
npm run check:links
npm run check:artifacts
npm run build
```

## Feature-request process
1. Capture the natural-language request as a short brief.
2. Compare it with `.agent/site.contract.yaml`, `.agent/brand.contract.yaml`, and `.agent/payment.contract.yaml`.
3. Record assumptions and acceptance criteria in an issue or plan file.
4. Implement the smallest coherent change.
5. Run QA and include command output summary in the handoff.
6. Deploy only after checks pass.
7. Verify the live URL contains expected current copy.
