import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Chip } from "../../src/components/atoms/chip";

storiesOf("Atoms/Chip", module).add("Frame", () => <Chip></Chip>);
