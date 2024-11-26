#!/usr/bin/node
const fs = require('fs');

/**
 * Counts students in a CSV file and logs statistics.
 * @param {string} path - Path to the CSV database file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8'); // Read file synchronously
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length <= 1) {
      throw new Error('Cannot load the database'); // Handle case where file has only headers
    }

    const studentData = lines.slice(1).map((line) => line.split(',')); // Extract data rows

    console.log(`Number of students: ${studentData.length}`);

    const fields = {};
    studentData.forEach((student) => {
      const [firstName, , , field] = student; // Destructure and ignore unused values

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
