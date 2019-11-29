const Joi = require("Joi");

function validateCard(card) {
  const schema = {
    suit: Joi.string()
      .allow("")
      .valid("H S C D".split(" "))
      .min(1)
      .max(1),
    value: Joi.string()
      .allow("")
      .valid("2 3 4 5 6 7 8 9 10 J Q K A".split(" "))
      .min(1)
      .max(2)
  };

  return Joi.validate(card, schema);
}
module.exports = validateCard;
