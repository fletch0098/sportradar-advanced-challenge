'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nhls', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      gameId: {
        type: Sequelize.STRING
      },
      playerId: {
        type: Sequelize.STRING
      },
      playerName: {
        type: Sequelize.STRING
      },
      teamId: {
        type: Sequelize.STRING
      },
      teamName: {
        type: Sequelize.STRING
      },
      playerAge: {
        type: Sequelize.STRING
      },
      playerNumber: {
        type: Sequelize.STRING
      },
      playerPosition: {
        type: Sequelize.STRING
      },
      assists: {
        type: Sequelize.INTEGER
      },
      goals: {
        type: Sequelize.INTEGER
      },
      hits: {
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.INTEGER
      },
      penaltyMinutes: {
        type: Sequelize.STRING
      },
      opponnetTeam: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nhls');
  }
};

// Player ID
// Player Name
// Team ID
// Team Name
// Player Age
// Player Number
// Player Position
// Assists
// Goals
// Hits
// Points
// Penalty Minutes
// Opponnet Team