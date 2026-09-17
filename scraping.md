# Playwright scraping

This workshop example opens a headless Chromium browser, visits a webpage, collects links, and saves them as a CSV file.

## First-time setup

```bash
cd playwright
npm install
npx playwright install chromium
```

## Run the scraper

Run the default example against Wikipedia:

```bash
cd playwright
npm run scrape
```

The scraper collects up to 10 links and writes them to:

```text
output/wikipedia.csv
```

You can provide a different URL and result limit:

```bash
cd playwright
npm run scrape -- https://en.wikipedia.org/wiki/Playwright 5
```

## What the code does

1. Launches Chromium in headless mode.
2. Navigates to the requested URL.
3. Finds links using the `a[href]` selector.
4. Extracts each link's visible text and absolute URL.
5. Escapes the values and writes a CSV file.
6. Closes the browser, even if scraping fails.

The main code lives in `playwright/src/scrape-wikipedia.js`.

## Good next experiments

- Change the CSS selector to scrape headings, images, or table rows.
- Add a column for the HTTP status or scrape timestamp.
- Save the output filename based on the requested website.
- Add pagination or a loop over several URLs.
- Run with `headless: false` to watch the browser while developing.

## Chrome extension starter

The `extension/` directory contains a separate Manifest V3 extension with a small popup UI. Load it through `chrome://extensions` using **Load unpacked**, then select the `extension` directory.

Its **Scrape active page** button uses the same basic link selector in the current browser tab. The popup is a useful place to experiment with UI controls, selectors, and eventually CSV export.
