import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import './login.css'

export default function Login() {

  return (
    <div className="container">
      <h2 className="signin">
        Sign in
      </h2>

      <TextField
        variant="outlined"
        margin="normal"
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        className="textfield"
      />
      <br/>
      <TextField
        variant="outlined"
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        className="textfield"
      />
      <br/>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="button"
      >
      Sign In
      </Button>
      <br/>    
      <a href="/register" variant="body2">
      Don't have an account? Sign Up
      </a>

    </div>

  );
}