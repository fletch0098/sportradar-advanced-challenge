const season = require("../../app/season/season");

jest.mock("../../app/utilities/fetch", () => () => {});

jest.mock("../../app/pipeline/pipeline", () => () => []);

test("should run pipeline for an entire season", async () => {
  expect(await season("")).toBe();
});
