import React, { useEffect, useState } from "react";

export function Rank(props) {
  const [value, setValue] = useState(null);
  const [suit, setSuit] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (props.value) setValue(props.value.toUpperCase());
    if (props.suit) setSuit(getSymbol(props.suit));
    if (props.visible) setVisible(props.visible);
  }, []);

  function getSymbol(item) {
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
        return "red";
      default:
        return "black";
    }
  }

  const rankStyle = {
    position: "absolute",
    fontSize: "0.9em",
    fontWeight: "bold",
    top: "0.125em",
    left: "0.125em"
  };
  const suitStyle = {
    display: "block",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFeatureSettings: "normal",
    fontVariant: "normal",
    textTransform: "none",
    textRendering: "auto",
    fontSize: "1em",
    marginLeft: "0.05em",
    marginTop: "-0.4em"
  };

  const upsideDown = {
    transform: "rotate(180deg)",
    top: "auto",
    left: "auto",
    bottom: "0.125em",
    right: "0.125em",
    position: "absolute",
    fontSize: "0.9em",
    fontWeight: "bold"
  };

  if (visible)
    return (
      <>
        <div className={`rank ${getColor(suit)}`} style={rankStyle}>
          {value}
          <span style={suitStyle}>{suit}</span>
        </div>

        <div
          className={`rank ${getColor(suit)}`}
          style={(rankStyle, upsideDown)}
        >
          {value}
          <span style={suitStyle}>{suit}</span>
        </div>
      </>
    );
  else return null;
}
