import React, { useEffect, useState } from "react";

import { Table } from "../atoms/table";
import { PokerPlayer } from "../organism/pokerplayer";
import { Card } from "../molecule/card";

export function PokerTable(props) {
  const [players, setPlayers] = useState(props.players || []);
  const [deck, setDeck] = useState(props.deck || []);

  const style = {
    border: "5px solid #63c763",
    height: "150px",
    width: "20.8em",
    position: "absolute",
    borderRadius: "10px",
    padding: "10px",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    boxSizing: "border-box"
  };
  /*.table .card-place .card:not(:last-child) {
  margin-right: 15px;
}
}*/

  return (
    <Table color="#4aad4a" colorFrame="#a95555">
      {players.map((player, i) => (
        <PokerPlayer {...player} index={i} />
      ))}
      <div style={style}>
        {deck.map(card => (
          <Card {...card} />
        ))}
      </div>
    </Table>
  );
}
