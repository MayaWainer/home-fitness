import React, { useContext } from 'react';
import {userContext} from '../../../Context';
import plan from '../../../data/training_plan.json';
import ChoiceInfo from './choice_info.component.js';
import './training_plan.css';
import planDays from '../../../data/plan_days.json';

import DayList from './day_list.component.js';
import ExerciseList from './exercise_list.component.js';

class TrainingPlan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showExerciseList: null,
      exerciseList: null,
      showDayList: null
    }
  }

  onChoiceClick = (showDayList) => this.setState({showDayList});

  onDayClick = (showExerciseList) => {
    let list = planDays.find(p => p.id === showExerciseList)
    // console.log(list.WorkoutList);
    this.setState({ exerciseList : list.WorkoutList , showExerciseList : showExerciseList})
    console.log(this.state.showExerciseList)
  };

  onStartWorkOut = (session) => {
    console.log(session);
    if(session){
                  this.context.setWorkout(session);
               }
    }

  render(){
    //array of plan options the user has
    const items = plan.map(item => <ChoiceInfo key={item.id} // plan ID
                                               item={item} // day plan  - object
                                               dayList={item.dayListOfID} // list of workout day's IDs
                                               exerciseList ={this.state.exerciseList}
                                               showDayList = {this.state.showDayList === item.id}
                                               showExerciseList={this.state.showExerciseList}
                                               
                                               onChoiceClick={this.onChoiceClick}
                                               onDayClick={this.onDayClick}
                                              //  list={this.state.showDay && planDays.find(p => p.id === this.state.showDay).workouts}
                                               onStart={() => this.onStart(item)}
                                    />)
    return (
      <div className="center">
        <h1 className="title">training plan</h1>
        {/* <ActivePlan active={this.state.active}/> */}
        {items}
      </div>
    );
  }
}

TrainingPlan.contextType = userContext;

export default TrainingPlan;