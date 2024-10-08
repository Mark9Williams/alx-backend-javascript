export default function cleanSet(set, startString) {
  // Check if startString is an empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter the values in the set that start with startString and extract the rest of the string
  const result = [...set]
    .filter((value) => value.startsWith(startString)) // only values that start with startString
    .map((value) => value.slice(startString.length)) // remove the startString part
    .join('-'); // join with '-'

  return result;
}
