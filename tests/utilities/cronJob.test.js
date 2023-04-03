const cronJob = require("../../app/utilities/cronJob");

describe("ConJob module", () => {
  test("should create cron", () => {
    const myCron = cronJob("test", "* * * * * *", () => {
      return;
    });
    expect(myCron).toBeDefined();

    // Cleanup , stop cron
    myCron.stop();
  });
});
