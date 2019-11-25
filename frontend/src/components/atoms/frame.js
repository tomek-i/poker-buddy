import React, { useEffect, useState } from "react";

export function Frame(props) {
  const [width, setWidth] = useState(props.width || 3.5);
  const [height, setHeight] = useState(props.height || 5);
  const [radius, setRadius] = useState(props.radius || "0.25em");
  const [color, setColor] = useState(props.color || "#ccc5b3");

  const style = {
    width: `${width}em`,
    height: `${height}em`,
    background: `${color}`,
    borderRadius: `${radius}`,
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    boxShadow: "1px 1px 6px rgba(0,0,0,0.25)"
  };

  return (
    <div
      style={{ ...style, ...props.style }}
      className={"frame " + props.classes}
    >
      {props.children}
    </div>
  );
}
