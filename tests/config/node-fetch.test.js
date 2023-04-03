describe("NodeFetch module", () => {
  test("should import node-fetch", () => {
    expect(require("../../app/config/node-fetch")).toBeDefined();
  });
});
