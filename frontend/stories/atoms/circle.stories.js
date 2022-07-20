import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Circle } from "../../src/components/atoms/circle";
import { Frame } from "../../src/components/atoms/frame";

storiesOf("Atoms/Circle", module)
  .add("default", () => <Circle />)
  .add("with radius 2", () => <Circle radius={2} />)
  .add("with radius 5", () => <Circle radius={5} />)
  .add("with radius 10", () => <Circle radius={10} />);

storiesOf("Atoms/Frame", module).add("default", () => <Frame />);
