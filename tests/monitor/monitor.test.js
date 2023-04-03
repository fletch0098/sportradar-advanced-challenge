const monitor = require("../../app/monitor/monitor");

jest.mock("../../app/utilities/cronJob", () => () => {});

describe("Monitor module", () => {
  test("should monitor", async () => {
    expect(await monitor()).toStrictEqual();
  });
});
