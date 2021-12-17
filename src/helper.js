export function formatLargeNumber(number) {
  if (number >= 1000000000) {
    return `${Math.floor(number / 1000000000)}b`;
  } else if (number >= 1000000) {
    return `${Math.floor(number / 1000000)}m`;
  } else {
    return `${Math.floor(number / 1000)}k`;
  }
}