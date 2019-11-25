import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <div className="btn-box">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          //className={classes.submit}
        >
          Submit
        </Button>

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
