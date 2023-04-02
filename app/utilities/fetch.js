// fetch.js - Fetch NHL data

// Imports
const nodeFetch = require("../config/node-fetch");
const { nhl } = require('../config/vars')
const logger = require('./logger')

// Fetch NHL data
const fetch = async (url) => {

   // full nhl url
   const fullUrl = `${nhl.baseUrl}${url}`;

   // api call
   const response = await nodeFetch(fullUrl);
   const data = await response.json();

   logger.debug(JSON.stringify(data), { app: 'fetch' })

   return data

};

module.exports = fetch;
