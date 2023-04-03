const extract = require("../../app/pipeline/extract");

jest.mock("../../app/utilities/fetch", () => () => {});

describe("Extract module", () => {
  test("should extract", async () => {
    expect(await extract("")).toBe();
  });
});
