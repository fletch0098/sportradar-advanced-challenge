// index.js - sportradar-advanced-challenge

// Imports
require("dotenv").config();
const sequelize = require("./sequelize/sequelize");
const pipeline = require("./pipeline/pipeline");
const getArgs = require("./utilities/args");
const runSeason = require("./season");
const runMonitor = require("./monitor");

// App
const app = async () => {
  // Trace logging
  console.log(`${process.env.APP_NAME}: Start`);

  // Connect to the database, exit on error
  await sequelize.connect();

  // Get command line arguments if any
  const { gameId, season } = getArgs();

  // Run app depending on arguments
  try {
    if (gameId) {
      await pipeline(gameId, false);
      // Trace logging
      console.log(`${process.env.APP_NAME}: End`);

      // Exit
      process.exit(0);
    } else if (season) {
      await runSeason(season);
      // Trace logging
      console.log(`${process.env.APP_NAME}: End`);

      // Exit
      process.exit(0);
    } else {
      await runMonitor();
    }
  } catch (err) {
    console.log(err);
  }
};

// Start the app
app();
