import React, { useEffect, useState } from "react";
import styles from "../../css/modules/table.module.css";

//TODO: probably should be using a FRAME as basis ?
/**
 * Represents the shape of a table
 * @param {*} props
 */
export function Table(props) {
  return (
    <div className={`${styles.table} ${props.classes}`} style={props.style}>
      {props.children}
    </div>
  );
}
//codepen:https://codepen.io/rivy33/pen/ZoNvpw
