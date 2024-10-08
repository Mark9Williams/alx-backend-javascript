// Export the instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the WeakMap
  const currentCount = weakMap.get(endpoint) || 0;

  // Increment the count for this endpoint
  weakMap.set(endpoint, currentCount + 1);

  // If the number of queries reaches or exceeds 5, throw an error
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
