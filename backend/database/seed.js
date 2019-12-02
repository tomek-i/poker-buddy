const UserModel = require("../models/user");
const debug = require("debug")("db:seed");
async function createPlayers() {
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
  return new Promise(async function(resolve, reject) {
    try {
      //map player data to model
      const players = playerData.map(player => {
        return new UserModel(player);
      });
      //create a new promise which waits for all
      const results = await Promise.all(
        players.map(async model => {
          // check if the player already exists
          const count = await UserModel.countDocuments({
            username: model.username
          });
          if (count === 0) {
            debug(`Creating player '${model.username}'.`);
            return model.save();
          } else {
            debug(`Player '${model.username}' already existed.`);
          }
        })
      );
      //NOTE: the below seems to not encrypt the password...
      //  const results = await UserModel.insertMany(playerData);
      resolve(results);
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = createPlayers;
