const cronJob = require("../app/utilities/cronJob");

test("should create cron", () => {
  const myCron = cronJob("test", "* * * * * *", () => {
    return;
  });
  expect(myCron).toBeDefined();

  // Cleanup , stop cron
  myCron.stop();
});
