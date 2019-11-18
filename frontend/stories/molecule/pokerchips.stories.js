import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  SmallBlind,
  BigBlind,
  Dealer
} from "../../src/components/molecule/pokerchips";

storiesOf("Molecule/Poker/Chips/", module)
  .add("Small Blind", () => <SmallBlind></SmallBlind>)
  .add("Big Blind", () => <BigBlind></BigBlind>)
  .add("Dealer", () => <Dealer></Dealer>);
