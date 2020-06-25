import React from 'react';
import Report from '../../data/report.json';

const Total = ({exercise, calorie, time}) => {

  return (
    <div className="Total_wrapper">
      <div className="Total">
          total exercises : <h1>{exercise}</h1>
      </div>
      <div className="Total">
          total calories : <h1>{calorie}</h1>
      </div>
      <div className="Total">
          total time : <h1>{time}</h1> sec
      </div>
    </div>
  );
}

export default Total;