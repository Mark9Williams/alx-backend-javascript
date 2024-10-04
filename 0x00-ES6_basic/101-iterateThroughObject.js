export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold the employee names
  const employeeNames = [];

  // Iterate through the iterator to get each employee name
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee name to the array
  }

  // Join the employee names with '|' and return the resulting string
  return employeeNames.join(' | ');
}
