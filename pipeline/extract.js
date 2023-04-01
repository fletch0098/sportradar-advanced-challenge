// extract.js - Extracting data

// Imports
const fetch = require("../utilities/node-fetch");

// Extract data
const extract = async (url, log = false) => {

    const fullUrl = `${process.env.NHL_BASE_URL}${url}`

  // api call
  const response = await fetch(fullUrl);
  const data = await response.json();

  // Tract Logging
  if(log == true){
    console.log(data);
  }

  // Return
  return data;
};

module.exports = extract;
