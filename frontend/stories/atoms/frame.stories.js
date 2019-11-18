import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Frame } from "../../src/components/atoms/frame";

storiesOf("Atoms/Frame", module).add("empty", () => <Frame />);
