import React from 'react';
import exercise from '../../data/exercises.json';
import './single_session.css';

const Single_Session = () => {
  return (
    <div class="center">
      <h1 class="title">Single Session</h1>
      {exercise.map((postDetail, index) => {
        return (
          <div class="session">
            <h2>{postDetail.name}</h2>
            <h3>difficulty:{postDetail.difficulty} - bodyPart:{postDetail.bodypart}</h3>
            <p>{postDetail.Explanation}</p>
            <button type="button" class="button">"Start now</button>
            <br/>
          </div>
        )})}
    </div>
  );
}

export default Single_Session;