// monitor.js - Monitor games in realtime

// Imports
const cronJob = require("./utilities/cronJob");
const pipeline = require("./pipeline/pipeline");
const schedule = require("./schedule");

const games = [];

// Monitor games in realtime
const monitor = async (season, log = false) => {
  cronJob("Schedule", "*/15 * * * * *", async () => {
    const allGamesSchedule = await schedule();

    const liveGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == "Live"
    );
    const finalGamesSchedule = allGamesSchedule.filter(
      (x) => x.status == "Final"
    );

    liveGamesSchedule.map((s) => {
      if (games.findIndex((g) => g.gameId == s.gameId) == -1) {
        s.task = cronJob(`Game:${s.gameId}`, "*/15 * * * * *", () =>
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
