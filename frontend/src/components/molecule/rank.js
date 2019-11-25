import React, { useEffect, useState } from "react";
import { Label2 } from "../atoms/label";

//TODO: should be a molecule with LABEL
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
        return "#e1623f"; //red
      default:
        return "#0c0b13"; //black
    }
  }

  const rankStyle = {
    // position: "absolute",
    // fontSize: "0.9em",
    fontWeight: "bold",
    top: "0.125em",
    left: "0.125em",
    width: "inherit"
  };
  const suitStyle = {
    //display: "block",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFeatureSettings: "normal",
    fontVariant: "normal",
    textTransform: "none",
    textRendering: "auto",
    //fontSize: "1em",
    marginLeft: "0.09em",
    marginTop: "-0.4em"
  };

  const upsideDown = {
    transform: "rotate(180deg)",
    top: "auto",
    left: "auto",
    bottom: "0.125em",
    right: "0.125em",
    //position: "absolute",
    // fontSize: "0.9em",
    fontWeight: "bold"
  };

  return (
    <>
      <Label2
        text={value}
        size="0.9em"
        color={getColor(suit)}
        align="left"
        position="absolute"
        display="block"
        style={rankStyle}
      >
        <Label2
          text={suit}
          size="1em"
          color={getColor(suit)}
          align="left"
          display="block"
          style={suitStyle}
        />
      </Label2>

      <Label2
        text={value}
        size="0.9em"
        color={getColor(suit)}
        align="left"
        position="absolute"
        display="block"
        style={{ ...rankStyle, ...upsideDown }}
      >
        <Label2
          text={suit}
          size="1em"
          color={getColor(suit)}
          align="left"
          display="block"
          style={suitStyle}
        />
      </Label2>
    </>
  );
}
