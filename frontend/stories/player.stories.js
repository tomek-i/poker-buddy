import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Player from "../src/components/molecule/player";

storiesOf("_old/Player", module)
  .add("Player", () => <Player></Player>)
  .add("Dealer", () => <Player dealer></Player>)
  .add("BB", () => <Player smallblind></Player>)
  .add("SM", () => <Player bigblind></Player>);
