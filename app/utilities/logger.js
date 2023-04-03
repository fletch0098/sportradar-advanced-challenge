const { createLogger, format, transports } = require("winston");
const { combine, timestamp, errors, json } = format;
const { appSettings, log } = require("../config/vars");

const logger = createLogger({
  level: log.level,
  format: combine(
    errors(), // <-- use errors format
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),
  defaultMeta: { app: appSettings.appName },
  transports: [

    // Add a silent logger for testing
    new transports.Console({ silent: true }),
  ],
});

// if not testing, add file loggers
if(appSettings.env != 'test'){
  logger.add(
    new transports.File({ filename: "logs/error.log", level: "error" })
  );
  logger.add(
    new transports.File({ filename: "logs/combined.log" })
  );
}

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (appSettings.env !== "production" && appSettings.env !== "test") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}

module.exports = logger;
