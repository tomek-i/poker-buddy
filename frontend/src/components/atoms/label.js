import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export function Label(props) {
  return (
    <Button variant="outlined" {...props}>
      {props.text}
    </Button>
  );
}
/*
export function Label(props) {
  const [color, setColor] = useState(props.color || "#96e296");
  const [text, setText] = useState(props.text || null);
  const [size, setSize] = useState(props.size || "0.7em");
  const [align, setAlign] = useState(props.align || "center");
  const [position, setPosition] = useState(props.position || "relative");
  const [display, setDisplay] = useState(props.display || "block");

  const style = {
    textAlign: `${align}`,
    color: `${color}`,
    fontSize: `${size}`,

    overflow: "hidden",
    position: `${position}`,
    display: `${display}`

    /*
    padding: "5px",
    boxSizing: "border-box",
    border: `2px solid ${colorBorder}`,
    borderRadius: "5px",
    marginTop: "1em",
    marginBottom: "1em",
    */
/*
  };
  const combinedStyle = { ...style, ...props.style };
  return (
    <div style={combinedStyle} className={props.className}>
      {text} {props.children}
    </div>
  );
}
*/
