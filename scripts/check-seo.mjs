import fs from 'node:fs';

const index = fs.readFileSync('src/pages/index.astro', 'utf8');
const layout = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const contract = fs.readFileSync('.agent/site.contract.yaml', 'utf8');
const requiredText = ['Artifact Gallery AgentSite', 'GitHub Pages', 'repo-local QA', 'no-payment mode'];
const failures = [];

if (!/<title>/.test(layout)) failures.push('missing <title> in layout');
if (!/meta name="description"/.test(layout)) failures.push('missing meta description');
if (!/<h1>/.test(index)) failures.push('missing h1');
for (const text of requiredText) {
  if (!index.includes(text) && !contract.includes(text)) failures.push(`missing required phrase: ${text}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('seo/content check passed');
