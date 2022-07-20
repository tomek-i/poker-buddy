import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Chip } from "../../src/components/molecule/chip";

storiesOf("Molecule/Chip", module)
  .add("white", () => <Chip />)
  .add("red", () => <Chip red />)
  .add("blue", () => <Chip blue />)
  .add("green", () => <Chip green />)
  .add("black", () => <Chip black />);
