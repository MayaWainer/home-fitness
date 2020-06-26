import React, { useState,useContext } from 'react';
import {userContext} from '../../Context';
import './profile.css';

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
      <div className="profile_container">
        <h1 className="title">{this.context.user.username}'s profile</h1>
        
        <div className="editItem">
          <div className="edit_title"> weight (kg) </div>
          <input type="number"
                 className="edit_input"
                 placeholder={this.context.user.weight} 
                 min="20" 
                 max="500"
                 step="0.1">
          </input>
        </div>

        <div className="editItem">
          <div className="edit_title"> height (cm) </div>
          <input type="number"
                 className="edit_input"
                 placeholder={this.context.user.height} 
                 min="20" 
                 max="200"
                 step="0.1">
          </input>
        </div>

        <div className="editItem">
          <div className="edit_title"> age </div>
          <input type="number"
                 className="edit_input"
                 placeholder={this.context.user.age} 
                 min="10" 
                 max="100"
                 step="1">
          </input>
        </div>

        <div className="editItem">
          <div className="edit_title"> length of break (sec) </div>
          <input type="number"
                 className="edit_input"
                 placeholder={this.context.user.breakLenght} 
                 min="10" 
                 max="200"
                 step="1">
          </input>
        </div>

        <button type="submit"
                className="logOut"
                onClick={this.handleLogOut}>
                logout
        </button>
      </div>
    )
  }

}

Profile.contextType = userContext;

export default Profile;