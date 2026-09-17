const urlInput = document.querySelector('#url');
const limitInput = document.querySelector('#limit');
const openUrlButton = document.querySelector('#open-url');
const scrapeButton = document.querySelector('#scrape-page');
const message = document.querySelector('#message');
const results = document.querySelector('#results');

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
    const limit = Math.min(Math.max(Number(limitInput.value) || 10, 1), 50);
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (maxLinks) => [...document.querySelectorAll('a[href]')]
        .map((link) => ({ text: link.textContent.trim().replace(/\s+/g, ' '), href: link.href }))
        .filter(({ text, href }) => text && href)
        .slice(0, maxLinks),
      args: [limit]
    });

    result.forEach(({ text, href }) => {
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
    setMessage(`Found ${result.length} links on ${new URL(tab.url).hostname}.`);
  } catch (error) {
    setMessage('This page cannot be scraped. Try a normal website tab.');
    console.error(error);
  } finally {
    scrapeButton.disabled = false;
  }
});

function setMessage(text) {
  message.textContent = text;
}
