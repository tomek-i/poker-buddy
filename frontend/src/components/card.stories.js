import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Card from "./card";

storiesOf("Card", module).add("Shape", () => <Card flipped={true}></Card>);

storiesOf("Card/Playing Card/Back", module)
  .add(
    "Default",
    withInfo("This is the back facing side of the playing card.")(() => (
      <Card></Card>
    ))
  )
  .add(
    "Pattern No. 2",
    withInfo("This is the back facing side of the playing card.")(() => (
      <Card backPattern={2}></Card>
    ))
  )
  .add(
    "Pattern No. 3",
    withInfo("This is the back facing side of the playing card.")(() => (
      <Card backPattern={3}></Card>
    ))
  );
/*
storiesOf("Card/Playing Card/Suits", module)
  .add("Spades", () => <Card flipped={true} suit={0}></Card>)
  .add("Hearts", () => <Card flipped={true} suit={1}></Card>)
  .add("Clubs", () => <Card flipped={true} suit={2}></Card>)
  .add("Diamonds", () => <Card flipped={true} suit={3}></Card>);

storiesOf("Card/Playing Card/Ranks", module)
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
*/
storiesOf("Card/Playing Card/Faces/Spades", module)
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

storiesOf("Card/Playing Card/Faces/Hearts", module)
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
storiesOf("Card/Playing Card/Faces/Clubs", module)
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
storiesOf("Card/Playing Card/Faces/Diamonds", module)
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
