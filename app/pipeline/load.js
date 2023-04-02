// load.js - Load data

// Imports
const { databaseSettings } = require('../config/vars')
const { sequelize, Sequelize, Nhl } = require("../models");

// Extract data
const load = async (data, log = false) => {

  const response = await Nhl.bulkCreate(data, {
    logging: databaseSettings.log, // TODO: Why is this not global?
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
