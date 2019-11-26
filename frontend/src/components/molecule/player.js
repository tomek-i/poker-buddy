import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";
import { Typography } from "@material-ui/core";

/**
 * Represents a player
 * TODO: link should go or request or open more information about the player
 * @property {string} name The name of the player
 * @param {*} props
 */
export function Player(props) {
  const [name, setName] = useState(props.name || "Player");

  return (
    <Typography>
      <Link
        href="#"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        {name}
      </Link>
    </Typography>
  );
}
