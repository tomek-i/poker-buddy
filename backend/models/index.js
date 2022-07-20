const debug = require("debug")("db:models");
debug("Loading user model ...");
require("./user");
debug("Loading game model ...");
require("./game");
