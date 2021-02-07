import React, { useEffect, useState } from "react";
import { Frame } from "../atoms/frame";
import styles from "../../css/modules/card.module.css";

/**
 * Shape and definition of a playing card
 * if no suit or rank is passed through, the backside of the card will be displayed
 * @property {string} suit the suit of the card like: &hearts;,&spades;,&clubs;,&diamond;
 * @property {string} rank the rank of the card like A,K,Q,J,10,9 etc.
 * @param {*} props
 */
export const Card = props => {
  const [value, setValue] = useState(
    props.value ? props.value.toUpperCase() : null
  );
  const [suit, setSuit] = useState(getSymbol(props.suit) || null);

  //helper method to identify the suit
  function getSymbol(item) {
    if (item === undefined || item === null) return null;

    const p = item.toLowerCase();
    if (p === "h" || p.includes("heart") || p === "♥︎") return "♥︎";
    else if (p === "s" || p.includes("spade") || p === "♠︎") return "♠︎";
    else if (p === "c" || p.includes("club") || p === "♣︎") return "♣︎";
    else if (p === "d" || p.includes("diamond") || p === "♦︎") return "♦︎";
  }
  //helper method to identify the color based on the suit
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

  if (suit !== "" && value !== "" && suit && value) {
    return (
      <Frame>
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
      </Frame>
    );
  } else {
    //TODO: pattern ID from config or something
    return <Frame classes="pattern-3" />;
  }
};
