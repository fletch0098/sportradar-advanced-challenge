const season = require("../../app/season/season");

jest.mock("../../app/utilities/fetch", () => () => {});

jest.mock("../../app/pipeline/pipeline", () => () => []);

describe("Season module", () => {
  test("should run pipeline for an entire season", async () => {
    expect(await season("")).toBe();
  });
});
