import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { addPassStatus, readRows, writeRows } from './excel.js';

const inputPath = path.resolve('input.xlsx');
const outputPath = path.resolve('output/graded.xlsx');

await mkdir(path.dirname(outputPath), { recursive: true });
const rows = readRows(inputPath);
const gradedRows = addPassStatus(rows);
writeRows(outputPath, gradedRows);

console.log(`Read ${rows.length} rows from ${inputPath}`);
console.log(`Wrote ${gradedRows.length} rows to ${outputPath}`);
