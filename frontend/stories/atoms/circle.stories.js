import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Circle } from "../../src/components/atoms/circle";

storiesOf("Atoms/Circle", module)
  .add("default", () => <Circle />)
  .add("with radius 1", () => <Circle radius={1} />)
  .add("with radius 5", () => <Circle radius={5} />)
  .add("with radius 10", () => <Circle radius={10} />);
