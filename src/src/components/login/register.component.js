import React from "react";
import Button from "@material-ui/core/Button";
import './register.css';

const Register = ({isLoggedIn=false, email="", password="", onChange, handleSubmit}) => (
  <div className="container_background" >
    <div className="container_Register" >
      <div className="Register_pic">
      </div>
      <div className="Register_form" onKeyUp={(e) => e.keyCode === 13 && handleSubmit(e)}>
        <h2 className="signin">
          Register {isLoggedIn}
        </h2>
        <input
          defaultValue={email}
          id="email"
          placeholder="Email Adress *"
          type="text"
          onChange={onChange}
          className="textfield"
        />
        <br/>
        <input
          id="password"
          placeholder="Password *"
          defaultValue={password}
          type="password"
          onChange={onChange}
          className="textfield"
        />
        <br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
          onClick={handleSubmit}
        >
        Sign In
        </Button>
        <br/>    
        <a className="test" href="/login" variant="body2">
        Already have an account? Sign in
        </a>
  
      </div>
    </div>
  </div>
);

export default Register;