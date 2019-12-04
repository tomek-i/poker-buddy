const debug = require("debug")("model:game");
var mongoose = require("mongoose");
const config = require("config");

const CardSchema = new mongoose.Schema({
  suit: {
    type: String,
    required: true,
    match: [/^[SCDH]+$/, "is invalid"] // S C H D ?
  },
  value: {
    type: String,
    required: true,
    match: [/^[0-9 JQKASCDH]+$/, "is invalid"] //match only 0-9 and J Q K A
  }
});

/**
 * @type {mongoose.Schema<GameModel>}
 */
const GameSchema = new mongoose.Schema(
  {
    players: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          unique: true
        }
      ],

      required: true
    },

    winner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    winner_hand: {
      type: [CardSchema],
      default: null
    },

    second_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    second_hand: {
      type: [CardSchema],
      default: null
    },

    table_cards: {
      type: [CardSchema],
      default: null
    }
  },
  { timestamps: true }
);

/**
 * @typedef GameModel
 * @type {object}
 */

/**
 * @type {GameModel}
 */
module.exports = mongoose.model("Game", GameSchema);
