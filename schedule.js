// schedule.js - TODO: ?

// Imports
const fetch = require("./utilities/node-fetch");
const pipeline = require("./pipeline/pipeline");

// TODO: ?
const schedule = async (log = false) => {
  // url all games from specified season
  const fullUrl = `${process.env.NHL_BASE_URL}/schedule`;

  // api call
  const response = await fetch(fullUrl);
  const data = await response.json();

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

  // Trace Logging
  if (log == true) {
    console.log(games);
  }

  return games
};

module.exports = schedule;
