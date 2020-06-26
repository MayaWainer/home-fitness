import React from 'react';
import {workoutContext} from '../../../Context';
import ChoiceInfo from '../choice_info/choice_info.component.js';

import DayList from '../choice_info/day_list.component.js';
import ExerciseList from '../choice_info/exercise_list.component.js';

import planDays from '../../../data/plan_days.json';
import plan from '../../../data/training_plan.json';

import '../workout.css'

class TrainingPlan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        expandedPlan: null,
        expandedDay: null
    }
  }

  onExpand = (id) => {
    if(this.state.expandedPlan)
    {
      if(this.state.expandedPlan===id){
        this.setState({expandedPlan: null});
      }else{
        this.setState({expandedPlan: id});
      }
    }else{
      this.setState({expandedPlan: id});
    }
  };

  onDayClick = (id) => this.setState({expandedDay: id});

  onStartWorkOut = () => {
    this.context.setWorkout(planDays.find(p => p.id === this.state.expandedDay));
  }

  render(){
      const { expandedPlan, expandedDay } = this.state;
      return (<div className="center">
                <h1 className="title">training plan</h1>
                {plan.map(p => <ChoiceInfo key={p.id} item={p} 
                                           isExpanded={expandedPlan === p.id} 
                                           onExpand={() => this.onExpand(p.id)}>
                                               { expandedDay ? 
                                                    <ExerciseList exerciseList={planDays.find(p => p.id === expandedDay).WorkoutList} 
                                                                  onStartWorkOut={this.onStartWorkOut} /> :
                                                   <DayList dayList={p.dayListOfID} onDayClick={this.onDayClick} /> }
                                           </ChoiceInfo>)}
              </div>);
  }
}

TrainingPlan.contextType = workoutContext;

export default TrainingPlan;