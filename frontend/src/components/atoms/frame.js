import React, { useEffect, useState } from "react";

export function Frame(props) {
  const [width, setWidth] = useState(3.5);
  const [height, setHeight] = useState(5);
  const [radius, setRadius] = useState(0.25);
  const [color, setColor] = useState("#ccc5b3");

  useEffect(() => {
    if (props.width) setWidth(props.width);
    if (props.height) setHeight(props.height);
    if (props.radius) setRadius(props.radius);
    if (props.color) setColor(props.color);
  }, []);

  const style = {
    width: `${width}em`,
    height: `${height}em`,
    background: `${color}`,
    borderRadius: `${radius}em`,
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    boxShadow: "1px 1px 6px rgba(0,0,0,0.25)"
  };

  return (
    <div className="frame" style={style}>
      {props.children}
    </div>
  );
}
