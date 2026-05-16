import { execFileSync } from 'node:child_process';

const liveUrl = process.env.LIVE_URL;
const expected = process.env.EXPECT_TEXT;
const repo = process.env.REPO;

if (!liveUrl || !expected) {
  console.error('Set LIVE_URL and EXPECT_TEXT before running verify:deploy. Optional: REPO=owner/name');
  process.exit(1);
}

try {
  const html = execFileSync('curl', ['-LfsS', liveUrl], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  if (!html.includes(expected)) {
    console.error(`Live URL did not contain expected text: ${expected}`);
    process.exit(1);
  }
  console.log(`live content check passed: ${liveUrl}`);
} catch (error) {
  console.error(`live content check failed: ${error.message}`);
  process.exit(1);
}

if (repo) {
  try {
    const out = execFileSync('gh', ['run', 'list', '--repo', repo, '--workflow', 'deploy.yml', '--limit', '1'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    console.log(out.trim() || 'No deploy runs returned by gh.');
  } catch {
    console.log('GitHub Actions check skipped: gh unavailable, unauthenticated, or repo inaccessible.');
  }
}
