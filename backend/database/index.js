const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("db:init");

async function connect() {
  const db_uri = `${config.get("db.host")}/${config.get("db.name")}`;
  debug("connecting to database:", db_uri);

  await mongoose
    .connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .catch(error => {
      const ex = new Error("Database connection failed.", error);
      debug(ex);
      throw ex;
    })
    .then(() => {
      debug("database connection successful.");

      debug("loading models ...");
      require("../models");
      debug("all models have been loaded.");
    });
}

module.exports = connect;
