const validate = require("../../../validators/cardValidator");

const valid_suits = "S H C D";

describe("Card Validator", () => {
  test("Empty card: empty suit and value", () => {
    const empty_card = { suit: "", value: "" };
    const result = validate(empty_card);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(empty_card);
  });

  test("H for Hearts suit", () => {
    const valid_suit = { suit: "H", value: "" };
    const result = validate(valid_suit);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_suit);
  });
  test("S for Spades suit", () => {
    const valid_suit = { suit: "S", value: "" };
    const result = validate(valid_suit);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_suit);
  });
  test("C for Clubs suit", () => {
    const valid_suit = { suit: "C", value: "" };
    const result = validate(valid_suit);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_suit);
  });
  test("D for Diamonds suit", () => {
    const valid_suit = { suit: "D", value: "" };
    const result = validate(valid_suit);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_suit);
  });

  test("Invalid suit", () => {
    const invalid_suits = "A B E F G I J K L M N O P Q R T U V W X Y Z".split(
      " "
    );
    invalid_suits.map(char => {
      const invalid_suit = { suit: char, value: "" };
      const result = validate(invalid_suit);
      expect(result.error).not.toBeNull();
      expect(result.error).toBeInstanceOf(Error);
    });
  });

  test("Invalid card values", () => {
    const invalid_values = "1 B C D E F G H I L M N O P R S T U V W X Y Z".split(
      " "
    );
    invalid_values.map(value => {
      const invalid_value = { suit: "", value: value };
      const result = validate(invalid_value);
      expect(result.error).not.toBeNull();
      expect(result.error).toBeInstanceOf(Error);
    });
  });
  test("1 invalid", () => {
    const invalid_value = { suit: "", value: "1" };
    const result = validate(invalid_value);
    expect(result.error).not.toBeNull();
    expect(result.error).toBeInstanceOf(Error);
  });

  test("10 valid", () => {
    const valid_value = { suit: "", value: "10" };
    const result = validate(valid_value);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_value);
  });

  test("ace of hearts", () => {
    const valid_value = { suit: "H", value: "A" };
    const result = validate(valid_value);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_value);
  });
  test("ace of spades", () => {
    const valid_value = { suit: "S", value: "A" };
    const result = validate(valid_value);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_value);
  });
  test("ace of clubs", () => {
    const valid_value = { suit: "C", value: "A" };
    const result = validate(valid_value);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_value);
  });
  test("ace of diamonds", () => {
    const valid_value = { suit: "D", value: "A" };
    const result = validate(valid_value);
    expect(result.error).toBeNull();
    expect(result.value).toEqual(valid_value);
  });
});
