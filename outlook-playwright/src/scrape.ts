import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { toCsv, type Email } from './types.js';

const outputPath = path.resolve('output/inbox.csv');
const limit = Number.parseInt(process.argv[2] ?? '10', 10);
const context = await chromium.launchPersistentContext('.auth/outlook-profile', { headless: true });

try {
  const page = context.pages()[0] ?? await context.newPage();
  await page.goto('https://outlook.office.com/mail/inbox', { waitUntil: 'domcontentloaded' });
  await page.locator('[role="main"] [role="row"]').first().waitFor({ timeout: 30_000 });

  const emails: Email[] = await page.locator('[role="main"] [role="row"]').evaluateAll((rows, max) => rows
    .map((row) => {
      const parts = (row.textContent ?? '').split(/\n+/).map((part) => part.trim()).filter(Boolean);
      return { sender: parts[0] ?? '', subject: parts[1] ?? '', received: parts.at(-1) ?? '', preview: parts.slice(2, -1).join(' ') };
    })
    .filter((email) => email.sender && email.subject)
    .slice(0, max), limit);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, toCsv(emails), 'utf8');
  console.log(`Scraped ${emails.length} messages.`);
  console.log(`CSV written to ${outputPath}`);
} finally {
  await context.close();
}
