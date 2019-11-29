const validate = require("../../validators/cardValidator");

describe("Card Validator", () => {
  test("Empty card: empty suit and value", () => {
    const empty_card = { suit: "", value: "" };
    const result = validate(empty_card);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(empty_card);
  });
});
