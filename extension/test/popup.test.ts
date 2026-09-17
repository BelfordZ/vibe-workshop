import { describe, expect, it } from 'vitest';
import { collectLinks } from '../src/links';

describe('collectLinks', () => {
  it('normalizes text, removes empty links, and de-duplicates URLs', () => {
    expect(collectLinks([
      { text: '  Hello   world ', href: 'https://example.com' },
      { text: '', href: 'https://empty.example' },
      { text: 'Again', href: 'https://example.com' },
      { text: 'Second', href: 'https://second.example' }
    ], 10)).toEqual([
      { text: 'Hello world', href: 'https://example.com' },
      { text: 'Second', href: 'https://second.example' }
    ]);
  });

  it('respects the requested limit', () => {
    expect(collectLinks([
      { text: 'One', href: 'https://one.example' },
      { text: 'Two', href: 'https://two.example' }
    ], 1)).toHaveLength(1);
  });
});
