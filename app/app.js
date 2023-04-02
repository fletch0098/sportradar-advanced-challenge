// app.js - Appliction

// Imports
const { appSettings } = require("./config/vars");
const sequelizeConnect = require("./config/sequelize");
const pipeline = require("./pipeline/pipeline");
const getArgs = require("./utilities/args");
const runSeason = require("./season");
const runMonitor = require("./monitor");
const exit = require("./exit");

// Application
const app = async () => {
  try {
    // Trace logging
    console.log(`${appSettings.appName}: Start`);

    // Connect to the database, exit on error
    await sequelizeConnect();

    // Get command line arguments if any
    const { gameId, season } = getArgs(process.argv);

    if (gameId) {
      await pipeline(gameId, false);
      exit(`${appSettings.appName}: End`, 0);
    } else if (season) {
      await runSeason(season);
      exit(`${appSettings.appName}: End`, 0);
    } else {
      await runMonitor();
    }
  } catch (err) {
    // Log Error
    console.log(err);

    // Terminate
    exit(`${appSettings.appName}: Application terminated with an error`, 1);
  }
};

module.exports = app;
