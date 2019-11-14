const Joi = require("Joi");

function validateUser(user) {
  const schema = {
    username: Joi.string()
      .required()
      .alphanum(),
    email: Joi.string()
      .email()
      .required()
  };
  return Joi.validate(user, schema);
}
module.exports = validateUser;
