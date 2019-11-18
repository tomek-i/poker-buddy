import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Rank } from "../../src/components/atoms/rank";

storiesOf("Atoms/Rank", module)
  .add("default", () => <Rank />)
  .add("with value", () => <Rank value={"A"} />)
  .add("with suit", () => <Rank suit={"&hearts;"} />)
  .add("with rank and suit", () => <Rank value={"A"} suit={"&hearts;"} />);
