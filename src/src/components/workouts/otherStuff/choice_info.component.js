import React, { Children } from 'react';
import propTypes from 'prop-types';
import DayList from './day_list.component.js';
import ExerciseList from './exercise_list.component.js';
import '../workout.css'

const ChoiceInfo = ({ item, exerciseList, dayList ,showExerciseList=false, showDayList=null, onChoiceClick,onDayClick, onStartWorkOut}) => (
  <div className="choice_container">
    {/* <ChoiceInfo2 item={item} isExpanded={showDayList || showExerciseList} 
                onExpand={() =>onChoiceClick(!(showDayList || showExerciseList) ? item.id : null)}>
                  <div>hello world</div>
      </ChoiceInfo2> */}
    <div className="choice">
      <h1 className="choice_title">{item.name}</h1>
      <div className="difficulty"></div>
      <p>difficulty:{item.difficulty} - bodyPart:{item.bodyPart}</p>
      <p>{item.explanation}</p>
      <button 
          type="submit"
          id= {item.id}
          variant="contained"
          color="primary"
          className="choice_button"
          onClick={() =>onChoiceClick(!(showDayList || showExerciseList) ? item.id : null)}>
            {(!showDayList && !showExerciseList )? "more" : "less" }
      </button>
    </div>

    { showDayList ? 
      <div className="day_list">
        {/* {let planList = planDays.find(obj => obj.id === e.target.id);} */}
        {console.log(dayList)}
        <DayList dayList={dayList} onDayClick={onDayClick}/>
    </div> : <div /> }

    { showExerciseList ? 
      <div className="exercise_list">
        <ExerciseList exerciseList={exerciseList} onStartWorkOut={onStartWorkOut}/>
    </div> : <div /> }
  </div>
);

const DisplayItem = ({ item }) => (<div className="item">
  <h1 className="choice_title">{item.name}</h1>
  <p>difficulty:{item.difficulty} - bodyPart:{item.bodyPart}</p>
  <p>{item.explanation}</p>
</div>);

const ChoiceInfo2 = ({ item, isExpanded, onExpand, children }) => (
  <div className="choice_container">
    <div className="choice_into"><DisplayItem item={item} /></div>
    <div className="expandContent">
      <button type="submit" className="button" variant="contained" color="primary" onClick={onExpand}>
        { !isExpanded ? "more" : "less" }
      </button>
      { isExpanded && children }
    </div>
  </div>);

ChoiceInfo.propTypes = {
  item: propTypes.object.isRequired, //either a session object or a dayPlan object
  key: propTypes.number,             //the item's ID
  dayList: propTypes.array,         //list of days of plan object
  exerciseList: propTypes.array,    //list of one ssesion/day's exercise
  
  onChoiceClick: propTypes.func.isRequired,
  onDayClick: propTypes.func,
  onStartWorkOut: propTypes.func     
};

export default ChoiceInfo;