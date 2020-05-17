import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
      <div>
        {/* nav bar */}
        <nav className="nav">
          <ul>
            <li className="li">
              <Link to="/">Home/Report</Link>
            </li>
            <li className="li">
              <Link to="/profile">profile</Link>
            </li>
            <li className="li">
              <Link to="/single_session">single session</Link>
            </li>
            <li className="li">
              <Link to="/training_plan">training_plan</Link>
            </li>
            <li className="li">
              <Link to="/register">register</Link>
            </li>
            <li className="li">
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;
