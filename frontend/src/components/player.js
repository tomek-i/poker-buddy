import React, { useEffect, useState } from "react";
import Card from "./card";
import "../css/Player.css";
function Player() {
  const [name, setName] = useState("NO NAME");

  return (
    <div className="player player-1">
      <div className="name">{name}</div>
      <div className="hand">
        <Card></Card>
        <Card flipped={true} rank={1} suit={2}></Card>
      </div>
    </div>
  );
}

//codepen:https://codepen.io/rivy33/pen/ZoNvpw

export default Player;
