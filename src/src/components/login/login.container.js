import React, { useContext } from 'react';
import {userContext} from '../../Context';
import propTypes from 'prop-types';
import LoginComponent from './login.component';
import users from '../../data/users.json';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
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
  }

  render(){
    return <LoginComponent { ... this.state }
                           isLoggedIn={false}  
                           onChange={this.onChange} 
                           handleSubmit={this.handleSubmit} />
  }
}

// Login.propTypes = {
//   getUserInfo: propTypes.func.isRequired
// }
Login.contextType = userContext;


export default Login;