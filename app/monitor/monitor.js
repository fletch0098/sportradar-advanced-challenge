// monitor.js - Monitor games in realtime

// Imports
const { appSettings, constants } = require("../config/vars");
const cronJob = require("../utilities/cronJob");
const pipeline = require("../pipeline/pipeline");
const schedule = require("./schedule");
const logger = require("../utilities/logger");

// Initialize games
const games = [];

// Monitor games in realtime
const monitor = async () => {
  cronJob("Schedule", appSettings.cronMonitorExpression, async () => {
    logger.info("Running cron Schedule", { app: "monitor" });

    const allGamesSchedule = await schedule();

    const liveGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == constants.LiveStatus
    );
    const finalGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == constants.FinalStatus
    );

    liveGamesSchedule.map((s) => {
      if (games.findIndex((g) => g.gameId == s.gameId) == -1) {
        s.task = cronJob(
          `Game:${s.gameId}`,
          appSettings.cronMonitorExpression,
          () => pipeline(s.gameId)
        );
        games.push(s);
      }
    });

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
