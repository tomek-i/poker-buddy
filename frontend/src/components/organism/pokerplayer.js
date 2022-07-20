import React, { useEffect, useState } from "react";
import { Player } from "../molecule/player";
import { Card } from "../molecule/card";
import Button from "@material-ui/core/Button";

import styles from "../../css/modules/pokerplayer.module.css";

/**
 * TODO: need to make this smaller, and take out the redner styles for dealer/sb/bb
 * Poker Player
 * @property {string} name the players name
 * @property {[]} hand the players hand
 * @property {boolean} dealer determins if the player is the dealer
 * @property {boolean} smallblind determins if the player is small blind
 * @property {boolean} bigblind determins if the player is big blind
 * @param {*} props
 */
export function PokerPlayer(props) {
  const [name, setName] = useState(props.name || "Player");
  const [hand, setHand] = useState(props.hand || []);

  const [dealer, setDealer] = useState(props.dealer || false);
  const [smallBlind, setSmallBlind] = useState(props.smallblind || false);
  const [bigBlind, setBigBlind] = useState(props.bigblind || false);

  const style = {
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
            ...style.button,
            ...style.dealer
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
            ...style.button,
            ...style.smallblind
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
            ...style.button,
            ...style.bigblind
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
      className={`${styles.player} player-${(props.index || 0) + 1} `}
    >
      <Player name={name} />
      <div className={styles.playerhand}>
        {hand.map(card => (
          <Card {...card} />
        ))}
      </div>
      {ExtraRender()}
    </div>
  );
}

//codepen:https://codepen.io/rivy33/pen/ZoNvpw
