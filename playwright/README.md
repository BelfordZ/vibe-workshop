# Vibe Coding Workshop

A tiny Playwright scraper that opens a real browser, visits a page, collects a few links, and writes them to CSV.

## Setup

From this directory:

```bash
cd playwright
npm install
npx playwright install chromium
```

## Run it

```bash
cd playwright
npm run scrape
```

This visits `https://www.wikipedia.org/` and writes up to 10 links to `output/wikipedia.csv`.

Pass a different URL and result limit as arguments:

```bash
cd playwright
npm run scrape -- https://en.wikipedia.org/wiki/Playwright 5
```

The browser runs headlessly. Open `src/scrape-wikipedia.js` to experiment with selectors and the fields written to the CSV.
