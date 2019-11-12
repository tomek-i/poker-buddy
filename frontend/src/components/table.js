import React, { useEffect, useState } from "react";
import Card from "./card";

import "../css/Table.css";

function Table() {
  return (
    <div className="table">
      <div className="card-place">
        <Card rank={1} suit={2} flipped={true}></Card>
        <Card rank={1} suit={2} flipped={true}></Card>
        <Card rank={1} suit={2} flipped={true}></Card>
        <Card rank={1} suit={2} flipped={true}></Card>
        <Card rank={1} suit={2} flipped={true}></Card>
      </div>
    </div>
  );
}
//codepen:https://codepen.io/rivy33/pen/ZoNvpw

export default Table;
