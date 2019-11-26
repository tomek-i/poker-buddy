import React, { useEffect, useState } from "react";
import styles from "../../css/modules/card.module.css";

export function Rank(props) {
  const [value, setValue] = useState(
    props.value ? props.value.toUpperCase() : null
  );
  const [suit, setSuit] = useState(getSymbol(props.suit) || null);

  function getSymbol(item) {
    if (item === undefined || item === null) return null;

    const p = item.toLowerCase();
    if (p === "h" || p.includes("heart") || p === "♥︎") return "♥︎";
    else if (p === "s" || p.includes("spade") || p === "♠︎") return "♠︎";
    else if (p === "c" || p.includes("club") || p === "♣︎") return "♣︎";
    else if (p === "d" || p.includes("diamond") || p === "♦︎") return "♦︎";
  }
  function getColor(symbol) {
    switch (symbol) {
      case "♥︎":
      case "♦︎":
        return styles.red; //"red"; //"#e1623f"; //red
      default:
        return styles.black; //"black"; //"#0c0b13"; //black
    }
  }

  const color = getColor(suit);
  return (
    <>
      <div className={`${styles.card} ${color}`}>
        <div className={` ${styles.rank} `}>
          {value}
          <div className={` ${styles.suit} `}>{suit}</div>
        </div>

        <div className={` ${styles.rank}  ${styles.upside}`}>
          {value}
          <div className={` ${styles.suit} `}>{suit}</div>
        </div>
      </div>
    </>
  );
}
