import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  SmallBlind,
  BigBlind,
  Dealer
} from "../../src/components/organism/pokerchips";
import { Chip } from "../../src/components/molecule/chip";

storiesOf("Organism/Poker/Chips/", module)
  .add("Small Blind", () => <SmallBlind />)
  .add("Big Blind", () => <BigBlind />)
  .add("Dealer", () => <Dealer />)

  .add("10", () => <Chip></Chip>)
  .add("20", () => <Chip></Chip>)
  .add("50", () => <Chip></Chip>)
  .add("100", () => <Chip></Chip>)
  .add("200", () => <Chip></Chip>)
  .add("500", () => <Chip></Chip>)
  .add("1000", () => <Chip></Chip>);
