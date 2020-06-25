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
      usernamePattern: new RegExp('/[A-z0-9]/'),
      email: "",
      // emailPattern: new RegExp('/\S+@\S+\.\S+/'),
      emailPattern: new RegExp('/[A-z0-9]+@+[A-z0-9]+.+[A-z]/'),
      password: "",
      password2:"",
      passwordPattern: "",
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
      console.log("empty");
    }else{
      if(this.state.usernamePattern.test(this.state.username)){//checks if email is in correct format
        this.setState({error: "Username must have alphabet characters only"});
        console.log("invalid");
      }
      else{
        this.setState({error: ""});
        console.log("pass");
        return true;
      }
    }
    console.log("no");
    return false;
  }

  //Function for validating the mail and writing an error messege if invalid
  checkEmail =() => {
    if(this.state.email === "") //checks if email was entered
    {
      this.setState({error: "email must be filled out"});
    }else{ 
      if(this.state.emailPattern.test(this.state.email))
      // if(emailPattern.test(this.state.email))//checks if email is in correct format
      {
        console.log(this.state.e.test(this.state.email));
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
      // if((this.state.password2 === "")&&())
      //checks if password is in correct lenght
      //checks if password contains only letters and numbers
      //checks if passwords match
      if(1===1){
        this.setState({error: "email is already registered"});
      }
      else{
        this.setState({error: ""});
        return true;
      }
    }
    return false;
  }

  handleSubmit = () => {
      // const user = users.find(obj => obj.mail === this.state.email);
      // if(user){
          //  if(user.password===this.state.password)
          //  {
          //    this.context.setUser(user);
          //  }else{
          //    this.setState({error: "invalid password"});
          //  }
      // }
      // else{
      //   // this.setState({error: "User not registred"});
      // }
      if ((this.checkName())&&(this.checkEmail())&&(this.checkPassword()))
      {
        console.log("pass");
      }
      if (this.state.error === "")
      {
        // const part = this.state.part +1;
        // this.setState({ part: this.state.part +1 });
        // console.log(this.context.state.part);
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

// Login.propTypes = {
//   getUserInfo: propTypes.func.isRequired
// }
Register.contextType = userContext;


export default Register;