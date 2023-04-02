// exit.js - Exit app

// Exitt app
const exit = (message = "Execution Terminated", code = 0) => {
  console.log(message);

  // Exit
  process.exit(code);
};

module.exports = exit;
