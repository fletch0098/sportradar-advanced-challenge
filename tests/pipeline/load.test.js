const load = require("../../app/pipeline/load");

jest.mock("../../app/models", () => ({
  ...jest.requireActual("../../app/models"),
  Nhl: {
    bulkCreate: () => {
      return {};
    },
  },
}));
describe("Load module", () => {
  test("should load data", async () => {
    expect(await load([])).toStrictEqual({});
  });

  test("should throw load error", async () => {
    await expect(load()).rejects.toThrow(
      "Error: Data must be an array to load"
    );
  });
});
