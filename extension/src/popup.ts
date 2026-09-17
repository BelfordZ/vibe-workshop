import type { ScrapedLink } from './links';

const urlInput = document.querySelector<HTMLInputElement>('#url')!;
const limitInput = document.querySelector<HTMLInputElement>('#limit')!;
const openUrlButton = document.querySelector<HTMLButtonElement>('#open-url')!;
const scrapeButton = document.querySelector<HTMLButtonElement>('#scrape-page')!;
const message = document.querySelector<HTMLParagraphElement>('#message')!;
const results = document.querySelector<HTMLUListElement>('#results')!;

openUrlButton.addEventListener('click', () => {
  const url = urlInput.value.trim();
  if (!url) return setMessage('Enter a URL first.');
  chrome.tabs.create({ url });
});

scrapeButton.addEventListener('click', async () => {
  scrapeButton.disabled = true;
  results.replaceChildren();
  setMessage('Reading the active page...');

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab.id || !tab.url) throw new Error('No active page found');
    const limit = Math.min(Math.max(Number(limitInput.value) || 10, 1), 50);
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (maxLinks) => {
        const seen = new Set<string>();
        return [...document.querySelectorAll<HTMLAnchorElement>('a[href]')]
          .map((link) => ({ text: (link.textContent ?? '').trim().replace(/\s+/g, ' '), href: link.href }))
          .filter(({ text, href }) => Boolean(text && href) && !seen.has(href) && Boolean(seen.add(href)))
          .slice(0, maxLinks);
      },
      args: [limit]
    });
    const links = (result ?? []) as ScrapedLink[];

    links.forEach(({ text, href }) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = text;
      link.textContent = text;
      item.append(link);
      results.append(item);
    });
    setMessage(`Found ${links.length} links on ${new URL(tab.url).hostname}.`);
  } catch (error) {
    setMessage('This page cannot be scraped. Try a normal website tab.');
    console.error(error);
  } finally {
    scrapeButton.disabled = false;
  }
});

function setMessage(text: string): void {
  message.textContent = text;
}
