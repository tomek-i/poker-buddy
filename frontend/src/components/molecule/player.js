import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";
import { Typography } from "@material-ui/core";

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
