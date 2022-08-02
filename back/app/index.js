const logger = require("./logger.js");
const dataProvider = require("./data");
const server = require("./server.js")(dataProvider);

logger.log("Starting server");
server.start((port) => logger.log("Server running on port " + port));
