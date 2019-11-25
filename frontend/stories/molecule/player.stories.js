import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { Player } from "../../src/components/molecule/player";

storiesOf("Molecule/Player", module).add("default", () => (
  <Player name="Example Name" index={-1}></Player>
));
