#!/usr/bin/node

const http = require('http');
const url = require('url');
const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const fileName = process.argv[2];

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const data = await readFileAsync(fileName, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      students.forEach(([firstname, , , field]) => {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      const totalStudents = students.length;
      res.write(`Number of students: ${totalStudents}\n`);
      for (const [field, names] of Object.entries(fields)) {
        res.write(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`,
        );
      }
    } catch (error) {
      res.write('Cannot load the database\n');
    }
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
