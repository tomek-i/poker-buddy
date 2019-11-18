import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { Table } from "../src/components/molecule/table";
import { Card } from "../src/components/molecule/card";
import { Player } from "../src/components/molecule/player";

storiesOf("_old/Table", module)
  .add("Empty", () => <Table></Table>)
  .add("With Cards", () => <Table></Table>);
