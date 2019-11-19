import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Chip } from "../../src/components/molecule/chip";

storiesOf("Molecule/Chip", module)
  .add("default", () => <Chip />)
  .add("with value", () => <Chip />)
  .add("with text", () => <Chip />)
  .add("with color", () => <Chip />);
