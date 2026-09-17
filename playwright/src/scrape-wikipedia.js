const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

const DEFAULT_URL = 'https://www.wikipedia.org/';
const DEFAULT_LIMIT = 10;

function csvEscape(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

async function scrape(url, limit) {
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const links = await page.locator('a[href]').evaluateAll((anchors, max) => {
      const seen = new Set();

      return anchors
        .map((anchor) => ({
          text: anchor.textContent.trim().replace(/\s+/g, ' '),
          href: anchor.href
        }))
        .filter(({ text, href }) => text && href && !seen.has(href) && seen.add(href))
        .slice(0, max);
    }, limit);

    return {
      sourceUrl: page.url(),
      title: await page.title(),
      links
    };
  } finally {
    await browser.close();
  }
}

async function main() {
  const url = process.argv[2] || DEFAULT_URL;
  const requestedLimit = Number.parseInt(process.argv[3] || DEFAULT_LIMIT, 10);
  const limit = Number.isFinite(requestedLimit) && requestedLimit > 0
    ? requestedLimit
    : DEFAULT_LIMIT;

  console.log(`Scraping ${url} (up to ${limit} links)...`);
  const result = await scrape(url, limit);
  const rows = result.links.map(({ text, href }) => [
    result.title,
    result.sourceUrl,
    text,
    href
  ]);
  const csv = [
    ['page_title', 'source_url', 'link_text', 'link_url'],
    ...rows
  ].map((row) => row.map(csvEscape).join(',')).join('\n') + '\n';

  const outputPath = path.join(process.cwd(), 'output', 'wikipedia.csv');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, csv, 'utf8');

  console.log(`Found ${result.links.length} links.`);
  console.log(`CSV written to ${outputPath}`);
}

main().catch((error) => {
  console.error(`Scrape failed: ${error.message}`);
  process.exitCode = 1;
});
