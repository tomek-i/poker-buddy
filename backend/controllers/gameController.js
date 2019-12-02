const debug = require("debug")("controller:game");
const validate = require("../validators/gameValidator");
const Game = require("../models/game");

//show all games
exports.index = async (req, res, next) => {
  const games = await Game.find().populate("players", "username");
  debug("Games found: ", games);
  res.render("games", {
    games: games
  });
};
exports.update = async (req, res, next) => {
  res.send("update game");
};

exports.delete = async (req, res, next) => {
  res.send("delete game");
};

//create a new game
exports.create = async (req, res, next) => {
  debug("Validating request body");
  const { error } = validate(req.body);

  if (error) {
    debug("Validation failed!", error);
    // respond back with '400 Bad Request' with error details
    //maybe send the whole error back? maybe with next?
    next(error);
    //return res.status(400).send(error.details[0].message);
  }

  let game = null;

  try {
    debug(req.body);
    game = new Game({
      players: req.body.players,
      table_cards: req.body.cards || null
    });
    const result = await game.save();
    debug("Saving successful", result);

    res.status(201).send(game);
  } catch (error) {
    const exception = new Error("Creating User failed!");
    exception.status = 500;
    exception.error = error;
    debug("Error creating game.", error);
    next(exception);
  }
};

exports.gameById = async (req, res, next) => {
  res.send("game by id");
};

exports.current = async (req, res, next) => {
  res.send("Current game");
};
