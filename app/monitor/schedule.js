// schedule.js - TODO: ?

// Imports
const fetch = require("../utilities/fetch");
const logger = require("../utilities/logger");

// TODO: ?
const schedule = async () => {
  // url all games from specified season
  const url = `/schedule`;

  // api call
  const data = await fetch(url);

  // Initialize empty array of games
  const games = [];

  // Parse out all gameIds for all dates on the schedule
  data?.dates?.map((d) => {
    d?.games?.map((g) =>
      games.push({
        gameId: g?.gamePk?.toString(),
        status: g?.status?.abstractGameState,
      })
    );
  });

  logger.info(`${games.length} Games found on the schedule`, { app: 'schedule' })

  logger.debug(JSON.stringify(games), { app: 'schedule' })

  return games
};

module.exports = schedule;
