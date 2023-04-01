const parseArgs = () => {

    // Initialize
      let gameId, season;
  
      // Parse first command line argument
      const arg = process.argv[2];
  
      if (arg) {
  
        // Split into name and value
        const args = arg.split(":");
  
        // Error/exit if improper format
        if (args.length != 2) {
          console.log("Error: Improper argument format");
          process.exit(1);
        }
    
        // id = value
        const id = args[1];
    
        // game or season arguments
        // TODO: validation
        switch (args[0]) {
          case "game":
            gameId = id;
            break;
          case "season":
            season = id;
            break;
          default:
            console.log("Error: Improper argument name");
            process.exit(1);
        }
      }
  
      return { gameId, season }
  
  }

  module.exports = parseArgs;