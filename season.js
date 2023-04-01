// season.js - Run ETL Pipeline for all games in a season

// Imports
const fetch = require("./utilities/node-fetch");
const pipeline = require("./pipeline/pipeline");

// Run ETL Pipeline for all games in a season
const season = async (season, log = false) => {
  // url all games from specified season
  const fullUrl = `${process.env.NHL_BASE_URL}/schedule?season=${season}`;

  // api call
  const response = await fetch(fullUrl);
  const data = await response.json();

  // Initialize empty array of games
  const games = [];

  // Parse out all gameIds for all dates on the schedule
  data?.dates?.map((d) => {
    d?.games?.map((g) => games.push(g?.gamePk?.toString()));
  });

  // Batch process all games
  while (games.length > 0) {
    // Batch size of defualt to 20
    const batch = games.splice(0, process.env.BATCH_SIZE || 20);
    try {
      await Promise.all(
        batch.map(async (g) => {
          try {
            await pipeline(g, false);
          } catch (err) {
            console.log(err);
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = season;
