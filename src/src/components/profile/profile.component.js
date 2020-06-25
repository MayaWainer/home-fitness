import React, { useState,useContext } from 'react';
import {userContext} from '../../Context';

class Profile extends React.Component {
  
  // will used to create changes in profile data
  constructor(props){
    super(props);
    this.state = {
      age: "",
      height: "",
      weight: "",
      break: ""
    }
  }

  handleLogOut = () => {
    this.context.setUser(null);
  }

  render(){
    return (
      <div>
        <h1 className="title">Edit Profile</h1>
        <br/>
        <p>hi {this.context.user.username} 
        weight {this.context.user.weight} 
        height {this.context.user.height} 
        age {this.context.user.age} 
        lenth of break {this.context.user.breakLenght} sec
        </p>
        <button 
          type="submit"
          variant="contained"
          color="primary"
          className="button"
          onClick={this.handleLogOut}>
          logout
          </button>
      </div>
    )
  }

}

Profile.contextType = userContext;

export default Profile;