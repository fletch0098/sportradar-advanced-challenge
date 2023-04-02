// pipeline.js - ETL Pipeline

// Imports
const extract = require("./extract");
const transform = require("./transform");
const load = require("./load");
const logger = require("../utilities/logger");

// Run Pipeline
const pipeline = async (gameId) => {
  logger.info(`Starting ETL Pipeline for game: ${gameId}`, { app: 'pipeline' })

  const url = `/game/${gameId}/boxscore`

  const extractedData = await extract(url)
  const transformedData = await transform({ gameId, gameData: extractedData})
  await load(transformedData)

  logger.info(`ETL Pipeline finished for game: ${gameId}`, { app: 'pipeline' })

  // Return
  return;
};

module.exports = pipeline;
