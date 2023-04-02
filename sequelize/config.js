const { databaseSettings } = require("../app/config/vars");

module.exports = {
  local: {
    username: databaseSettings.user,
    password: databaseSettings.password,
    database: databaseSettings.name,
    host: databaseSettings.host,
    port: 3306,
    dialect: "mysql",
    dialectOptions: {},
  },
  test: {
    username: databaseSettings.user,
    password: databaseSettings.password,
    database: databaseSettings.name,
    host: databaseSettings.host,
    port: 3306,
    dialect: "mysql",
    dialectOptions: {},
  },
  production: {
    username: databaseSettings.user,
    password: databaseSettings.password,
    database: databaseSettings.name,
    host: databaseSettings.host,
    port: 3306,
    dialect: "mysql",
    dialectOptions: {},
  },
};
