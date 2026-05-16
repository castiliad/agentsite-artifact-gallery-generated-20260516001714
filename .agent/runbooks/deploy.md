# Deployment runbook

## Target
GitHub Pages serves the static Astro build from the GitHub Actions artifact.

## Normal deployment
1. Confirm contracts and QA pass: `npm run qa`.
2. Commit changes to `main`.
3. Push to GitHub.
4. GitHub Actions runs `.github/workflows/deploy.yml`.
5. Verify the live URL contains expected text: `Artifact Gallery AgentSite`.

## Manual verification
```bash
LIVE_URL="https://castiliad.github.io/agentsite-artifact-gallery-generated-20260516001714/" EXPECT_TEXT="Artifact Gallery AgentSite" REPO="castiliad/agentsite-artifact-gallery-generated-20260516001714" npm run verify:deploy
```

## Rollback
Revert the problematic commit, run QA, and push `main` again. Do not rewrite public history unless explicitly approved.
