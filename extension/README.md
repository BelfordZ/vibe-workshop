# Vibe Scraper Chrome extension

This is a small Manifest V3 extension with a TypeScript popup UI and an esbuild build step.

## Develop and test

```bash
cd extension
npm install
npm test
npm run check
npm run build
```

## Load it in Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked**.
4. Select the generated `extension/dist` directory.
5. Open a normal website, click the extension icon, and choose **Scrape active page**.

The popup reads links from the active tab and displays them as a starter result list. Source files live in `src/`; the generated `dist/` folder is what Chrome loads.
