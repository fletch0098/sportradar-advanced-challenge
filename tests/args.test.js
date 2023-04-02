const args = require("../app/utilities/args");

test("should parse game args", () => {
  expect(args(["foo", "bar", "game:xxxxxxxxxxx"])).toStrictEqual({
    gameId: "xxxxxxxxxxx",
    season: undefined,
  });
});

test("should parse season args", () => {
  expect(args(["foo", "bar", "season:xxxxxxxx"])).toStrictEqual({
    gameId: undefined,
    season: "xxxxxxxx",
  });
});

test("should throw bad arg format error", async () => {
  expect(() => {
    args(["foo", "bar", "season:xxxxxxxx:X"]);
  }).toThrow("Error: Improper argument format");
});

test("should throw bad arg name error", async () => {
  expect(() => {
    args(["foo", "bar", "foobar:xxxxxxxx"]);
  }).toThrow("Error: Improper argument name");
});
