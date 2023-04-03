
const extract = require('../../app/pipeline/extract')

jest.mock("../../app/utilities/fetch", () => () => {});

test('should extract', async () => {
    expect(await extract('')).toBe();
  });