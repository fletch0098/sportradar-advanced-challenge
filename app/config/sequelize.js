// sequelize.js - Sequelize config and connection

// Imports
const { databaseSettings } = require("./vars");
const logger = require('../utilities/logger')
const Sequelize = require("sequelize");

// Connect
const connect = async () => {
  // Init sequelize
  const sequelize = new Sequelize(
    databaseSettings.name,
    databaseSettings.user,
    databaseSettings.password,
    {
      host: databaseSettings.host,
      dialect: "mysql",
      logging: databaseSettings.log,
    }
  );

  // Connect
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.', { app: 'sequelize' })
};

module.exports = connect;
