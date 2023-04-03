// transform.js - Transform data

// Imports
const { constants } = require('../config/vars')
const logger = require("../utilities/logger");

// Transform Player object to array of keys
const parsePlayerObject = (playerObject = {}, gameId, opponnetTeam) => {
  return Object.entries(playerObject).map(([key, value]) => {

    const person = value?.person
    const currentTeam = value?.person?.currentTeam

    // Golie stats are different
    const stats =
     person?.primaryPosition?.name == constants.Goalie
        ? value?.stats?.goalieStats
        : value?.stats?.skaterStats;

    const assists = stats?.assists || 0;
    const goals = stats?.goals || 0;
    const points = assists + goals;

    return {
      id: `${gameId}${person?.id}`,
      gameId,
      playerId: person?.id,
      playerName: person?.fullName,
      teamId: currentTeam?.id,
      teamName: currentTeam?.name,
      playerAge: person?.currentAge,
      playerNumber: person?.primaryNumber,
      playerPosition: person?.primaryPosition?.name,
      assists: assists,
      goals: goals,
      hits: stats?.hits || 0,
      points: points,
      penaltyMinutes: stats?.penaltyMinutes,
      opponnetTeam: opponnetTeam,
    };
  });
};

// Transform data
const transform = (data) => {
  const gameId = data.gameId;

  const homeTeam = data.gameData?.teams?.home?.team?.name;
  const awayTeam = data.gameData?.teams?.away?.team?.name;
  const homePlayersObject = data.gameData?.teams?.home?.players;
  const awayPlayersObject = data.gameData?.teams?.away?.players;

  // Transfor and concat both teams
  const transformedData = [
    ...parsePlayerObject(homePlayersObject, gameId, awayTeam),
    ...parsePlayerObject(awayPlayersObject, gameId, homeTeam),
  ];

  logger.debug(JSON.stringify(transformedData), { app: 'transform' })

  // Return
  return transformedData;
};

module.exports = { transform, parsePlayerObject };
