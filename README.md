# sportradar-advanced-challenge

Data Pipeline using NHL Data

# Description

This ETL pipeline stores player data for NHL games.  It has 3 execution modes, load one game, load an entire season, and monitor live games.

## Requirements

* Git
* Node
* MySql

## Installation

Clone the repo, install the dependencies, and spin up the database. 

```bash
git clone https://github.com/fletch0098/sportradar-advanced-challenge
cd sportradar-advanced-challenge
```

```bash
npm install
```

```bash
npm run db:up
```

## Settings

The apps settings all have defaults with no sensitive data, but if you wish to modify them create a .env from the .env.example.

* ENV="local"
* APP_NAME="sportradar-advanced-challenge"
* DB_NAME="sportsradar_db"
* DB_USER="root"
* DB_PASS="root"
* DB_HOST="localhost"
* DB_LOGGING="false"
* NHL_BASE_URL="https://statsapi.web.nhl.com/api/v1"
* BATCH_SIZE=20
* CRON_MONITOR_EXPRESSION="* * * * *"
* LOG_LEVEL="info"

## Game Execution Mode

Game execution mode loads data for one game specified on the command line argument 'game:xxxxxxxxxx' 

```bash
npm start game:2022021206
```
or

```bash
npm run debug game:2022021206
```

## Season Execution Mode

Season execution mode loads data for all games in a season specified on the command line argument 'season:xxxxxxxx' 

```bash
npm start season:20212022
```
or

```bash
npm run debug season:20212022
```

## Monitor Execution Mode

Monitor execution mode monitors live games on the schedule, and loads their data updating on a specified interval.  This mode has no arguments.

```bash
npm start
```

or

```bash
npm run debug
```

## Data

The newly loaded data is placed in a tabble named 'nhl' in the database.  It can be queried at any time, and since the data is upserted, it is always up to date and acurate according to the refresh schedule.  Its structure is:

* id - GameIdPlayerId
* Player ID
* Player Name
* Team ID
* Team Name
* Player Age
* Player Number
* Player Position
* Assists
* Goals
* Hits
* Points
* Penalty Minutes
* Opponent Team

## License

## Logs
Logs can be found in the /logs folder.  When running in production there is no console log.

[GNU](https://choosealicense.com/licenses/gpl-3.0/)