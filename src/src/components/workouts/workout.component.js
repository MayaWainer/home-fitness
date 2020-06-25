import React, { useState,useContext } from 'react';
import {workoutContext} from '../../Context';
import ActivityTime from './workout/timer.component'

const Workout = ({obj , onComplete}) => {
  console.log(obj.name);
  return (
    <div>
      <h1>{obj.name}</h1>
      <ActivityTime onComplete={onComplete} duration ={obj.time}/>
      {/* {obj.time? (console.log("11")):(console.log("1"))} */}
    </div>
  );
}

Workout.contextType = workoutContext;
export default Workout;