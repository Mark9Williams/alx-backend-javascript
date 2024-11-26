#!/usr/bin/node
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status for OK
  res.setHeader('Content-Type', 'text/plain'); // Plain text content type
  res.end('Hello Holberton School!'); // Response body
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
