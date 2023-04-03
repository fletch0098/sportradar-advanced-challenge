const fetch = require("../../app/utilities/fetch");
const nodeFetch = require("../../app/config/node-fetch");

const response = {
  ok: true,
  json: () => {
    return {};
  },
};

const failedResponse = {
  ok: false,
  status: 404,
  statusText: "Not Found",
};

jest.mock("../../app/config/node-fetch", () => jest.fn());

describe("Fetch module", () => {
  test("should fetch using node-fetch", async () => {
    nodeFetch.mockImplementation(() => response);
    expect(await fetch("")).toStrictEqual({});
  });

  test("should fetch using node-fetch", async () => {
    nodeFetch.mockImplementation(() => failedResponse);
    await expect(fetch()).rejects.toThrow(
      "Unexpected Error when fetching NHL data. status: 404 text: Not Found"
    );
  });
});
