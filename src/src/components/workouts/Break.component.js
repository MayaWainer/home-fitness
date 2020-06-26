import React, { useState,useContext } from 'react';
import {userContext} from '../../Context';
import ActivityTime from './Timer/timer.component';

const BreakTime = ({onComplete}) => {
  return (
    <div className="workout_container">
      <div className="break_pic"></div>
      <div className="exercise">
        <h1 className="exercise_title">Get Ready</h1>
        <div className="timer"><ActivityTime onComplete={onComplete} duration ={30}/></div>
      </div>
    </div>
  );
}

BreakTime.contextType = userContext;
export default BreakTime;