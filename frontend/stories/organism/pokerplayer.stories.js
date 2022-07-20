import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { PokerPlayer } from "../../src/components/organism/pokerplayer";

const unknownHand = [
  {
    value: "",
    suit: ""
  },
  {}
];

const oneRevealedHand = [
  {
    suit: "hearts",
    value: "A"
  },
  {
    visible: "false"
  }
];
const twoRevealedHand = [
  {
    suit: "hearts",
    value: "A"
  },
  {
    suit: "spades",
    value: "a"
  }
];

storiesOf("Organism/Poker/Player/", module)
  .add("default", () => <PokerPlayer index={-1} />)
  .add("with name", () => <PokerPlayer index={-1} name="Tomek" />)
  .add("as dealer", () => <PokerPlayer index={-1} dealer />)
  .add("as small blind", () => <PokerPlayer index={-1} smallblind />)
  .add("as big blind", () => <PokerPlayer index={-1} bigblind />)
  .add("as dealer with big blind", () => (
    <PokerPlayer index={-1} dealer smallblind />
  ))
  .add("as dealer with small blind", () => (
    <PokerPlayer index={-1} dealer bigblind />
  ))
  .add("with unknown hand", () => <PokerPlayer index={-1} hand={unknownHand} />)
  .add("with one card revealed", () => (
    <PokerPlayer index={-1} hand={oneRevealedHand} />
  ))
  .add("with cards revealed", () => (
    <PokerPlayer index={-1} hand={twoRevealedHand} />
  ))
  .add("small blind dealer revealed", () => (
    <PokerPlayer index={-1} hand={twoRevealedHand} smallblind dealer />
  ))
  .add("big blind dealer revealed", () => (
    <PokerPlayer index={-1} hand={twoRevealedHand} bigblind dealer />
  ));
