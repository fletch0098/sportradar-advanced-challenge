// nhl.js - NHL Model

// id
// gameId
// playerId
// playerName
// teamId
// teamName
// playerAge
// playerNumber
// playerPosition
// assists
// goals
// hits
// points
// penaltyMinutes
// opponnetTeam

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nhl.init({
    id: { // GameIdTeamIdPlayerId
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    gameId: {
      type: DataTypes.STRING
    },
    playerId: {
      type: DataTypes.STRING
    },
    playerName: {
      type: DataTypes.STRING
    },
    teamId: {
      type: DataTypes.STRING
    },
    teamName: {
      type: DataTypes.STRING
    },
    playerAge: {
      type: DataTypes.STRING
    },
    playerNumber: {
      type: DataTypes.STRING
    },
    playerPosition: {
      type: DataTypes.STRING
    },
    assists: {
      type: DataTypes.INTEGER
    },
    goals: {
      type: DataTypes.INTEGER
    },
    hits: {
      type: DataTypes.INTEGER
    },
    points: {
      type: DataTypes.INTEGER
    },
    penaltyMinutes: {
      type: DataTypes.STRING
    },
    opponnetTeam: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Nhl',
  });
  return Nhl;
};