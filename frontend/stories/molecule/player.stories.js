import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Player from "../../src/components/molecule/player";

storiesOf("Molecule/Player", module)
  .add("default", () => <Player name="player"></Player>)
  .add("as Dealer", () => <Player name="player" dealer></Player>)
  .add("as BB", () => <Player name="player" smallblind></Player>)
  .add("as SM", () => <Player name="player" bigblind></Player>);
