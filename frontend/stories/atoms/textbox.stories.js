import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { TextBox } from "../../src/components/atoms/textbox";

storiesOf("Atoms/Text Box/", module)
  .add("empty", () => <TextBox />)
  .add("with text", () => <TextBox text="Random" />)
  .add("with long text", () => <TextBox text="this is a longer text" />);
