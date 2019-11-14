const debug = require("debug")("controller:user");
const validate = require("../validators/userValidator");
const User = require("../models/user");

//changed from async/await to promise
exports.create = (req, res, next) => {
  debug("Validating request body");
  const { error } = validate(req.body);

  if (error) {
    debug("Validation failed!", error);
    // respond back with '400 Bad Request' with error details
    //maybe send the whole error back? maybe with next?
    next(error);
    //return res.status(400).send(error.details[0].message);
  }

  User.create(req.body)
    .then(result => {
      debug("Saving successful", result);
      return res.send(user);
    })
    .catch(error => {
      //TODO: create utility method to wrap "500 Internal Server Error" (and other common ones) messages
      const exception = new Error("Creating User failed!");
      exception.status = 500;
      exception.error = error;
      debug("Saving to database failed!", exception);
      next(exception);
    });
};

exports.index = (req, res, next) => {
  res.send("user read");
};
exports.update = (req, res, next) => {
  res.send("user update");
};
exports.delete = (req, res, next) => {
  res.send("user delete");
};
