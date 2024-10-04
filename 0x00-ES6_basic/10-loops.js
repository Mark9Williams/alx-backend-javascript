export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    // Find the index of the current value
    const idx = array.indexOf(value);
    // Update the value in the array
    array[idx] = appendString + value;
  }

  return array;
}
