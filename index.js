// index.js - sportradar-advanced-challenge

// Imports
require('dotenv').config()

// App
const app = () => {
  // Trace logging
  console.log(`${process.env.APP_NAME}: Start`);
  console.log(`${process.env.APP_NAME}: End`);
};

// Start the app
app();
