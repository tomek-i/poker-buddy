const debug = require("debug")("model:user");
var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
/**
 * @typedef UserModel
 * @type {object}
 * @property {string} username - unique username
 * @property {string} email - unique email
 */

/**
 * @type {mongoose.Schema<UserModel>}
 */
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      match: [/^[a-zA-Z]+$/, "is invalid"]
    },
    lastname: {
      type: String,
      match: [/^[a-zA-Z]+$/, "is invalid"]
    },
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
      minlength: 3,
      maxlength: 15
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      minlength: 5,
      maxlength: 100
    },
    password: {
      type: String,
      // required: true,
      minlength: 6,
      maxlength: 255
    },
    isAdmin: Boolean
  },
  { timestamps: true }
);
UserSchema.pre("save", async function(next) {
  debug("User pre save called");
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    debug("password has not been modified, returning and calling next()");
    return next();
  }
  debug("password has changed, hashing new password: ", user.password);
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  debug("new password hash: ", hash);
  next();
});
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//custom method to generate authToken
UserSchema.methods.generateAuthToken = function() {
  debug("signing token");
  const algorithm = config.get("jwt.algorithm");
  const expiry = config.get("jwt.expiry");
  debug("algorithm used: ", algorithm);
  debug("expiry used: ", expiry);

  const token = jwt.sign(
    {
      _id: this._id
    },
    config.get("secret"),
    {
      algorithm: algorithm,
      expiresIn: expiry
    }
  );
  debug("Generated Token: ", token);
  return token;
};

/**
 * @type {UserModel}
 */
module.exports = mongoose.model("User", UserSchema);
