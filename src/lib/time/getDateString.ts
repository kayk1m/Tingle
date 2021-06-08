import toTwoDigits from './toTwoDigits';

export default function getDateString(date?: string | Date) {
  const d = date !== undefined ? new Date(date) : new Date();

  return `${d.getFullYear()}${toTwoDigits(d.getMonth() + 1)}${toTwoDigits(
    d.getDay(),
  )}`;
}
