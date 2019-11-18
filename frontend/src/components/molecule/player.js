import React, { useEffect, useState } from "react";
import { Frame } from "../atoms/frame";
import { Rank } from "../atoms/rank";

import "../../css/Player.css";

import { TextBox } from "../atoms/textbox";

export function PlayerHandWrapper(props) {
  return (
    <div
      style={{
        width: "max-content"
      }}
    >
      {props.children}
    </div>
  );
}

export function Player(props) {
  const [name, setName] = useState(props.name); //TODO: there is an issue, if i dont pass in the name, it stays blank...
  const [hand, setHand] = useState([]);

  const [isDealer, setIsDealer] = useState(false);
  const [isSmallBlind, setIsSmallBlind] = useState(false);
  const [isBigBlind, setIsBigBlind] = useState(false);

  useEffect(() => {
    if (props.name) setName(props.name);

    if (props.hand && props.hand.length >= 0) setHand(props.hand);

    if (props.isDealer || props.dealer)
      setIsDealer(props.isDealer || props.dealer);
    if (props.isSmallBlind || props.smallblind)
      setIsSmallBlind(props.isSmallBlind || props.smallblind);
    if (props.isBigBlind || props.bigblind)
      setIsBigBlind(props.isBigBlind || props.bigblind);
  }, []);

  const playerStyle = {
    position: "absolute",
    textAlign: "center"
  };

  function ExtraRender() {
    let extra = [];
    if (isDealer) extra.push("dealer");
    if (isSmallBlind) extra.push("small-blind");
    if (isBigBlind) extra.push("big-blind");
    return extra.map(item => (
      <TextBox text={item.toUpperCase().replace("-", " ")}></TextBox>
    ));
  }
  return (
    <div
      id={"player-id-" + (props.id || 0)}
      className={`player-${(props.index || 0) + 1}`}
      style={playerStyle}
    >
      <TextBox text={name}></TextBox>
      <PlayerHandWrapper>
        {hand.map(card => (
          <Frame>
            <Rank {...card} />
          </Frame>
        ))}
      </PlayerHandWrapper>
      {ExtraRender()}
    </div>
  );
}

//codepen:https://codepen.io/rivy33/pen/ZoNvpw

export default Player;
