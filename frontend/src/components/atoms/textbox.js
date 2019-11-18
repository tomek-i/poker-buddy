import React, { useEffect, useState } from "react";

export function TextBox(props) {
  const [color, setColor] = useState("#96e296");
  const [colorBorder, setColorBorder] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    if (props.color) setColor(props.color);
    if (props.colorBorder) setColorBorder(props.colorBorder);
    if (props.text) setText(props.text);
  }, []);

  useEffect(() => {
    setColorBorder(colorBorder || color);
  }, [color]);

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
    <div className="player-name" style={style}>
      {text}
    </div>
  );
}
