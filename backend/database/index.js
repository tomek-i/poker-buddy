const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("db:init");

async function connect() {
  const db_uri = `${config.get("db.host")}/${config.get("db.name")}`;
  debug("Connecting to database:", db_uri);
  try {
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    debug("connection successful!");

    //TODO: DRY, same logic in app.js to identify if running in debug)
    /*
    mongoose.set(
      "debug",
      config.get("mode") === "DEBUG" || app.get("env") === "development"
    );
    */

    debug("Loading models ..");
    require("../models");
  } catch (error) {
    const ex = new Error("Database connection failed.", error);
    debug(ex);
    throw ex;
  }
}

module.exports = connect;
