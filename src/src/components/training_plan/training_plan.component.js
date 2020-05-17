import React from 'react';
import plan from '../../data/training_plan.json';
import './training_plan.css';

const Training_plan = () => {
  return (
  <div class="center">
    <h1 class="title">Training Plans</h1>
    <p>you dont have an active plan</p>
    {plan.map((postDetail, index) => {
      return (
        <div class="plan">
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

export default Training_plan;