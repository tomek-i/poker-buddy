const mongoose = require("mongoose");
const GameModel = require("../../../models/game");
const UserModel = require("../../../models/user");
const { setupDB } = require("../../../jest-db-setup");
setupDB("create-game-testing");
const player1Data = {
  username: "username1",
  password: "password1",
  email: "email1@example.com"
};
const player2Data = {
  username: "username2",
  password: "password2",
  email: "email2@example.com"
};

//TODO: need more test cases for the DB schema
/**
 *  Insert User into Database successfully. (Test Normal Use Case)
 *  Insert User with Invalid Field. (Test on Schema)
 *  Insert User without Required Field. (Test on Validation)
 **/

describe("Create game in Database", () => {
  it("create & save a new game with 2 players successfully", async done => {
    const game = new GameModel();

    const [player1, player2] = await Promise.all([
      new UserModel(player1Data).save(),
      new UserModel(player2Data).save()
    ]);
    game.players.push(player1);
    game.players.push(player2);

    const savedGame = await game.save();

    expect(savedGame._id).toBeDefined();
    expect(savedGame.players.length).toBe(2);
    done();
  });

  it("create & save a new game with 1 player successfully", async done => {
    const game = new GameModel();

    const player1 = await new UserModel(player1Data).save();

    game.players.push(player1);

    const savedGame = await game.save();

    expect(savedGame._id).toBeDefined();
    expect(savedGame.players.length).toBe(1);
    done();
  });

  //TODO: save with table cards
  //TODO: save with winner/second-winner
});
