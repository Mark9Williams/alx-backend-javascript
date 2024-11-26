#!/usr/bin/node

const express = require('express');
const fs = require('fs');

// Create an Express application
const app = express();

// Function to read students from a database file asynchronously
function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip the header row

      const fieldCount = {};
      const fieldStudents = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (field && firstname) {
          if (!fieldCount[field]) {
            fieldCount[field] = 0;
            fieldStudents[field] = [];
          }
          fieldCount[field] += 1;
          fieldStudents[field].push(firstname);
        }
      });

      const totalStudents = students.length;
      const results = {
        totalStudents,
        fieldCount,
        fieldStudents,
      };

      resolve(results);
    });
  });
}

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.status(500).send('Error: Database file not provided');
    return;
  }

  try {
    const data = await countStudents(database);
    let output = 'This is the list of our students\n';
    output += `Number of students: ${data.totalStudents}\n`;

    for (const [field, count] of Object.entries(data.fieldCount)) {
      output += `Number of students in ${field}: ${count}. List: ${data.fieldStudents[field].join(', ')}\n`;
    }

    res.send(output.trimEnd());
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
