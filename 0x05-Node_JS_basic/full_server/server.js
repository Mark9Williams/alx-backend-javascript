import express from 'express';
import router from './routes/index.js';  // Import the routes from index.js

// Create an instance of the Express app
const app = express();

// Use the routes defined in index.js
app.use(router);

// Set the port number to 1245
const PORT = 1245;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;  // Export the app for testing or further configuration
