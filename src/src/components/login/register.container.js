import React, { useContext } from 'react';
import {userContext} from '../../Context';
import propTypes from 'prop-types';
import RegisterComponent from './register.component';
import users from '../../data/users.json';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      part: 1
    }
  }

  onChange = (e) => {
      const { id, value } = e.target;
      this.setState({ [id]: value });
  }
  handleSubmit = () => {
      const user = users.find(obj => obj.mail === this.state.email && obj.password=== this.state.password);
      if(user){
        this.context.setUser(user);
        setTimeout(() => console.log(JSON.stringify( this.context.user, null, 2)), 1);
      }
      else{
        // alert("not registred"); 
      }
  }

  render(){
    return <RegisterComponent { ... this.state }
                           isLoggedIn={false}  
                           onChange={this.onChange} 
                           handleSubmit={this.handleSubmit} />
  }
}

// Login.propTypes = {
//   getUserInfo: propTypes.func.isRequired
// }
Register.contextType = userContext;


export default Register;