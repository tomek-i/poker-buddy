import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { TextBox } from "../../src/components/molecule/textbox";

storiesOf("Molecule/Text Box/", module)
  .add("empty", () => <TextBox />)
  .add("with text", () => <TextBox text="Random" />)
  .add("with long text", () => <TextBox text="this is a longer text" />)

  .add("with color", () => <TextBox text="Random" color="red" />)
  .add("with border color", () => <TextBox text="Random" colorBorder="white" />)
  .add("with color and border color", () => (
    <TextBox text="Random" color="red" colorBorder="white" />
  ));
