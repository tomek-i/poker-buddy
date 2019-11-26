import React, { useEffect, useState } from "react";
import styles from "../../css/modules/frame.module.css";

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
