var mongoose = require("mongoose");

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
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true
    }
  },
  { timestamps: true }
);

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
