import React, { useContext } from 'react';
import {workoutContext} from '../../Context';

import activityReport from '../../data/report.json';
import exercises from '../../data/exercises.json';

import Workout from './workout.component.js';
import Finished from './finished.component.js';
import BreakTime from './Break.component.js';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './workout.css';
 
// const BreakTime = ({ onComplete }) => (
//   <CountdownCircleTimer isPlaying duration={1} onComplete={onComplete}
//     colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}>
//     {({ remainingTime }) => remainingTime}
//   </CountdownCircleTimer>
// );

// const Finished = ({ sumOfExercise, sumOfCalories, Time }) => (
//   <div>
//     <div className="congrats_gif"></div>
//     <div className="finished_summery">
//       number of exercises : {sumOfExercise}
//     </div>
//     <div className="finished_summery">
//       calories burened : {sumOfCalories}
//     </div>
//     <div className="finished_summery">
//       time : {Time}
//     </div>
//     <button className="finished_button">go back</button>
//   </div>
// )

class StartWorkOut extends React.Component {

  state = { currentActivity: -1, exercise:null, onBreak: true };

  onBreakEnd = () => {
    this.setState({ onBreak: false, currentActivity: this.state.currentActivity + 1 });
  }

  isFininshed = () => this.state.currentActivity === this.context.activeWorkout.WorkoutList.length - 1;

  onComplete =() => {
    return !this.isFininshed() &&
                    this.setState({ onBreak: true});
  }

  render(){
    console.log(this.context.activeWorkout);
    const STARTBREAK = { name: "Get Ready", time: 15 };
    const BREAKTIME = { name: "Break Time", time: 30 };
    return (<div> 
      { this.state.onBreak ? 
        <BreakTime onComplete={this.onBreakEnd} /> :
        this.isFininshed() ? <Finished sumOfExercise={this.context.activeWorkout.workouts} sumOfCalories={this.context.activeWorkout.calorie} Time={this.context.activeWorkout.minTime}/> : 
        <Workout obj={this.context.activeWorkout.WorkoutList[this.state.currentActivity]} exercise={this.state.exercise} onComplete={this.onComplete} />}
    </div>)
  }
}

StartWorkOut.contextType = workoutContext;

export default StartWorkOut