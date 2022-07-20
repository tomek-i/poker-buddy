import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { SignIn } from "../../src/components/organism/forms/signin";
import { SignUp } from "../../src/components/organism/forms/signup";

storiesOf("Organism/Form", module)
  .add("Sign In", () => <SignIn />)
  .add("Sign Up", () => <SignUp />);
