import React, { useEffect, useState } from "react";
import styles from "../../css/modules/frame.module.css";

/**
 * Defines a basic rectangular shape
 * you can pass in `classes` as props
 * or additional `children`
 * @param {*} props
 */
export function Frame(props) {
  return (
    <div
      style={{ ...props.style }}
      className={`${styles.frame} ${props.classes}`}
    >
      {props.children}
    </div>
  );
}
