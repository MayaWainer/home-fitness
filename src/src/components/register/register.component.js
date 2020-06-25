import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClassNames from 'classnames';
//import './register.css'

const Register = () => {
  
  //let Clicked : false;

  return (
    <div className="container">
      <h2 className="register">
        Register
      </h2>
      {/*part one of registration */}
      <div clasname={ClassNames('part1', /*{'hide' : Clicked === true}*/)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="username"
          label="username"
          name="username"
          autoComplete="username"
          autoFocus
          className="textfield"
        />
        <br/>
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
        <Button
          type="button"
          variant="contained"
          color="primary"
          className="button"
          
        >
        Continue
        </Button>
      </div>
      {/*part two of registration */}
      <div clasname={ClassNames('part2', 'hide')}> 
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="password"
          label="Repeat Password"
          type="password"
          id="password"
          autoComplete="repeat-password"
          className="textfield"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
        >
        Register
        </Button>
      </div>
          
      <a className="test" href="/login" variant="body2">
      Already have an account? Sign in
      </a>
    </div>
  );
}

export default Register;