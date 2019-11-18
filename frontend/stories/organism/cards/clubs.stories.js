import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Frame } from "../../../src/components/atoms/frame";
import { Rank } from "../../../src/components/atoms/rank";

storiesOf("Molecule/Cards/Clubs", module)
  .add("Ace", () => (
    <Frame>
      <Rank value={"a"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("King", () => (
    <Frame>
      <Rank value={"k"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("Queen", () => (
    <Frame>
      <Rank value={"q"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("Jack", () => (
    <Frame>
      <Rank value={"j"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("10", () => (
    <Frame>
      <Rank value={"10"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("9", () => (
    <Frame>
      <Rank value={"9"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("8", () => (
    <Frame>
      <Rank value={"8"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("7", () => (
    <Frame>
      <Rank value={"7"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("6", () => (
    <Frame>
      <Rank value={"6"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("5", () => (
    <Frame>
      <Rank value={"5"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("4", () => (
    <Frame>
      <Rank value={"4"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("3", () => (
    <Frame>
      <Rank value={"3"} suit={"c"}></Rank>
    </Frame>
  ))
  .add("2", () => (
    <Frame>
      <Rank value={"2"} suit={"c"}></Rank>
    </Frame>
  ));
