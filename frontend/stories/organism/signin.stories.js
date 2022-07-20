import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { SignIn } from "../../src/components/organism/signin";

storiesOf("Organism/Form", module).add("Sign In", () => <SignIn />);
