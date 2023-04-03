// monitor.js - Monitor games in realtime

// Imports
const { appSettings, constants } = require("../config/vars");
const cronJob = require("../utilities/cronJob");
const pipeline = require("../pipeline/pipeline");
const schedule = require("./schedule");
const logger = require("../utilities/logger");

// games we are monitoring, and thier cronJobs
const games = [];

// Monitor games in realtime
const monitor = async () => {

  // Create a schedule monitor cron job
  cronJob("Schedule", appSettings.cronMonitorExpression, async () => {
    logger.info("Running cron Schedule", { app: "monitor" });

    // Get all the games on the schedule
    const allGamesSchedule = await schedule();

    // Live games - need to monitor
    const liveGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == constants.LiveStatus
    );

    // Final games - do not monitor
    const finalGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == constants.FinalStatus
    );

    // If live game is not being monitored, monitor it
    liveGamesSchedule.map((s) => {
      if (games.findIndex((g) => g.gameId == s.gameId) == -1) {

        // Create a game monitor cron job
        s.task = cronJob(
          `Game:${s.gameId}`,
          appSettings.cronMonitorExpression,
          () => pipeline(s.gameId)
        );

        games.push(s);
      }
    });

    // Final games need to be run once more, then stopped, and removed
    finalGamesSchedule.map((f) => {
      const index = games.findIndex((x) => x.gameId == f.gameId);
      if (index != -1) {
        logger.info(`Final run for ${f.gameId}`, { app: "monitor" });
        pipeline(f.gameId);
        games[index].task.stop();
        games.splice(index, 1);
      }
    });

    if(games.length == 0){
      logger.info(`Currently no games to monitor`, { app: "monitor" });
    }

    games.map((x) => {
      logger.info(`Monitoring game: ${x.gameId}, status: ${x.status}, { app: "monitor" }`);
    });
  });
};

module.exports = monitor;
