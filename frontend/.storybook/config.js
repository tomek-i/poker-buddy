// .storybook/config.js

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { addParameters } from "@storybook/react"; // <- or your storybook framework

import "../src/css/Card.css";
import "../src/css/Back-Pattern.css";

addDecorator(withKnobs);

const req = require.context("../src", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ]
});

configure(loadStories, module);
