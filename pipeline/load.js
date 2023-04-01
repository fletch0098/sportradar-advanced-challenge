// load.js - Load data

// Imports
const { sequelize, Sequelize, Nhl } = require("../sequelize/models");

// Extract data
const load = async (data, log = false) => {

  const response = await Nhl.bulkCreate(data, {
    fields: [
      "id",
      "gameId",
      "playerId",
      "playerName",
      "teamId",
      "teamName",
      "playerAge",
      "playerNumber",
      "playerPosition",
      "assists",
      "goals",
      "hits",
      "points",
      "penaltyMinutes",
      "opponnetTeam",
    ],
    updateOnDuplicate: ["assists", "goals", "hits", "points", "penaltyMinutes"],
  });

  // Tract Logging
  if (log == true) {
    console.log(response);
  }

  // Return
  return response;
};

module.exports = load;
