import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Card from "../components/card";

export const card = {
  rank: 0,
  suit: 0,
  flipped: false
};

export const actions = {
  onReveal: action("onReveal"),
  onFlip: action("onFlip")
};

storiesOf("Playing Card", module)
  .add("Back", () => <Card></Card>)
  .add("Front", () => <Card flipped={true}></Card>);

storiesOf("Card Suits", module)
  .add("Spades", () => <Card flipped={true} suit={0}></Card>)
  .add("Hearts", () => <Card flipped={true} suit={1}></Card>)
  .add("Clubs", () => <Card flipped={true} suit={2}></Card>)
  .add("Diamonds", () => <Card flipped={true} suit={3}></Card>);

storiesOf("Card Ranks", module)
  .add("A", () => <Card flipped={true} rank={13}></Card>)
  .add("K", () => <Card flipped={true} rank={12}></Card>)
  .add("Q", () => <Card flipped={true} rank={11}></Card>)
  .add("J", () => <Card flipped={true} rank={10}></Card>)
  .add("10", () => <Card flipped={true} rank={9}></Card>)
  .add("9", () => <Card flipped={true} rank={8}></Card>)
  .add("8", () => <Card flipped={true} rank={7}></Card>)
  .add("7", () => <Card flipped={true} rank={6}></Card>)
  .add("6", () => <Card flipped={true} rank={5}></Card>)
  .add("5", () => <Card flipped={true} rank={4}></Card>)
  .add("4", () => <Card flipped={true} rank={3}></Card>)
  .add("3", () => <Card flipped={true} rank={2}></Card>)
  .add("2", () => <Card flipped={true} rank={1}></Card>);

storiesOf("Spades", module)
  .add("A", () => <Card flipped={true} rank={13} suit={0}></Card>)
  .add("K", () => <Card flipped={true} rank={12} suit={0}></Card>)
  .add("Q", () => <Card flipped={true} rank={11} suit={0}></Card>)
  .add("J", () => <Card flipped={true} rank={10} suit={0}></Card>)
  .add("10", () => <Card flipped={true} rank={9} suit={0}></Card>)
  .add("9", () => <Card flipped={true} rank={8} suit={0}></Card>)
  .add("8", () => <Card flipped={true} rank={7} suit={0}></Card>)
  .add("7", () => <Card flipped={true} rank={6} suit={0}></Card>)
  .add("6", () => <Card flipped={true} rank={5} suit={0}></Card>)
  .add("5", () => <Card flipped={true} rank={4} suit={0}></Card>)
  .add("4", () => <Card flipped={true} rank={3} suit={0}></Card>)
  .add("3", () => <Card flipped={true} rank={2} suit={0}></Card>)
  .add("2", () => <Card flipped={true} rank={1} suit={0}></Card>);

storiesOf("Hearts", module)
  .add("A", () => <Card flipped={true} rank={13} suit={1}></Card>)
  .add("K", () => <Card flipped={true} rank={12} suit={1}></Card>)
  .add("Q", () => <Card flipped={true} rank={11} suit={1}></Card>)
  .add("J", () => <Card flipped={true} rank={10} suit={1}></Card>)
  .add("10", () => <Card flipped={true} rank={9} suit={1}></Card>)
  .add("9", () => <Card flipped={true} rank={8} suit={1}></Card>)
  .add("8", () => <Card flipped={true} rank={7} suit={1}></Card>)
  .add("7", () => <Card flipped={true} rank={6} suit={1}></Card>)
  .add("6", () => <Card flipped={true} rank={5} suit={1}></Card>)
  .add("5", () => <Card flipped={true} rank={4} suit={1}></Card>)
  .add("4", () => <Card flipped={true} rank={3} suit={1}></Card>)
  .add("3", () => <Card flipped={true} rank={2} suit={1}></Card>)
  .add("2", () => <Card flipped={true} rank={1} suit={1}></Card>);
storiesOf("Clubs", module)
  .add("A", () => <Card flipped={true} rank={13} suit={2}></Card>)
  .add("K", () => <Card flipped={true} rank={12} suit={2}></Card>)
  .add("Q", () => <Card flipped={true} rank={11} suit={2}></Card>)
  .add("J", () => <Card flipped={true} rank={10} suit={2}></Card>)
  .add("10", () => <Card flipped={true} rank={9} suit={2}></Card>)
  .add("9", () => <Card flipped={true} rank={8} suit={2}></Card>)
  .add("8", () => <Card flipped={true} rank={7} suit={2}></Card>)
  .add("7", () => <Card flipped={true} rank={6} suit={2}></Card>)
  .add("6", () => <Card flipped={true} rank={5} suit={2}></Card>)
  .add("5", () => <Card flipped={true} rank={4} suit={2}></Card>)
  .add("4", () => <Card flipped={true} rank={3} suit={2}></Card>)
  .add("3", () => <Card flipped={true} rank={2} suit={2}></Card>)
  .add("2", () => <Card flipped={true} rank={1} suit={2}></Card>);
storiesOf("Diamonds", module)
  .add("A", () => <Card flipped={true} rank={13} suit={3}></Card>)
  .add("K", () => <Card flipped={true} rank={12} suit={3}></Card>)
  .add("Q", () => <Card flipped={true} rank={11} suit={3}></Card>)
  .add("J", () => <Card flipped={true} rank={10} suit={3}></Card>)
  .add("10", () => <Card flipped={true} rank={9} suit={3}></Card>)
  .add("9", () => <Card flipped={true} rank={8} suit={3}></Card>)
  .add("8", () => <Card flipped={true} rank={7} suit={3}></Card>)
  .add("7", () => <Card flipped={true} rank={6} suit={3}></Card>)
  .add("6", () => <Card flipped={true} rank={5} suit={3}></Card>)
  .add("5", () => <Card flipped={true} rank={4} suit={3}></Card>)
  .add("4", () => <Card flipped={true} rank={3} suit={3}></Card>)
  .add("3", () => <Card flipped={true} rank={2} suit={3}></Card>)
  .add("2", () => <Card flipped={true} rank={1} suit={3}></Card>);
/*
    export default {
  title: "Playing Card"
};

export const back = () => <Card></Card>;
export const front = () => <Card flipped={true}></Card>;
export const aceSpade = () => <Card flipped={true} suit={0} rank={0}></Card>;
export const twoSpade = () => <Card flipped={true} suit={0} rank={1}></Card>;
export const threeSpade = () => <Card flipped={true} suit={0} rank={2}></Card>;
export const fourSpade = () => <Card flipped={true} suit={0} rank={3}></Card>;
export const fiveSpade = () => <Card flipped={true} suit={0} rank={4}></Card>;
export const sixSpade = () => <Card flipped={true} suit={0} rank={5}></Card>;
export const sevenSpade = () => <Card flipped={true} suit={0} rank={6}></Card>;
export const eightSpade = () => <Card flipped={true} suit={0} rank={7}></Card>;
export const nineSpade = () => <Card flipped={true} suit={0} rank={8}></Card>;
export const tenSpade = () => <Card flipped={true} suit={0} rank={9}></Card>;
export const jackSpade = () => <Card flipped={true} suit={0} rank={10}></Card>;
export const queenSpade = () => <Card flipped={true} suit={0} rank={11}></Card>;
export const kingSpade = () => <Card flipped={true} suit={0} rank={12}></Card>;

export const aceHeart = () => <Card flipped={true} suit={1} rank={0}></Card>;
export const twoHeart = () => <Card flipped={true} suit={1} rank={1}></Card>;
export const threeHeart = () => <Card flipped={true} suit={1} rank={2}></Card>;
export const fourHeart = () => <Card flipped={true} suit={1} rank={3}></Card>;
export const fiveHeart = () => <Card flipped={true} suit={1} rank={4}></Card>;
export const sixHeart = () => <Card flipped={true} suit={1} rank={5}></Card>;
export const sevenHeart = () => <Card flipped={true} suit={1} rank={6}></Card>;
export const eightHeart = () => <Card flipped={true} suit={1} rank={7}></Card>;
export const nineHeart = () => <Card flipped={true} suit={1} rank={8}></Card>;
export const tenHeart = () => <Card flipped={true} suit={1} rank={9}></Card>;
export const jackHeart = () => <Card flipped={true} suit={1} rank={12}></Card>;
export const queenHeart = () => <Card flipped={true} suit={1} rank={11}></Card>;
export const kingHeart = () => <Card flipped={true} suit={1} rank={12}></Card>;
*/
