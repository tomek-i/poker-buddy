import React, { useEffect, useState } from "react";
import { Frame } from "./frame";
import styles from "../../css/modules/circle.module.css";

/**
 * Represents the shape of a circle
 * @param {*} props
 */
export function Circle(props) {
  return (
    <Frame
      classes={styles.circle}
      style={{
        width: `${props.radius || -1}em`,
        height: `${props.radius || -1}em`
      }}
    >
      {props.children}
    </Frame>
  );
}
