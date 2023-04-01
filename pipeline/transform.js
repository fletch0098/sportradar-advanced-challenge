// transform.js - Transform data

// Imports

const _parsePlayerObject = (playerObject, gameId, opponnetTeam) => {
  return Object.entries(playerObject).map(([key, value]) => {

    const person = value?.person
    const currentTeam = value?.person?.currentTeam

    const stats =
     person?.primaryPosition?.name == "Goalie"
        ? value?.stats?.goalieStats
        : value?.stats?.skaterStats;

    const assists = stats?.assists || 0;
    const goals = stats?.goals || 0;
    const points = assists + goals;

    return {
      id: `${gameId}${currentTeam?.id}${person?.id}`,
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
const transform = async (data, log = false) => {
  const gameId = data.gameId;

  const homeTeam = data.gameData.teams.home.team.name;
  const awayTeam = data.gameData.teams.away.team.name;
  const homePlayersObject = data.gameData.teams.home.players;
  const awayPlayersObject = data.gameData.teams.away.players;

  const transformedData = [
    ..._parsePlayerObject(homePlayersObject, gameId, awayTeam),
    ..._parsePlayerObject(awayPlayersObject, gameId, homeTeam),
  ];

  // id - GameIdTeamIdPlayerId
  // gameId - GameId
  // playerId - id.person.id
  // playerName - id.person.fullName
  // teamId - id.person.currentTeam.id
  // teamName - id.person.currentTeam.name
  // playerAge - id.person.currentAge
  // playerNumber - id.person.primaryNumber
  // playerPosition - id.person.primaryPosition.name
  // assists - id.stats.skaterStats.assists
  // goals - id.stats.skaterStats.goals
  // hits - id.stats.skaterStats.hits
  // points - id.stats.skaterStats.goals + id.stats.skaterStats.assists
  // penaltyMinutes - id.stats.skaterStats.penaltyMinutes
  // opponnetTeam - teams.away/home.team.name

  // teams.away/home.players

  // const transformedData = require("../mock/transformedData.json");

  // Tract Logging
  if (log == true) {
    console.log(transformedData);
  }

  // Return
  return transformedData;
};

module.exports = transform;
