// pipeline.js - ETL Pipeline

// Imports
const extract = require("./extract");
const transform = require("./transform");
const load = require("./load");

// Run Pipeline
const pipeline = async (gameId, log = false) => {
  // Trace logging
  console.log("Starting ETL Pipeline");

  const url = `/game/${gameId}/boxscore`

  const extractedData = await extract(url, log)
  const transformedData = await transform(extractedData, log)
  await load(transformedData, log)

  // Trace logging
  console.log("ETL Pipeline Finished");

  // Return
  return;
};

module.exports = pipeline;
