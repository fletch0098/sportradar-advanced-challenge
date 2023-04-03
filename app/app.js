// app.js - Appliction

// Imports
const { appSettings } = require("./config/vars");
const sequelizeConnect = require("./config/sequelize");
const pipeline = require("./pipeline/pipeline");
const getArgs = require("./utilities/args");
const season = require("./season/season");
const monitor = require("./monitor/monitor");
const exit = require("./utilities/exit");
const logger = require("./utilities/logger");

// Application
const app = async (argv) => {
  try {
    logger.info(`${appSettings.appName}: Start`);

    // Connect to the database, exit on error
    await sequelizeConnect();

    // Get command line arguments if any
    const args = getArgs(argv);

    if (args.gameId) {
      // Game Mode
      await pipeline(args.gameId);
      exit(`${appSettings.appName}: End`, 0);
    } else if (args.season) {
      // Season Mode
      await season(args.season);
      exit(`${appSettings.appName}: End`, 0);
    } else {
      // Monitor Mode
      await monitor();
    }
  } catch (err) {
    // Log error
    logger.error(err);

    // Terminate
    exit(`${appSettings.appName}: Application terminated with an error`, 1);
  }
};

module.exports = app;
