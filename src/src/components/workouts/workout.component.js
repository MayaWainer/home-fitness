import React, { useState,useContext } from 'react';
import {workoutContext} from '../../Context';

import ActivityTime from './Timer/timer.component';
import exercises from '../../data/exercises.json';

const Workout = ({obj, onComplete}) => {
const exercise = exercises.find(exercise => exercise.id === obj.exerciseID);
  return (
    <div className="workout_container">
      <div className="exercise_pic"></div>
      <div className="exercise">
        <h1 className="exercise_title">{obj.name}</h1>
        <div className="exercise_explanation">
          {exercise.explanation}
        </div>
        <div className="timer"><ActivityTime onComplete={onComplete} duration ={obj.time}/></div>
      </div>
    </div>
  );
}

Workout.contextType = workoutContext;
export default Workout;