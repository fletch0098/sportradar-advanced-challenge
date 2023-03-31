// sequelize.js - Sequelize config and connection

// Imports
const Sequelize = require("sequelize");

// Connect 
const connect = async () => {

  // Init sequelize
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      logging: process.env.DB_LOGGING == "true"
    },
  );

  // Connect
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);

    // Exit on conenction error
    process.exit(1);
  }

};

module.exports = { connect };
