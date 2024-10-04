export default function createIteratorObject(report) {
  // Extract the employees from the allEmployees property
  const employees = Object.values(report.allEmployees);

  // Flatten the array of employees
  const flattenedEmployees = [].concat(...employees);

  // Create an iterator using the Symbol.iterator method
  return flattenedEmployees[Symbol.iterator]();
}
