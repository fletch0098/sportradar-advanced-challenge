const args = require("../../app/utilities/args");

test("should parse game args", () => {
  expect(args("game:xxxxxxxxxxx")).toStrictEqual({
    gameId: "xxxxxxxxxxx",
    season: undefined,
  });
});

test("should parse season args", () => {
  expect(args("season:xxxxxxxx")).toStrictEqual({
    gameId: undefined,
    season: "xxxxxxxx",
  });
});

test("should throw bad arg format error", async () => {
  expect(() => {
    args("season:xxxxxxxx:X");
  }).toThrow("Error: Improper argument format");
});

test("should throw bad arg name error", async () => {
  expect(() => {
    args("foobar:xxxxxxxx");
  }).toThrow("Error: Improper argument name");
});
