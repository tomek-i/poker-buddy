import React, { useEffect, useState } from "react";
import { Frame } from "../atoms/frame";
import { Rank } from "./rank";

export const Card = props => {
  const [suit, setSuit] = useState(props.suit || "");
  const [value, setValue] = useState(props.value || "");

  return (
    <Frame>
      <Rank suit={suit} value={value} />
    </Frame>
  );
};
