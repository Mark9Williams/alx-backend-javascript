export default function updateUniqueItems(groceries) {
  const newGroceries = groceries;
  for (const [key, value] of newGroceries) {
    if (value === 1) {
      newGroceries.set(key, 100);
    }
  }
  return newGroceries;
}
