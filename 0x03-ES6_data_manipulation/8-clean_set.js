export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string') {
    return '';
  }
  if (startString === '') {
    return '';
  }
  const newSet = new Set();
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newSet.add(value.slice(startString.length));
    }
  });
  return [...newSet].join('-');
}
