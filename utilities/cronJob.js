// cronJob.js - Create Cron Jobs

// Imports
const CronJob = require("cron").CronJob;

// Create Cron Jobs
const cronJob = (name, expression, callback) => {
  console.log(`Creating cron ${name}`);

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
