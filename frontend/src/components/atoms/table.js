import React, { useEffect, useState } from "react";
import styles from "../../css/modules/table.module.css";

export function Table(props) {
  console.log("Table Classes: ", props.classes);
  return (
    <div className={`${styles.table} ${props.classes}`} style={props.style}>
      {props.children}
    </div>
  );
}
//codepen:https://codepen.io/rivy33/pen/ZoNvpw
