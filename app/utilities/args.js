// args.js - Command line args parser

// Imports
const { constants } = require("../config/vars");

// Command line args parser
const parseArgs = (arg) => {
  // Initialize
  let gameId, season;

  if (arg) {
    // Split into name and value
    const args = arg.split(":");

    // Validate format
    if (args.length != 2) {
     throw new Error("Error: Improper argument format");
    }

    // id = value
    const id = args[1];

    // game or season arguments
    switch (args[0]) {
      case constants.Game:
        gameId = id;
        break;
      case constants.Season:
        season = id;
        break;
      default:
        throw new Error("Error: Improper argument name");
    }
  }

  return { gameId, season };
};

module.exports = parseArgs;
