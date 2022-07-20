import React, { useEffect, useState } from "react";
import { Input } from "../atoms/input";

export function InputBox(props) {
  return (
    <div className="group">
      <Input
        {...props}
        name={props.label.toLowerCase()}
        change={props.change}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{props.label}</label>
    </div>
  );
}
