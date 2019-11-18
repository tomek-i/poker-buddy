import React, { useEffect, useState } from "react";

import { Table } from "../atoms/table";
import { Player } from "../molecule/player";

export function PokerTable(props) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (props.players && props.players.length > 0) setPlayers(props.players);
  }, []);

  return (
    <Table color="#4aad4a" colorFrame="#a95555">
      {players.map((player, i) => {
        return <Player {...player} index={i} />;
      })}
    </Table>
  );
}
