import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Table from "./table";
import Card from "./card";

storiesOf("Table", module)
  .add("Empty", () => <Table></Table>)
  .add("With Cards", () => <Table></Table>);
