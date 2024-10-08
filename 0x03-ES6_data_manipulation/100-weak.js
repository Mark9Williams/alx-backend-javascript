export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const currentCount = weakMap.get(endpoint) || 0;

  weakMap.set(endpoint, currentCount + 1);

  if (currentCount >= 5) {
    throw Error('Endpoint load is high');
  }
}