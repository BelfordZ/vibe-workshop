import { describe, expect, it } from 'vitest';
import { addPassStatus } from '../src/excel.js';

describe('addPassStatus', () => {
  it('marks scores at or above the passing score as passed', () => {
    expect(addPassStatus([
      { name: 'Ada', score: 90 },
      { name: 'Grace', score: 69 }
    ])).toEqual([
      { name: 'Ada', score: 90, passed: true },
      { name: 'Grace', score: 69, passed: false }
    ]);
  });

  it('supports a custom passing score', () => {
    expect(addPassStatus([{ name: 'Linus', score: 80 }], 85)[0].passed).toBe(false);
  });
});
