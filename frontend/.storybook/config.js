// .storybook/config.js

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { addParameters } from "@storybook/react"; // <- or your storybook framework

import "../src/css/Storybook.css";

import "../src/css/card.css";
import "../src/css/inputbox.css";
import "../src/css/player-positions.css";
import "../src/css/card-back-pattern.css";
import "../src/css/poker-player.css";
import "../stories/templates/styles.css";

import centered from "@storybook/addon-centered/react";

addDecorator(centered);

addDecorator(withKnobs);

const req = require.context("../stories", true, /\.stories.js$/);

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
