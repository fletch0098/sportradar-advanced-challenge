
const app = require('../app/app');
const monitor = require('../app/monitor/monitor');
const pipeline = require('../app/pipeline/pipeline');
const season = require('../app/season/season');
const args = require('../app/utilities/args');

jest.mock("../app/config/sequelize", () => () => {});
jest.mock("../app/utilities/args",  () => jest.fn());
jest.mock("../app/monitor/monitor", () => jest.fn());
jest.mock("../app/pipeline/pipeline", () => jest.fn());
jest.mock("../app/season/season", () => jest.fn());
jest.mock("../app/utilities/exit", () => () => {});

describe("App module", () => {

    test('should run app in monitor mode', async () => {

        args.mockImplementation(() => () => {});

        await app()

        expect(monitor).toHaveBeenCalledTimes(1);
      });

      test('should run app in game mode', async () => {

        args.mockImplementation(() => { return {gameId: '123'}});

        await app('game:123')

        expect(pipeline).toHaveBeenCalledTimes(1);
      });

      test('should run app in season mode', async () => {

        args.mockImplementation(() => { return {season: '123'}});

        await app('season:123')

        expect(season).toHaveBeenCalledTimes(1);
      });

  });


