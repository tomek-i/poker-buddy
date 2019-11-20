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
      minlength: 4,
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
      required: true,
      minlength: 6,
      maxlength: 255
    },
    isAdmin: Boolean
  },
  { timestamps: true }
);
UserSchema.pre("save", async function(next) {
  debug("pre save");
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    debug("password not modified");
    return next();
  }
  debug("hashing password: ", user.password);
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  debug("updating password: ", hash);
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
  const algo = config.get("jwt.algorithm");
  const expi = config.get("jwt.expiry");
  debug("algorithm used: ", algo);
  debug("expiry used: ", expi);

  const d = new Date();

  const calculatedExpiresIn =
    d.getTime() + 60 * 60 * 1000 - (d.getTime() - d.getMilliseconds()) / 1000;

  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("secret"),
    {
      algorithm: algo,
      expiresIn: expi // seconds or a timespan
    }
  );
  debug("Generated Token: ", token);
  return token;
};

/*
TODO: PASSWORD HASHING

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
*/

/**
 * @type {UserModel}
 */
module.exports = mongoose.model("User", UserSchema);
