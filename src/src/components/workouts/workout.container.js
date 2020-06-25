import React, { useContext } from 'react';
import {workoutContext} from '../../Context';
import activityReport from '../../data/report.json';
import exercises from '../../data/exercises.json';
import Workout from './workout.component.js';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './workout.css'
 
const BreakTime = ({ onComplete }) => (
  <CountdownCircleTimer isPlaying duration={1} onComplete={onComplete}
    colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}>
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

const Finished = ({ sumOfExercise, sumOfCalories, Time }) => (
  <div>
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

class StartWorkOut extends React.Component {

  state = { currentActivity: -1, onBreak: true };

  onBreakEnd = () => this.setState({ onBreak: false, currentActivity: this.state.currentActivity + 1 });

  isFininshed = () => this.state.currentActivity === this.context.activeWorkout.WorkoutList.length - 1;

  onComplete =() => {
    console.log(this.isFininshed());
    return !this.isFininshed() &&
                    this.setState({ onBreak: true});
  }

  render(){
    console.log(this.context.activeWorkout);
    const STARTBREAK = { name: "Get Ready", time: 15 };
    const BREAKTIME = { name: "Break Time", time: 30 };
    return (<div className="workout_container"> 
      { this.state.onBreak ? 
        <BreakTime onComplete={this.onBreakEnd} /> :
        // <Workout obj={this.state.currentActivity === -1 ? STARTBREAK : BREAKTIME} onComplete={this.onBreakEnd} /> : 
        this.isFininshed() ? <Finished sumOfExercise="" sumOfCalories="" Time=""/> : 
        <Workout obj={this.context.activeWorkout.WorkoutList[this.state.currentActivity]} onComplete={this.onComplete} />}
    </div>)
  }
}

StartWorkOut.contextType = workoutContext;

export default StartWorkOut