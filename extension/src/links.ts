export type ScrapedLink = { text: string; href: string };

export function collectLinks(anchors: Array<{ text: string; href: string }>, maxLinks: number): ScrapedLink[] {
  const seen = new Set<string>();
  return anchors
    .map(({ text, href }) => ({ text: text.trim().replace(/\s+/g, ' '), href }))
    .filter(({ text, href }) => Boolean(text && href) && !seen.has(href) && Boolean(seen.add(href)))
    .slice(0, maxLinks);
}
