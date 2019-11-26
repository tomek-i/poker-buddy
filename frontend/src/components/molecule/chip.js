import React, { useEffect, useState } from "react";
import styles from "../../css/modules/chip.module.css";
//https://codepen.io/pmk/pen/GgrJRq

/**
 *
 * @param {*} props
 */
export function Chip(props) {
  //TODO: need to allow changing values
  function getStyle() {
    if (props.white) return styles.white;
    else if (props.red) return styles.red;
    else if (props.blue) return styles.blue;
    else if (props.green) return styles.green;
    else if (props.black) return styles.black;
    else {
      return styles.white;
    }
  }
  const style = getStyle();

  return <div className={`${styles.pokerchip} ${style}`} />;
}
