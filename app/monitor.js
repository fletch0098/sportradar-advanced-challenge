// monitor.js - Monitor games in realtime

// Imports
const { appSettings, constants } = require('./config/vars')
const cronJob = require("./utilities/cronJob");
const pipeline = require("./pipeline/pipeline");
const schedule = require("./schedule");

const games = [];

// Monitor games in realtime
const monitor = async (log = false) => {
  cronJob("Schedule", appSettings.cronMonitorExpression, async () => {
    const allGamesSchedule = await schedule();

    const liveGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == constants.LiveStatus
    );
    const finalGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == constants.FinalStatus
    );

    liveGamesSchedule.map((s) => {
      if (games.findIndex((g) => g.gameId == s.gameId) == -1) {
        s.task = cronJob(`Game:${s.gameId}`, appSettings.cronMonitorExpression, () =>
          pipeline(s.gameId)
        );
        games.push(s);
      }
    });

    finalGamesSchedule.map((f) => {
      const index = games.findIndex((x) => x.gameId == f.gameId);
      if (index != -1) {
        console.log(`Final run for ${f.gameId}`);
        pipeline(f.gameId);
        games[index].task.stop();
        games.splice(index, 1);
      }
    });

    if (log == true) {
      games.map((x) => {
        console.log(`game: ${x.gameId}, status: ${x.status}`);
      });
    }
  });
};

module.exports = monitor;
