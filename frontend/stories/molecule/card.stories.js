import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { Card } from "../../src/components/molecule/card";

storiesOf("Molecule/Cards/Spades", module)
  .add("Ace", () => <Card suit="s" value="a" />)
  .add("King", () => <Card suit="s" value="k" />)
  .add("Queen", () => <Card suit="s" value="q" />)
  .add("Jack", () => <Card suit="s" value="j" />)
  .add("10", () => <Card suit="s" value="10" />)
  .add("9", () => <Card suit="s" value="9" />)
  .add("8", () => <Card suit="s" value="8" />)
  .add("7", () => <Card suit="s" value="7" />)
  .add("6", () => <Card suit="s" value="6" />)
  .add("5", () => <Card suit="s" value="5" />)
  .add("4", () => <Card suit="s" value="4" />)
  .add("3", () => <Card suit="s" value="3" />)
  .add("2", () => <Card suit="s" value="2" />);

storiesOf("Molecule/Cards/Hearts", module)
  .add("Ace", () => <Card suit="h" value="a" />)
  .add("King", () => <Card suit="h" value="k" />)
  .add("Queen", () => <Card suit="h" value="q" />)
  .add("Jack", () => <Card suit="h" value="j" />)
  .add("10", () => <Card suit="h" value="10" />)
  .add("9", () => <Card suit="h" value="9" />)
  .add("8", () => <Card suit="h" value="8" />)
  .add("7", () => <Card suit="h" value="7" />)
  .add("6", () => <Card suit="h" value="6" />)
  .add("5", () => <Card suit="h" value="5" />)
  .add("4", () => <Card suit="h" value="4" />)
  .add("3", () => <Card suit="h" value="3" />)
  .add("2", () => <Card suit="h" value="2" />);

storiesOf("Molecule/Cards/Clubs", module)
  .add("Ace", () => <Card suit="c" value="a" />)
  .add("King", () => <Card suit="c" value="k" />)
  .add("Queen", () => <Card suit="c" value="q" />)
  .add("Jack", () => <Card suit="c" value="j" />)
  .add("10", () => <Card suit="c" value="10" />)
  .add("9", () => <Card suit="c" value="9" />)
  .add("8", () => <Card suit="c" value="8" />)
  .add("7", () => <Card suit="c" value="7" />)
  .add("6", () => <Card suit="c" value="6" />)
  .add("5", () => <Card suit="c" value="5" />)
  .add("4", () => <Card suit="c" value="4" />)
  .add("3", () => <Card suit="c" value="3" />)
  .add("2", () => <Card suit="c" value="2" />);

storiesOf("Molecule/Cards/Diamonds", module)
  .add("Ace", () => <Card suit="d" value="a" />)
  .add("King", () => <Card suit="d" value="k" />)
  .add("Queen", () => <Card suit="d" value="q" />)
  .add("Jack", () => <Card suit="d" value="j" />)
  .add("10", () => <Card suit="d" value="10" />)
  .add("9", () => <Card suit="d" value="9" />)
  .add("8", () => <Card suit="d" value="8" />)
  .add("7", () => <Card suit="d" value="7" />)
  .add("6", () => <Card suit="d" value="6" />)
  .add("5", () => <Card suit="d" value="5" />)
  .add("4", () => <Card suit="d" value="4" />)
  .add("3", () => <Card suit="d" value="3" />)
  .add("2", () => <Card suit="d" value="2" />);
