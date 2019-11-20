import React from "react";
import { Chip } from "../molecule/chip";

export function SmallBlind(props) {
  return <Chip text="S" background="#990000"></Chip>;
}

export function BigBlind(props) {
  return <Chip text="B" background="#dd0000"></Chip>;
}

export function Dealer(props) {
  return <Chip text="D"></Chip>;
}
