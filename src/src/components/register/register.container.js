import React, { useContext } from 'react';
import {userContext} from '../../Context';
import propTypes from 'prop-types';
import RegisterComponent from './register.component';
import users from '../../data/users.json';
import './register.css';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      Pattern: new RegExp(/^[A-z0-9]*$/),
      email: "",
      emailPattern: new RegExp(/^[A-z0-9]+@[A-z0-9]+\.[A-z]*$/),
      password: "",
      password2:"",
      maxPassword: 6,
      error: ""
    }
  }

  // const emailRegex = new RegExp('/\S+@\S+\.\S+/');

  onChange = (e) => {
      const { id, value } = e.target;
      this.setState({ [id]: value });
  }

  //Function for validating the username and writing an error messege if invalid
  checkName =() => {
    if(this.state.username === "")//checks if email was entered
    {
      this.setState({error: "name must be filled"});
    }
    else if(this.state.Pattern.test(this.state.username))//checks if email is not in correct format
      {  
      this.setState({error: ""});
        return true;
      }
      else
      {
        this.setState({error: "Username must have alphabet characters only"});
      }
      return false;
    }


  //Function for validating the mail and writing an error messege if invalid
  checkEmail =() => {
    if(this.state.email === "") //checks if email was entered
    {
      this.setState({error: "email must be filled out"});
    }else{ 
      if(!this.state.emailPattern.test(this.state.email)) //checks if email is not in correct format
      {
        this.setState({error: "please enter a valid email"});
      }else{//checks if email is alredy registerd
        const user = users.find(obj => obj.mail === this.state.email);
        if(user){
          this.setState({error: "email is already registered"});
        }
        else{
          this.setState({error: ""});
          return true;
        }
      }
    }
    return false;
  }

  //Function for validating the password and writing an error messege if invalid
  checkPassword =() => {
    if ((this.state.password === ""))//checks if password was entered
    {
      this.setState({error: "please choose a password"});
    }
    else{
      //checks if password is in correct lenght
      if(this.state.Pattern.test(this.state.password)) //checks if password contains only letters and numbers
      {
        if(this.state.password.length <= this.state.maxPassword ) //checks if password is in currect length
        {
          if(this.state.password === this.state.password2) // checks if passwords match
          {
            this.setState({error: ""});
            return true;
          }
          else{
            this.setState({error: "passwords do not match"});
          }
        }
        else{
          this.setState({error: "passwords can only have 6 charcters"});
        }
      }
      else{
        this.setState({error: "password  must have alphabet characters only"});
      }
    }
    return false;
  }

  handleSubmit = () => {
      if ((this.checkName())&&(this.checkEmail())&&(this.checkPassword()))
      {
        const user = {
            username : this.state.username,
            mail: this.state.email,
            password: this.state.password,
            age: null,
            height: null,
            weight: null,
            breakLenght: 30,
            lastActivity: 0,
            activePlan: 0,
            activePlanday: 0,
            isHealthy: true,
            isAdmin: false
        };
        this.context.setUser(user); // create and update new user to context
      }
  }

  render(){
    return (
      <div className="container_background">
        <div className="container">
          <div className="pic"></div>
          <RegisterComponent { ... this.state }
                           isLoggedIn={false}
                           error={this.state.error}  
                           onChange={this.onChange} 
                           handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

Register.contextType = userContext;


export default Register;