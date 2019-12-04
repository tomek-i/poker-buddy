const debug = require("debug")("controller:api");
const User = require("../models/user");
const mongoose = require("mongoose");

exports.findUserByUsername = async (req, res, next) => {
  debug("Called findUserByUsername with params: ", req.params);

  const { username } = req.params;

  if (!username) {
    debug("Invalid Username provided: ", username);
    return next(new Error("Invalid username"));
  }
  try {
    const user = await User.findOne({ username: username }).select("-password");
    if (!user) {
      debug("No user found");
      throw new Error("No user found.");
    }
    debug("found user: ", user);
    return res.status(200).json(user);
  } catch (error) {
    debug("Error occured: ", error);
    return next(error);
  }
};

exports.findUserById = async (req, res, next) => {
  debug("Called findUserById with params: ", req.params);

  const { id } = req.params;

  if (!id) {
    debug("Invalid Id provided: ", id);
    return next(new Error("Invalid id"));
  }
  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      debug("No user found");
      throw new Error("No user found.");
    }
    debug("found user: ", user);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof mongoose.Error) {
      if (error.kind === "ObjectId") {
        debug("value for ID provided probably username trying next() route");
        return next();
      }
      return next(error);
    } else {
      debug("Error occurred: ", error);
      return next(error);
    }
  }
};

exports.findGameById = async (req, res, next) => {
  res.send("TODO");
};
