import React, { useEffect, useState } from "react";

import "../css/Card.css";
import "../css/Back-Pattern.css";

const ranks = "A 2 3 4 5 6 7 8 9 10 J Q K".split(" ");
//const suits = "♠︎ ♥︎ ♣︎ ♦︎".split(" ");
const suits = ["spade", "heart", "club", "diamond"];
const getRank = i => ranks[i % 13];
const getSuit = i => suits[i % 4 | 0];
const getColor = i => ((i % 5 | 0) % 2 ? "red" : "black");

function Card(props) {
  const [backPattern, setBackPattern] = useState(1);
  const [rank, setRank] = useState("");
  const [color, setColor] = useState("");
  const [suit, setSuit] = useState("");
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    console.log(props);

    if (props.backPattern) setBackPattern(props.backPattern);
    if (props.flipped) setFlipped(props.flipped || false);
    if (props.rank || props.rank === 0) setRank(getRank(props.rank || 0));

    if (props.suit || props.suit === 0) {
      setSuit(getSuit(props.suit || 0));
      setColor(getColor(props.suit || 0));
    }
  }, []);

  if (flipped === false)
    return <div className={`card flipped pattern-${backPattern}`}></div>;
  else
    return (
      <div className="card" style={{ color: color }}>
        <div className={`mark  ${suit} ${color}`}>{rank}</div>
        <div className={`content ${suit} ${color}`}></div>
        <div className={`mark upside-down ${suit} ${color}`}>{rank}</div>
      </div>
    );
}

export default Card;
