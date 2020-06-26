import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import './timer.css';

const ActivityTime = ({ onComplete , duration}) => (<div className="time-wrapper">
    <CountdownCircleTimer isPlaying duration={duration} onComplete={onComplete}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}>
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer></div>);

export default ActivityTime;