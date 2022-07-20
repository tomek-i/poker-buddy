import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { InputBox } from "../../src/components/molecule/inputbox";

storiesOf("Molecule/Input Box", module).add("default", () => <InputBox />);
