// extract.js - Extracting data

// Imports
const fetch = require("../utilities/fetch");

// Extract data
const extract = async (url, log = false) => {

  // api call
  const data = await fetch(url);

  // Tract Logging
  if(log == true){
    console.log(data);
  }

  // Return
  return data;
};

module.exports = extract;
