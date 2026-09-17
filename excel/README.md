# TypeScript and Microsoft Excel

This example uses the `xlsx` package to read and write local `.xlsx` files. It reads rows from the first worksheet, adds a calculated `passed` column, and writes a new workbook.

## Setup

```bash
cd excel
npm install
```

## Try the example

Create an `input.xlsx` file with columns named `name` and `score`, then run:

```bash
npm run example
```

The result is written to `output/graded.xlsx`.

## Test and type-check

```bash
npm test
npm run check
```

The reusable functions are in `src/excel.ts`. For a live Excel workbook controlled through the Excel app, use a connected Excel integration instead of this file-based example.
