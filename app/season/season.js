// season.js - Run ETL Pipeline for all games in a season

// Imports
const { appSettings, nhl } = require('../config/vars')
const fetch = require("../utilities/fetch");
const logger = require("../utilities/logger");
const pipeline = require("../pipeline/pipeline");

// Run ETL Pipeline for all games in a season
const season = async (season) => {
  // url all games from specified season
  const url = `/schedule?season=${season}`;

  // api call
  const data = await fetch(url);

  // Initialize empty array of games
  const games = [];

  // Parse out all gameIds for all dates on the schedule
  data?.dates?.map((d) => {
    d?.games?.map((g) => games.push(g?.gamePk?.toString()));
  });

  // Batch process all games
  while (games.length > 0) {
    // Batch size of defualt to 20
    const batch = games.splice(0, appSettings.batchSize);

    logger.debug(JSON.stringify(batch), { app: 'season' })

    try {
      await Promise.all(
        batch.map(async (g) => {
          try {
            await pipeline(g, false);
          } catch (err) {
            logger.warn(err, { app: 'season' })
          }
        })
      );
    } catch (err) {
      logger.warn(err, { app: 'season' })
    }
  }
};

module.exports = season;
