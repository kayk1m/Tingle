export default function toTwoDigits(val: number) {
  return val.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
