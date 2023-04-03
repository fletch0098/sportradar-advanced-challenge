
const monitor = require('../../app/monitor/monitor')

jest.mock("../../app/utilities/cronJob", () => () => {});

test('should monitor', async () => {
    expect(await monitor()).toStrictEqual();
  });