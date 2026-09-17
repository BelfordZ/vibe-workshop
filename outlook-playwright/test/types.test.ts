import { describe, expect, it } from 'vitest';
import { toCsv, type Email } from '../src/types.js';

describe('toCsv', () => {
  it('writes headers and escapes commas and quotes', () => {
    const rows: Email[] = [{ subject: 'Hello, team', sender: 'Ada', received: 'Today', preview: 'She said "hi"' }];
    expect(toCsv(rows)).toBe('"subject","sender","received","preview"\n"Hello, team","Ada","Today","She said ""hi"""\n');
  });
});
