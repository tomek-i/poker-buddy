const Joi = require("Joi");

function validateUser(user) {
  const schema = {
    firstname: Joi.string()
      .optional()
      .regex(/^[a-zA-Z]+$/), //no invalid chars, alpha
    lastname: Joi.string()
      .optional()
      .regex(/^[a-zA-Z]+$/), //no invalid chars, alpha
    username: Joi.string()
      .required()
      .alphanum()
      .min(4)
      .max(15),
    email: Joi.string()
      .email()
      .required()
      .min(5)
      .max(100),
    password: Joi.string()
      .required()
      .min(6)
      .max(255)
  };
  return Joi.validate(user, schema);
}
module.exports = validateUser;
