import React, { useContext } from 'react';
import {workoutContext} from '../../../Context';
import SessionList from '../../../data/single_session.json'
import ChoiceInfo from './choice_info.component.js';
// import './workout.css';

import '../workout.css';

class SingleSession extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showExerciseList: null
    }
  }

  onStartWorkOut = (session) => {
                    console.log(session);
                    if(session){
                                  this.context.setWorkout(session);
                               }
                    }

  onChoiceClick = (showExerciseList) => this.setState({ showExerciseList });
  
  render(){
    //array of session choices the user has
    const items = SessionList.map(session => <ChoiceInfo key={session.id} // session ID
                                                         item  ={session}  // session object
                                                         exerciseList = {session.WorkoutList} // list of exercises
                                                         onChoiceClick= {this.onChoiceClick} // opens the chosen session
                                                         showExerciseList= {this.state.showExerciseList === session.id }
                                                         onStartWorkOut={() => this.onStartWorkOut(session)} 
                                              />)
    return (
      <div className="center">
        <h1 className="title">Single Session</h1>
        {items}
      </div>
    )
  }
}

SingleSession.contextType = workoutContext;

export default SingleSession;