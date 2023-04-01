// transform.js - Transform data

// Imports

// Transform data
const transform = async (data, log = false) => {

  const transformedData = require('../mock/transformedData.json')

  // Tract Logging
  if(log == true){
    console.log(transformedData);
  }

  // Return
  return transformedData;
};

module.exports = transform;
