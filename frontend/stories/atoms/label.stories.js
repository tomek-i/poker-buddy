import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Label } from "../../src/components/atoms/label";

storiesOf("Atoms/Label", module)
  .add("default", () => <Label text="Example" />)
  .add("with colored text", () => <Label text="Example" color={"red"} />)
  .add("with text font size 2em", () => <Label text="Example" size={"2em"} />);
