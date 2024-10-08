export default function updateUniqueItems(map) {
  // Check if the input argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map and update the quantities that are equal to 1
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100); // Update quantity to 100
    }
  }

  return map; // Return the updated map (optional, but good for chaining)
}
