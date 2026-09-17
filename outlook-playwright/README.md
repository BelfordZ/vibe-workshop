# Outlook Web scraping with Playwright

This optional example reads a few inbox rows from Outlook on the web and writes them to CSV. It does not use Microsoft Graph and does not require the Outlook desktop application.

## Important security notes

The login profile in `.auth/` contains reusable session credentials. Never commit it, upload it, or share it. Use a dedicated test account where possible. Only automate mailboxes you are authorized to access.

The Outlook UI changes over time, so the row selector in `src/scrape.ts` may need adjustment. This is best treated as a browser-automation teaching example, not a production integration.

## Setup

```bash
cd outlook-playwright
npm install
npx playwright install chromium
```

## Complete first-run flow

1. Start the interactive login flow:

   ```bash
   npm run auth
   ```

2. In the visible browser, sign in to Outlook and complete MFA if prompted.
3. Open the inbox, return to the terminal, and press Enter. The session is saved under `.auth/outlook-profile/`.
4. Scrape up to 10 messages:

   ```bash
   npm run scrape
   ```

5. The CSV is written to `output/inbox.csv`.

Pass a different limit:

```bash
npm run scrape -- 25
```

If the session expires, run `npm run auth` again. If scraping returns no messages, inspect the Outlook page and update the locator in `src/scrape.ts`.

## Test and type-check

```bash
npm test
npm run check
```
