const UserModel = require("../models/user");
const debug = require("debug")("db:seed");
const config = require("config");

exports.createAdmin = async function CreateAdmin() {
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
  });
};

exports.createPlayers = async function createPlayers() {
  const playerData = [
    {
      username: "tomek",
      isAdmin: true,
      password: "Mondfahrt?4",
      email: "tomek.iwainski@gmail.com"
    },
    {
      username: "phil",
      isAdmin: false,
      password: "qwerty",
      email: "phil@example.com"
    },
    {
      username: "craig",
      isAdmin: false,
      password: "qwerty",
      email: "craig@example.com"
    },
    {
      username: "bob",
      isAdmin: false,
      password: "qwerty",
      email: "bob@example.com"
    }
  ];

  try {
    //map player data to model
    const players = playerData.map(player => {
      return new UserModel(player);
    });

    const arr = players.map(model => {
      // check if the player already exists
      return UserModel.countDocuments({
        username: model.username
      })
        .then(count => {
          if (count === 0) {
            debug(`Creating player '${model.username}'.`);
            return model.save();
          } else {
            debug(`Player '${model.username}' already existed.`);
          }
        })
        .catch(error => {
          console.log("ERROR: ", error);
        });
    });

    //create a new promise which waits for all
    const results = await Promise.all(arr);
    //NOTE: the below seems to not encrypt the password...
    //  const results = await UserModel.insertMany(playerData);

    return results;
  } catch (error) {
    debug("Error seeding players: ", error);
    throw error;
  }
};
