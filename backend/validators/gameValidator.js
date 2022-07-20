const Joi = require("Joi");
const validateCard = require("./cardValidator");
//TODO: can we use the card validator??

function validateGame(game) {
  const schema = {
    players: Joi.array()
      .min(2)
      .max(8)
      .unique(),
    winner_id: Joi.string(),
    winner_hand: Joi.array().items({
      suit: Joi.string()
        .valid("H S C D".split(" "))
        .min(1)
        .max(1),
      value: Joi.string()
        .valid("2 3 4 5 6 7 8 9 10 J Q K A".split(" "))
        .min(1)
        .max(2)
    }),
    second_id: Joi.string(),
    second_hand: Joi.array().items({
      suit: Joi.string()
        .valid("H S C D".split(" "))
        .min(1)
        .max(1),
      value: Joi.string()
        .valid("2 3 4 5 6 7 8 9 10 J Q K A".split(" "))
        .min(1)
        .max(2)
    }),
    table_cards: Joi.array().items({
      suit: Joi.string()
        .valid("H S C D".split(" "))
        .min(1)
        .max(1),
      value: Joi.string()
        .valid("2 3 4 5 6 7 8 9 10 J Q K A".split(" "))
        .min(1)
        .max(2)
    })
  };

  return Joi.validate(game, schema);
}
module.exports = validateGame;
