import React from "react";
import Button from "@material-ui/core/Button";
import './register.css';

const Register = ({isLoggedIn=false, username="", email="", password="", password2="",error="", onChange, handleSubmit}) => (
      <div className="Register_form" onKeyUp={(e) => e.keyCode === 13 && handleSubmit(e)}>
        <h2 className="signin">
          Register {isLoggedIn}
        </h2>
        <h3 className="msg">
          {error}
        </h3>
        <input defaultValue={username}
               id="username"
               placeholder="Username*" 
               type="text"
               className="textfield"
               onChange={onChange}
        />
        <br/>
        <input defaultValue={email}
               id="email"
               placeholder="Email Adress *"
               type="text"
               className="textfield"
               onChange={onChange}
        />
        <br/>
        <input defaultValue={password}
               id="password"
               placeholder="Password *"
               type="password"
               className="textfield"
               onChange={onChange}
        />
        <br/>
        <input defaultValue={password2}
               id="password2"
               placeholder="Repeat Password *"
               type="password"
               className="textfield"
               onChange={onChange}
        />
        <br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
          onClick={handleSubmit}
        >
        Sign in
        </Button>
        <br/>    
        <a className="test" href="/login" variant="body2">
        Already have an account? Sign in
        </a>
  
      </div>
);

export default Register;