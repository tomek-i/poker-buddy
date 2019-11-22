import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Label } from "../../src/components/atoms/label";

storiesOf("Atoms/Label", module)
  .add("default", () => <Label text="Example" />)
  .add("with disabled state", () => <Label text="Example" disabled />);
