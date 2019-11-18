import React, { useEffect, useState } from "react";

//https://codepen.io/pmk/pen/GgrJRq

export function Chip(props) {
  const [background, setBackground] = useState("#dddddd");
  const [innerColor, setInnerColor] = useState("#C1C1C1");
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.background) setBackground(props.background);
    if (props.innerColor) setInnerColor(props.innerColor);
    if (props.text) setText(props.text);
  }, []);

  const style = {
    margin: "1em",
    position: "relative",
    display: "inline-block",
    width: "151px",
    height: "151px",

    borderRadius: "50%",
    backgroundSize: "151px 151px",
    backgroundPosition: "center center",

    boxShadow:
      "0 0 5px 1px rgba(0, 0, 0, 0.5), 0 0 3px 0 rgba(0, 0, 0, 0.4) inset",
    backgroundImage:
      "linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), " +
      "linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), " +
      `linear-gradient(120deg, ${background} 0, ${background} 97.4304px, #fff 97.4304px, #fff 113.4304px, ${background} 113.4304px, ${background} 151px)`
  };
  const before = {
    position: "absolute",
    zIndex: 1,
    width: "117px",
    height: "117px",
    borderRadius: "50%",
    top: "33px",
    left: "33px",
    backgroundSize: "151px 151px",
    backgroundPosition: "center center",
    border: `8px solid ${background}`,
    backgroundImage:
      "linear-gradient(0deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), " +
      "linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), " +
      "linear-gradient(60deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), " +
      "linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), " +
      "linear-gradient(120deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), " +
      `linear-gradient(150deg, ${innerColor} 0, ${innerColor} 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, ${innerColor} 110.7104px, ${innerColor} 151px)`
  };
  const after = {
    zIndex: 2,
    position: "absolute",
    textAlign: "center",
    font: "bold 50px/111px Arial",
    whiteSpace: "pre",
    width: "111px",
    height: "111px",
    borderRadius: "50%",
    top: "20px",
    left: "20px",
    background: `${background}`,
    color: `${innerColor}`,
    textShadow:
      "-1px -1px 0px rgba(0, 0, 0, 0.3), 1px 1px 0px rgba(255, 255, 255, 0.2)"
  };
  return (
    <>
      <span style={before}></span>
      <div className="pokerchip" style={style}>
        <span style={after}>{text}</span>
      </div>
    </>
  );
}
