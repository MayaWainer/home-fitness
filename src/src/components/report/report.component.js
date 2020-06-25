import React, { useContext } from 'react';
import {userContext} from '../../Context';
import Total from './total.component';
import activityReport from '../../data/report.json';
import './report.css';

class Report extends React.Component {
  render(){
    let totalExercizes = 0;
    let totalCalorie = 0;
    let totalSEC = 0; 
    activityReport.map(obj =>{
      if(obj.userID === this.context.user.userID)
      {
        totalExercizes = totalExercizes + obj.numOfExercise;
        totalCalorie = totalCalorie + obj.TotalCalorie;
        totalSEC = totalSEC + obj.TotalActiveTime;
      }
    })
    return (<div>
      <Total exercise = {totalExercizes} calorie = {totalCalorie} time = {totalSEC} />
      <p>more in the future</p>
    </div>)
  }
}

Report.contextType = userContext;

export default Report;
