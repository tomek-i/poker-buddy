const server = require("./server");
const debug = require("debug")("app:server");
const config = require("config");

const port = config.get("port") || 3000;

/**
 * Server Activation
 */

debug("listening");
server.listen(port, async () => {
  debug("listening on port", port);
  debug(`server ready! visit: http://localhost:${port}`);
});

module.exports = server;
