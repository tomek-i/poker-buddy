const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("db:init");
const UserModel = require("../models/user");
const createPlayers = require("./seed");

function connect() {
  const db_uri = `${config.get("db.host")}/${config.get("db.name")}`;
  debug("connecting to database:", db_uri);

  mongoose
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

      UserModel.countDocuments({ isAdmin: true }, async (err, result) => {
        if (result === 0) {
          const adminData = {
            username: config.get("admin.username"),
            password: config.get("admin.password"),
            email: config.get("admin.email"),
            isAdmin: true
          };

          debug("No admin user found, creating admin account.", adminData);
          try {
            const admin = await new UserModel(adminData).save();
            debug("Admin successfully created: ", admin);
          } catch (error) {
            debug("Creating admin account failed!", error);
            process.exit(1);
          }
        }

        if (config.get("db.seed")) {
          try {
            debug("seeding players");
            await createPlayers();
            debug("seeding players completed");
          } catch (error) {
            debug("seeding players failed.", error);
          }
        }
      });
    });
}

module.exports = connect;
