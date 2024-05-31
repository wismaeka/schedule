export function generateDate(date: Date): string {
  const year = date.getFullYear();
  const dt = date.getDate();
  const month = date.getMonth();
  return `${year}-${month < 10 ? `0${month}` : month}-${dt}`;
}

export function generateTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 30 ? "00" : "30"}`;
}
