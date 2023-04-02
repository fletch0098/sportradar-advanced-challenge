// exit.js - Exit app

// Imports
const logger = require('./logger')

// Exitt app
const exit = (message = "Execution Terminated", code = 0) => {
  logger.info(message, { app: 'exit' })

  // Exit
  process.exit(code);
};

module.exports = exit;
