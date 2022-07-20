import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { LoginForm } from "../../src/components/organism/login-form";

storiesOf("Organism/Form", module).add("login", () => <LoginForm />);
