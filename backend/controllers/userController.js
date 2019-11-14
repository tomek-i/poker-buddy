const debug = require("debug")("controller:user");
const validate = require("../validators/userValidator");
const User = require("../models/user");

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

  try {
    const result = await User.create(req.body);
    debug("Saving successful", result);
    return res.status(201).send(user);
  } catch (error) {
    //TODO: create utility method to wrap "500 Internal Server Error" (and other common ones) messages
    const exception = new Error("Creating User failed!");
    exception.status = 500;
    exception.error = error;
    debug("Saving to database failed!", exception);
    next(exception);
  }
};

/**
 * Returns all users.
 * @returns {?import('../models/user').UserModel[]} and array of all users
 */
exports.index = async (req, res, next) => {
  res.send("user read");
};

/**
 * Returns the user with specified username.
 * @return {?import('../models/user').UserModel} The user found with the specified username
 */
exports.findByUsername = async (req, res, next) => {
  res.send("user read");
};

exports.update = async (req, res, next) => {
  res.send("user update");
};
exports.delete = async (req, res, next) => {
  res.send("user delete");
};
