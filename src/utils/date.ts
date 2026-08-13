export function formatApplicationDate(date: string): string {
  const [year, month, day] = date.split('-')
  return `${Number(day)}.${Number(month)}.${year}`
}