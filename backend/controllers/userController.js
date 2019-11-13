const debug = require("debug")("controller:user");
const validate = require("../validators/userValidator");
const User = require("../models/user");

exports.create = async (req, res, next) => {
  debug("Validating request body");
  const { error } = validate(req.body);

  if (error) {
    debug("Validation failed!", error);
    // respond back with '400 Bad Request' with error details
    //TODO: maybe send the whole error back?
    return res.status(400).send(error.details[0].message);
  }

  const user = new User(req.body);
  try {
    debug("Saving User to database.", user);
    await user.save();
    debug("Saving successful", user);
    return res.send(user);
  } catch (error) {
    //TODO: create utility method to wrap "500 Internal Server Error" (and other common ones) messages
    const exception = new Error("Creating User failed!");
    exception.status = 500;
    exception.error = error;
    debug("Saving to database failed!", exception);
    next(exception);
  }
};

exports.index = (req, res) => {
  res.send("user read");
};
exports.update = (req, res) => {
  res.send("user update");
};
exports.delete = (req, res) => {
  res.send("user delete");
};
