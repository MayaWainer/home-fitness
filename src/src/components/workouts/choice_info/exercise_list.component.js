import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../workout.css'
const ExerciseList = ({exerciseList , onStartWorkOut}) => (
    <div >
        {exerciseList.map(exercise => <div key={exercise.exerciseID} className="exerciseList">
            <div className="exerciseList_items">{exercise.name}</div>
            {exercise.time? (<div className="exerciseList_items">{exercise.time} sec</div>):(<div className="exerciseList_items">X {exercise.rep}</div>)}
           </div>)}
           <br/><Link to="/workout" className="start_button" onClick={onStartWorkOut}>start</Link>
    </div>
  )

ExerciseList.propTypes = {
    exerciseList: propTypes.array.isRequired,
    onStartWorkOut: propTypes.func.isRequired
}

export default ExerciseList;