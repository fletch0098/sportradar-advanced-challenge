// index.js - sportradar-advanced-challenge

// Imports
require('dotenv').config()
const sequelize =  require('./sequelize/sequelize')
const pipeline =  require('./pipeline/pipeline')

// App
const app = async () => {
  // Trace logging
  console.log(`${process.env.APP_NAME}: Start`);

  // Connect to the database, exit on error
  await sequelize.connect()

  const gameId = "2022021189"

  await pipeline(gameId, true)

  // Trace logging
  console.log(`${process.env.APP_NAME}: End`);
};

// Start the app
app();
