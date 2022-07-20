import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { Table } from "../../src/components/atoms/table";

storiesOf("Atoms/Table", module).add("default", () => <Table />);
