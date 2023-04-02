// cronJob.js - Create Cron Jobs

// Imports
const CronJob = require("cron").CronJob;
const logger = require('./logger')

// Create Cron Jobs
const cronJob = (name, expression, callback) => {

  logger.info(`Creating cron ${name}:${expression}`, { app: 'cronJob' })

  const start = true,
    runOnInit = true;
  const onComplete = null,
    timezone = null,
    context = null;
  return new CronJob(
    expression,
    callback,
    onComplete,
    start,
    timezone,
    context,
    runOnInit
  );
};

module.exports = cronJob;
