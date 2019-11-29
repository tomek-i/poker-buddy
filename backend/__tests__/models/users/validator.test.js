const validate = require("../../../validators/userValidator");

//TODO: password tests + ensure its encrypted
describe("User Validator", () => {
  const validUser = {
    username: "tomek",
    email: "tom@example.com",
    password: "Mondfahrt?"
  };

  test("with a valid user will pass", () => {
    const result = validate(validUser);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(validUser);
  });

  test("fails with missing username", () => {
    const { username, ...invalidUser } = validUser;
    const result = validate(invalidUser);
    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("is required");
  });

  test("fails with empty string in username", () => {
    let { ...invalidUser } = validUser;
    invalidUser.username = "";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("not allowed to be empty");
  });

  test("fails if username contains non-alpha num. characters", () => {
    let { ...invalidUser } = validUser;
    invalidUser.username = "test$";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain(
      "must only contain alpha-numeric characters"
    );
  });

  test("fails with just space as username", () => {
    let { ...invalidUser } = validUser;
    invalidUser.username = " ";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain(
      "must only contain alpha-numeric characters"
    );
  });

  test("fails with missing email", () => {
    const { email, ...invalidUser } = validUser;
    const result = validate(invalidUser);
    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("is required");
  });

  test("fails with missing email and username", () => {
    const { email, username, ...invalidUser } = validUser;
    const result = validate(invalidUser);
    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("is required");
  });

  test("fails with empty string in email", () => {
    let { ...invalidUser } = validUser;
    invalidUser.email = "";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("not allowed to be empty");
  });

  test("fails with missing @ in email", () => {
    let { ...invalidUser } = validUser;
    invalidUser.email = "test.com";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("must be a valid email");
  });

  test("fails with missing @ and . in email", () => {
    let { ...invalidUser } = validUser;
    invalidUser.email = "testexample";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("must be a valid email");
  });

  test("fails with just space as email", () => {
    let { ...invalidUser } = validUser;
    invalidUser.email = " ";
    const result = validate(invalidUser);

    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toContain("must be a valid email");
  });

  test("passes with a .com.au  email", () => {
    let { ...invalidUser } = validUser;
    invalidUser.email = "test@example.com.au";
    const result = validate(invalidUser);
    expect(result.error).toBeNull();
  });
});
