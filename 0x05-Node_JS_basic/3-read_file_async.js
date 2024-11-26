#!/usr/bin/node
const fs = require('fs');

/**
 * Counts students in a CSV file asynchronously and logs statistics.
 * @param {string} path - Path to the CSV database file.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentData = lines.slice(1).map((line) => line.split(',')); // Extract data rows

      console.log(`Number of students: ${studentData.length}`);

      const fields = {};
      studentData.forEach((student) => {
        const [firstName, , , field] = student;

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

      resolve();
    });
  });
}

module.exports = countStudents;
