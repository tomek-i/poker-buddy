import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { PokerTable } from "../../src/components/organism/pokertable";

const player = {
  id: 1,
  name: "player 1",
  hand: [
    {
      suit: "hearts",
      value: "2"
    },
    {
      suit: "clubs",
      value: "2"
    }
  ]
};

const players = [
  { ...player },
  { ...player, id: 2, name: "player 2", hand:[{},{}] },
  { ...player, id: 3, name: "player 3", hand:[{suit:"c",value:"a"},{suit:"l",value:"11"}]},
  { ...player, id: 4, name: "player 4" },
  { ...player, id: 5, name: "player 5" },
  { ...player, id: 6, name: "player 6" },
  { ...player, id: 7, name: "player 7" },
  { ...player, id: 8, name: "player 8" }
];

const fullGame = [
  { ...player },
  { ...player, id: 2, name: "player 2", smallblind: true, hand:[{suit: "hearts",value: "k"},{suit: "", value: ""}] },
  { ...player, id: 3, name: "player 3", hand:[{suit: "hearts",value: "k"},{suit: "hearts", value: "j"}] },
  { ...player, id: 4, name: "player 4", hand:[{suit: "spades",value: "a"},{suit: "clubs", value: "10"}] },
  { ...player, id: 5, name: "player 5" , hand:[{suit: "clubs",value: "q"},{suit: "", value: ""}]},
  { ...player, id: 6, name: "player 6", dealer: true },
  { ...player, id: 7, name: "player 7" },
  { ...player, id: 8, name: "player 8", bigblind: true }
];

const deck = [
  { suit: "hearts", value: "a" },
  { suit: "spades", value: "2" },
  { suit: "clubs", value: "3" },
  { suit: "diamonds", value: "4" },
  { suit: "", value: "5" }
];

storiesOf("Organism/Poker/Table", module)
  .add("empty", () => <PokerTable></PokerTable>)
  .add("with cards", () => <PokerTable deck={deck}></PokerTable>)
  .add("with 2 players", () => (
    <PokerTable players={players.slice(0, 2)}></PokerTable>
  ))
  .add("with 3 players", () => (
    <PokerTable players={players.slice(0, 3)}></PokerTable>
  ))
  .add("with 4 players", () => (
    <PokerTable players={players.slice(0, 4)}></PokerTable>
  ))
  .add("with 5 players", () => (
    <PokerTable players={players.slice(0, 5)}></PokerTable>
  ))
  .add("with 6 players", () => (
    <PokerTable players={players.slice(0, 6)}></PokerTable>
  ))
  .add("with 7 players", () => (
    <PokerTable players={players.slice(0, 7)}></PokerTable>
  ))
  .add("with 8 players", () => <PokerTable players={players}></PokerTable>)
  .add("with 8 players, dealer, small and big blind", () => (
    <PokerTable players={fullGame} deck={deck}></PokerTable>
  ));
