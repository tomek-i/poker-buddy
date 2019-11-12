import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Player from "./player";

storiesOf("Player", module).add("Player", () => <Player></Player>);
