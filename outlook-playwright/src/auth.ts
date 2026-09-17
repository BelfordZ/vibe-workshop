import { chromium } from 'playwright';

const profileDir = '.auth/outlook-profile';
const context = await chromium.launchPersistentContext(profileDir, {
  headless: false,
  viewport: { width: 1440, height: 900 }
});

const page = context.pages()[0] ?? await context.newPage();
await page.goto('https://outlook.office.com/mail/', { waitUntil: 'domcontentloaded' });

console.log('Log in to Outlook in the visible browser window. Complete MFA if prompted.');
console.log('When your inbox is visible, return to this terminal and press Enter.');
process.stdin.setEncoding('utf8');
await new Promise<void>((resolve) => process.stdin.once('data', () => resolve()));

await context.close();
console.log(`Session saved in ${profileDir}`);
