// index.js - sportradar-advanced-challenge

// Imports
require('dotenv').config()
const sequelize =  require('./sequelize/sequelize')

// App
const app = async () => {
  // Trace logging
  console.log(`${process.env.APP_NAME}: Start`);

  // Connect to the database, exit on error
  await sequelize.connect()

  // TODO: Pipeline

  // Trace logging
  console.log(`${process.env.APP_NAME}: End`);
};

// Start the app
app();
