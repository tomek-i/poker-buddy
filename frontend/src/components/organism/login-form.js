import React, { useEffect, useState } from "react";
import { InputBox } from "../molecule/inputbox";

export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      style={{
        //border: "1px solid black",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "15px",
        paddingTop: "5px",

        backgroundColor: "#ececec",
        boxShadow:
          "0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12)"
      }}
    >
      <InputBox label="Email" change={e => setEmail(e.target.value)} />
      <InputBox
        label="Password"
        type="password"
        change={e => setPassword(e.target.value)}
      />
      <div className="btn-box">
        <button
          className="btn btn-submit"
          type="submit"
          onClick={e => {
            e.preventDefault();
            console.log([email, password]);
          }}
        >
          SUBMIT
        </button>

        <button
          className="btn btn-cancel"
          type="submit"
          onClick={e => {
            e.preventDefault();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
