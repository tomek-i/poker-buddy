import React, { useEffect, useState } from "react";
import { Frame } from "../atoms/frame";
import { Rank } from "../molecule/rank";
import { Player } from "../molecule/player";
import { TextBox } from "../molecule/textbox";

import "../../css/poker-player.css";

export function PokerPlayer(props) {
  const [name, setName] = useState(props.name || "Player"); //TODO: there is an issue, if i dont pass in the name, it stays blank...
  const [hand, setHand] = useState(props.hand || []);

  const [dealer, setDealer] = useState(props.dealer || false);
  const [smallBlind, setSmallBlind] = useState(props.smallblind || false);
  const [bigBlind, setBigBlind] = useState(props.bigblind || false);

  useEffect(() => {
    if (smallBlind) setBigBlind(false);
  }, [smallBlind]);

  useEffect(() => {
    if (bigBlind) setSmallBlind(false);
  }, [bigBlind]);

  const playerStyle = {
    position: "absolute",
    textAlign: "center"
  };

  function ExtraRender() {
    let extra = [];
    if (dealer)
      extra.push(<TextBox text="DEALER" className="dealer" color="blue" />);
    if (smallBlind)
      extra.push(
        <TextBox text="SMALL BLIND" className="small-blind" color="orange" />
      );
    if (bigBlind)
      extra.push(
        <TextBox text="BIG BLIND" className="big-blind" color="darkred" />
      );
    return extra;
  }
  return (
    <div
      id={"player-id-" + (props.id || 0)}
      className={`player-${(props.index || 0) + 1}`}
      style={playerStyle}
    >
      <Player name={name} />
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
