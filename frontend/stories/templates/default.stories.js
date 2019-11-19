import React from "react";
import { storiesOf } from "@storybook/react";

import styles from "./styles.css";

const defaultStyle = {
  outline: "1px solid #eee",
  backgroundColor: "rgba(220, 220, 220, .6)",
  minHeight: "200px"
};

storiesOf("Templates", module).add("default", () => (
  <div className={"default"} style={defaultStyle}>
    <div className={"header"} style={defaultStyle}></div>
    <div className={"side-menu"} style={defaultStyle}></div>
    <div className={"render-area"} style={defaultStyle}></div>
  </div>
));
