const Joi = require("Joi");

function validateUser(user) {
  const schema = {
    username: Joi.string().required(),
    email: Joi.string().email(),
    image: Joi.string()
      .uri()
      .optional()
  };
  return Joi.validate(user, schema);
}
module.exports = validateUser;
