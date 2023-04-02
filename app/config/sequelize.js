// sequelize.js - Sequelize config and connection

// Imports
const { databaseSettings } = require("./vars");
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
    console.log("Connection has been established successfully.");
};

module.exports = connect;
