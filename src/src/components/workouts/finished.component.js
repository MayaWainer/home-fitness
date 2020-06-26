import React, { useState,useContext } from 'react';
import {workoutContext} from '../../Context';

const Finished = ({ sumOfExercise, sumOfCalories, Time }) => (
    <div className="finished_container">
      <div className="congrats_gif"></div>
      <div className="finished_summery">
        number of exercises : {sumOfExercise}
      </div>
      <div className="finished_summery">
        calories burened : {sumOfCalories}
      </div>
      <div className="finished_summery">
        time : {Time}
      </div>
      <button className="finished_button">go back</button>
    </div>
  )
  
  Finished.contextType = workoutContext;
export default Finished;