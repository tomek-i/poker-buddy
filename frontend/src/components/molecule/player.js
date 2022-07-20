import React, { useEffect, useState } from "react";
import { TextBox } from "./textbox";

export function Player(props) {
  const [name, setName] = useState(props.name || "Player"); //TODO: there is an issue, if i dont pass in the name, it stays blank...

  return <TextBox text={name}></TextBox>;
}
