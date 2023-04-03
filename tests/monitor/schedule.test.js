const schedule = require("../../app/monitor/schedule");

jest.mock("../../app/utilities/fetch", () => () => {});

describe("Schedule module", () => {
  test("should fetch schedule data", async () => {
    expect(await schedule("")).toStrictEqual([]);
  });
});
