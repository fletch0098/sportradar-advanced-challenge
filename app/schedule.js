// schedule.js - TODO: ?

// Imports
const fetch = require("./utilities/fetch");

// TODO: ?
const schedule = async (log = false) => {
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

  // Trace Logging
  if (log == true) {
    console.log(games);
  }

  return games
};

module.exports = schedule;
