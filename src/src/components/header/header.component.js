import React, { useContext } from 'react';
// import { userContext } from './Context' '';
import {userContext} from '../../Context';
import { Link } from "react-router-dom";
import './header.css';
import logo from './logo.png';

// const ALink = (className, href, value) => {
//   const onClick= e => {
//     e.preventDefault();
//     // redirect to href
//   }
//   return <a className="nav_tag" onClick={onClick} href={href}>{value}</a>
// }

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn:false
    }
  }
  render(){
    const { user, setUser } =  this.context;
    return(
      <div>
        {/* nav bar */}

        <nav className="nav">
          <ul>
          {user ? (
         
            <div className="header_container"><li className="li">
              <Link className="nav_tag" to="/">Home/Report</Link>
            </li>
            <li className="li">
              <Link className="nav_tag" to="/profile">profile</Link>
            </li>
            <li className="li">
              {/* <div className="nav_logo"> */}
                <img className="nav_logo" 
                src={logo}
                 alt="Logo" />
                {/* </div> */}
            </li>
            <li className="li">
              <Link className="nav_tag" to="/single_session">single session</Link>
            </li>
            <li className="li">
              <Link className="nav_tag" to="/training_plan">training plan</Link>
            </li>
            </div>
            ) 
             :(<div></div>)}
          </ul>
        </nav>


      </div>
    )
  }
}

Header.contextType = userContext;

export default Header;
