const {
  transform,
  parsePlayerObject,
} = require("../../app/pipeline/transform");

describe("Transform module", () => {
  test("should parse object keys to array", async () => {
    expect(parsePlayerObject({})).toStrictEqual([]);
  });

  jest.mock("../../app/pipeline/transform", () => ({
    parsePlayerObject: () => [],
  }));


  test("should transform nhl boxscore data to our data array", async () => {
    expect(transform([])).toStrictEqual([]);
  });
});
