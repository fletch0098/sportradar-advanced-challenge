const exit = require("../../app/utilities/exit");

describe("Exit module", () => {
  test("should exit with code", async () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => {
      exit(undefined, 0);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(0);
    mockExit.mockRestore();
  });
});
