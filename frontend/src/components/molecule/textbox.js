import React, { useEffect, useState } from "react";
import { Label } from "../atoms/label";

export function TextBox(props) {
  const [color, setColor] = useState(props.color || "#96e296");
  const [colorBorder, setColorBorder] = useState(props.colorBorder || null);
  const [text, setText] = useState(props.text || null);

  useEffect(() => {
    setColorBorder(colorBorder || color);
  }, [color]);

  useEffect(() => {
    setColorBorder(colorBorder || color);
  }, [colorBorder]);

  const style = {
    textAlign: "center",
    color: `${color}`,
    padding: "5px",
    boxSizing: "border-box",
    border: `2px solid ${colorBorder}`,
    borderRadius: "5px",

    fontSize: "0.7em",
    marginTop: "1em",
    marginBottom: "1em",
    overflow: "hidden",
    position: "relative"
    //textOverflow: "ellipsis",
    //height: "2.05em"
  };

  return (
    <Label
      text={text}
      style={{ ...style, ...props.style }}
      className={props.className}
    />
  );
}
