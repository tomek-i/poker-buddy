//TODO: maybe can use frame instead

import React, { useEffect, useState } from "react";
import { Frame } from "./frame";

export function Circle(props) {
  const [radius, setRadius] = useState(props.radius || 0.25);
  const [color, setColor] = useState(props.color || "#ccc5b3");

  return (
    <Frame radius={"50%"} width={radius} height={radius} color={color}>
      {props.children}
    </Frame>
  );
}
