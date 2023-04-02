// fetch.js - Fetch NHL data

// Imports
const nodeFetch = require("../config/node-fetch");
const { nhl } = require('../config/vars')

// Fetch NHL data
const fetch = async (url, log = false) => {

   // full nhl url
   const fullUrl = `${nhl.baseUrl}${url}`;

   // api call
   const response = await nodeFetch(fullUrl);
   const data = await response.json();

   if(log == true){
    console.log(data)
   }

   return data

};

module.exports = fetch;
