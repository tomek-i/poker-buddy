import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { PokerPlayer } from "../../src/components/organism/pokerplayer";

const unknownHand = [
  {
    suit: "",
    value: ""
  },
  {
    suit: "",
    value: ""
  }
];

const oneRevealedHand = [
  {
    suit: "hearts",
    value: "A"
  },
  {
    suit: "",
    value: ""
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
  .add("default", () => <PokerPlayer />)
  .add("with name", () => <PokerPlayer name="Tomek" />)
  .add("as dealer", () => <PokerPlayer dealer />)
  .add("as small blind", () => <PokerPlayer smallblind />)
  .add("as big blind", () => <PokerPlayer bigblind />)
  .add("as dealer with big blind", () => <PokerPlayer dealer smallblind />)
  .add("as dealer with small blind", () => <PokerPlayer dealer bigblind />)
  .add("with unknown hand", () => <PokerPlayer hand={unknownHand} />)
  .add("with one card revealed", () => <PokerPlayer hand={oneRevealedHand} />)
  .add("with cards revealed", () => <PokerPlayer hand={twoRevealedHand} />)
  .add("small blind dealer revealed", () => (
    <PokerPlayer hand={twoRevealedHand} smallblind dealer />
  ))
  .add("big blind dealer revealed", () => (
    <PokerPlayer hand={twoRevealedHand} bigblind dealer />
  ));
