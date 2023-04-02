# sportradar-advanced-challenge

Data Pipeline using NHL Data

# Description

This ETL pipeline stores player data for NHL games.  It has 3 execution modes, load one game, load an entire season, and monitor live games.

## Requirements

* Node
* MySql
* Git

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

## Game Execution Mode

Game execution mode loads data for one game specified on the command line argument 'game:xxxxxxxxxx' 

```bash
npm start game:2022021206
```

## Season Execution Mode

Season execution mode loads data for all games in a season specified on the command line argument 'season:xxxxxxxx' 

```bash
npm start season:20212022
```

## Monitor Execution Mode

Monitor execution mode monitors live games on the schedule, and loads their data updating on a specified interval.  This mode has no arguments.

```bash
npm start
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
* Opponnet Team

## License

[GNU](https://choosealicense.com/licenses/gpl-3.0/)