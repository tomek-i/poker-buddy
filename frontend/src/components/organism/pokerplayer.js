import React, { useEffect, useState } from "react";
import { Frame } from "../atoms/frame";
import { Rank } from "../molecule/rank";
import { Player } from "../molecule/player";
import { Card } from "../molecule/card";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import "../../css/poker-player.css";

export function PokerPlayer(props) {
  const [name, setName] = useState(props.name || "Player"); //TODO: there is an issue, if i dont pass in the name, it stays blank...
  const [hand, setHand] = useState(props.hand || []);

  const [dealer, setDealer] = useState(props.dealer || false);
  const [smallBlind, setSmallBlind] = useState(props.smallblind || false);
  const [bigBlind, setBigBlind] = useState(props.bigblind || false);

  const styles = {
    button: {
      height: 40,
      padding: "0 5px",
      width: "100%",
      marginBottom: "10px"
    },
    dealer: {
      background: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)" //whitish / silver
      // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    },
    smallblind: {
      background: "linear-gradient(315deg, #2196f3 0%, #21cbf3 74%)" //blueish
      // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)"
    },
    bigblind: {
      background: "linear-gradient(315deg, #f37335 0%, #fdc830 74%)" //
      // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)"
    }
  };

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
      extra.push(
        <Button
          variant="contained"
          classes={{
            root: "dealer", // class name, e.g. `classes-nesting-root-x`
            label: "dealer-label " // class name, e.g. `classes-nesting-label-x`
          }}
          style={{
            ...styles.button,
            ...styles.dealer
          }}
        >
          DEALER
        </Button>
      );
    if (smallBlind)
      extra.push(
        <Button
          variant="contained"
          classes={{
            root: "small-blind", // class name, e.g. `classes-nesting-root-x`
            label: "small-blind-label " // class name, e.g. `classes-nesting-label-x`
          }}
          style={{
            ...styles.button,
            ...styles.smallblind
          }}
        >
          SMALL BLIND
        </Button>
      );
    if (bigBlind)
      extra.push(
        <Button
          variant="contained"
          classes={{
            root: "big-blind", // class name, e.g. `classes-nesting-root-x`
            label: "big-blind-label " // class name, e.g. `classes-nesting-label-x`
          }}
          style={{
            ...styles.button,
            ...styles.bigblind
          }}
        >
          BIG BLIND
        </Button>
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
          <Card {...card} />
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
        width: "max-content",
        margin: "10px 0"
      }}
    >
      {props.children}
    </div>
  );
}
