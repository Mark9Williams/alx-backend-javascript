#!/usr/bin/node
/**
 * Program that interacts with the user via command-line input and output.
 * It greets the user, takes their name as input, and responds accordingly.
 */

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get the input and trim any extra whitespace
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit(); // End the process
});

// Handle program termination
process.on('exit', () => {
  console.log('This important software is now closing');
});
