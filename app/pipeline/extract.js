// extract.js - Extracting data

// Imports
const fetch = require("../utilities/fetch");
const logger = require("../utilities/logger");

// Extract data
const extract = async (url) => {

  // api call
  const data = await fetch(url);

  logger.debug(JSON.stringify(data), { app: 'extract' })

  // Return
  return data;
};

module.exports = extract;
