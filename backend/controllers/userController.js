const debug = require("debug")("controller:user");
const validate = require("../validators/userValidator");
const User = require("../models/user");

//var passport = require('passport');

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
  let user = null;
  try {
    //check if user already exists with email
    //TODO: combine in a COUNT query which failed if it does  return >0
    let userEmail = await User.findOne({ email: req.body.email });
    let userUsername = await User.findOne({ username: req.body.username });
    if (userEmail || userUsername)
      return res.status(400).send("User already registered.");

    debug(req.body);
    user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    // handled in schema
    //user.password = await bcrypt.hash(user.password, 10);

    const result = await user.save();
    debug("Saving successful", result);

    const token = user.generateAuthToken();
    res
      .header("token", token)
      .status(201)
      .send(user);
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
  const users = await User.find().select("_id username email");
  res.send(users);
};

/**
 * Returns the user with specified username.
 * @return {?import('../models/user').UserModel} The user found with the specified username
 */
exports.findByUsername = async (req, res, next) => {
  const user = await User.findOne({ username: req.params.username }).select(
    "-password"
  );
  if (user) res.send(user);
  else next();
};

exports.findUserGames = async (req, res, next) => {
  res.send("user games");
};
exports.findById = async (req, res, next) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) res.send(user);
  else next();
};

exports.findByEmail = async (req, res, next) => {
  const user = await User.findOne({ email: req.params.email }).select(
    "-password"
  );
  if (user) res.send(user);
  else next();
};

exports.update = async (req, res, next) => {
  res.send("user update");
};
exports.delete = async (req, res, next) => {
  res.send("user delete");
};
