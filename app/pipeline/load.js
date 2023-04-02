// load.js - Load data

// Imports
const { databaseSettings } = require('../config/vars')
const { sequelize, Sequelize, Nhl } = require("../models");
const logger = require("../utilities/logger");

// Load data
const load = async (data) => {

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

  logger.debug(JSON.stringify(response), { app: 'load' })

  // Return
  return response;
};

module.exports = load;