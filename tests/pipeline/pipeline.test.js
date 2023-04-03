const pipeline = require("../../app/pipeline/pipeline");

jest.mock("../../app/pipeline/extract", () => () => {});
jest.mock("../../app/pipeline/load", () => () => {});
jest.mock("../../app/pipeline/transform", () => ({
  transform: () => {},
}));

describe("Pipeline module", () => {
  test("should run pipeline", async () => {
    expect(await pipeline("")).toBe();
  });
});
