import React, { Component, useContext, useState, useMemo} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory, Redirect} from "react-router-dom";
import Login from "./components/login/login.container";
import Register from './components/register/register.container';
import Header from './components/header/header.component';
import Report from './components/report/report.component';
import Profile from './components/profile/profile.component';
import TrainingPlan from './components/workouts/trainingPlan/training_plan.container';
import SingleSession from './components/workouts/otherStuff/single_session.component';
import Workout from './components/workouts/workout.container';
import {workoutContext,userContext} from './Context';
import _ from 'lodash';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    const [activeWorkout, setWorkout] = useState(null);
    const active = useMemo(() => ({ activeWorkout, setWorkout }), [activeWorkout, setWorkout]);
    return (
    <userContext.Provider value={value}>
        <Router>
              <Header/>
              <Switch>
                  <Route exact path="/">
                      {user ? (<Report />):(<Login />)}
                  </Route>
                  <Route exact path="/report">
                      {user ? (<Report />):(<Login />)}
                  </Route>
                  <Route exact path="/profile">
                      {user ? (<Profile/>):(<Login />)}
                  </Route>
                  <Route exact path="/register">
                  {user ? (<Report />):(<Register />)}
                  </Route>
                  <Route exact path="/login">
                     {user ? (<Report />):(<Login />)}
                  </Route>
                  <workoutContext.Provider value={active}>
                      <Route exact path="/single_session">
                          {user ? (<SingleSession/>):(<Login />)}
                      </Route>
                      <Route exact path="/training_plan">
                          {user ? (<TrainingPlan />):(<Login />)}
                      </Route>
                      <Route exact path="/workout">
                          {activeWorkout ? (<Workout/>):(<SingleSession/>)}
                      </Route>
                  </workoutContext.Provider>
              </Switch>
        </Router> 
    </userContext.Provider>
    )
}
export default App;