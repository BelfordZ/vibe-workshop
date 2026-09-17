export type Email = {
  subject: string;
  sender: string;
  received: string;
  preview: string;
};

export function toCsv(rows: Email[]): string {
  const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
  return [
    ['subject', 'sender', 'received', 'preview'],
    ...rows.map((row) => [row.subject, row.sender, row.received, row.preview])
  ].map((row) => row.map(escape).join(',')).join('\n') + '\n';
}
