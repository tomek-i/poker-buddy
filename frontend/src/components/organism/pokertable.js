import React, { useEffect, useState } from "react";

import { Table } from "../atoms/table";
import { PokerPlayer } from "../organism/pokerplayer";
import { Card } from "../molecule/card";
import styles from "../../css/modules/pokertable.module.css";

export function PokerTable(props) {
  const [players, setPlayers] = useState(props.players || []);
  const [deck, setDeck] = useState(props.deck || []);

  return (
    <Table classes={`${styles.pokertable}`}>
      {players.map((player, i) => (
        <PokerPlayer {...player} index={i} />
      ))}
      <div className={`${styles.cardplace} cardplace`}>
        {deck.map(card => (
          <Card {...card} />
        ))}
      </div>
    </Table>
  );
}
