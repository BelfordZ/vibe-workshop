import * as XLSX from 'xlsx';

export type WorkshopRow = {
  name: string;
  score: number;
  passed: boolean;
};

export function readRows(filePath: string, sheetName?: string): WorkshopRow[] {
  const workbook = XLSX.readFile(filePath);
  const selectedSheet = sheetName ?? workbook.SheetNames[0];
  if (!selectedSheet) throw new Error('Workbook has no worksheets');

  const sheet = workbook.Sheets[selectedSheet];
  if (!sheet) throw new Error(`Worksheet not found: ${selectedSheet}`);

  return XLSX.utils.sheet_to_json<WorkshopRow>(sheet, { defval: '' });
}

export function addPassStatus(rows: Array<{ name: string; score: number }>, passingScore = 70): WorkshopRow[] {
  return rows.map((row) => ({
    ...row,
    passed: row.score >= passingScore
  }));
}

export function writeRows(filePath: string, rows: WorkshopRow[], sheetName = 'Results'): void {
  const workbook = XLSX.utils.book_new();
  const sheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, sheet, sheetName);
  XLSX.writeFile(workbook, filePath);
}
