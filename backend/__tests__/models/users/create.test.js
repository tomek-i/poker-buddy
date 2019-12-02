const mongoose = require("mongoose");
const UserModel = require("../../../models/user");
const { setupDB } = require("../../../jest-db-setup");

const userData = {
  username: "MyUsername",
  email: "email@example.com"
};

//TODO: need more test cases for the DB schema
/**
 *  Insert User into Database successfully. (Test Normal Use Case)
 *  Insert User with Invalid Field. (Test on Schema)
 *  Insert User without Required Field. (Test on Validation)
 **/

setupDB("create-user-testing");

describe("Create user in Database", () => {
  it("create & save user successfully", async () => {
    const validUser = new UserModel(userData);
    const savedUser = await validUser.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username.toLowerCase());
    expect(savedUser.email).toBe(userData.email.toLowerCase());
    expect(savedUser.image).toBe(userData.image);
  });

  // Test Schema is working!!!
  // You shouldn't be able to add in any field that isn't defined in the schema
  it("insert user successfully, but the field does not defined in schema should be undefined", async () => {
    const userWithInvalidField = new UserModel({
      username: "TekLoon",
      email: "example@email.com",
      nickname: "Handsome TekLoon"
    });
    const savedUserWithInvalidField = await userWithInvalidField.save();
    expect(savedUserWithInvalidField._id).toBeDefined();
    expect(savedUserWithInvalidField.nickname).toBeUndefined();
  });

  // Test Validation is working!!!
  // It should told us the errors in on gender field.
  it("create user without required field should fail", async () => {
    const userWithoutRequiredField = new UserModel({
      email: "test@example.com"
    });
    let err;
    try {
      const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
      error = savedUserWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.username).toBeDefined();
  });
});
