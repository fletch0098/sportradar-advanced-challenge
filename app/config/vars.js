// vars.js - Variables and Constants

// Imports
require("dotenv").config();

const vars = {
  appSettings: {
    env: process.env.ENV || "local",
    appName: process.env.APP_NAME || "sportradar-advanced-challenge",
    batchSize: process.env.BATCH_SIZE || 20,
    cronMonitorExpression: process.env.CRON_MONITOR_EXPRESSION || "* * * * *",
  },
  databaseSettings: {
    name: process.env.DB_NAME || "sportsradar_db",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "root",
    host: process.env.DB_HOST || "localhost",
    log: process.env.DB_LOGGING == 'true',
  },
  log: {
    level: process.env.LOG_LEVEL || "info"
  },
  nhl: {
    baseUrl: process.env.NHL_BASE_URL || "https://statsapi.web.nhl.com/api/v1",
  },
  constants: {
    LiveStatus: 'Live',
    FinalStatus: 'Final',
    Game: 'game',
    Season: 'season',
    Goalie: 'Goalie'
  },
};

module.exports = vars;
