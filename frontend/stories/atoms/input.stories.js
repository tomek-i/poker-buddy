import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Input } from "../../src/components/atoms/input";

storiesOf("Atoms/Input", module)
  .add("default", () => <Input />)
  .add("with text", () => <Input value="Hello World" />)
  .add("with name", () => <Input name="email" />)
  .add("with password type", () => (
    <Input name="password" value="hello" type="password" />
  ))
  .add("with placeholder", () => <Input placeholder="Input text here ..." />);
