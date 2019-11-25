import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
export function Player(props) {
  const [name, setName] = useState(props.name || "Player"); //TODO: there is an issue, if i dont pass in the name, it stays blank...

  return <Button variant="outlined">{name}</Button>;
}
