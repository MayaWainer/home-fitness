import React from "react";
import Button from "@material-ui/core/Button";
import './login.css';
//import login from './login.jpg';

const Login = ({isLoggedIn=false, email="", password="", onChange, handleSubmit}) => (
  <div className="container_background" >
    <div className="container_login" >
      <div className="login_pic">
      </div>
      <div className="login_form" onKeyUp={(e) => e.keyCode === 13 && handleSubmit(e)}>
        <h2 className="signin">
          Sign in {isLoggedIn}
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
        <button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
          onClick={handleSubmit}
        >
        Sign In
        </button>
        <br/>    
        <a className="test" href="/register" variant="body2">
        Don't have an account? Sign Up
        </a>
  
      </div>
    </div>
  </div>
);

export default Login;