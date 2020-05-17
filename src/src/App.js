import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/login/login.component";
import Register from './components/register/register.component';
import Header from './components/header/header.component';
import Report from './components/report/report.component';
import Profile from './components/profile/profile.component';
import Training_Plan from './components/training_plan/training_plan.component';
import Single_Session from './components/single_session/single_session.component';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/single_session">
            <Single_Session />
          </Route>
          <Route path="/training_plan">
            <Training_Plan />
          </Route>
          <Route path="/">
            <Report />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
