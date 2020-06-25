import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import "./timer.css";

// let prevTime = null;

// const renderTime = ({ remainingTime }) => {
//   setTimeout(() => prevTime = remainingTime, 1);
//   const isTimeUp = remainingTime === 0;
//   return (
//     <div className="time-wrapper">
//       <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
//         {remainingTime}
//       </div>
//       {prevTime !== null && (
//         <div
//           key={prevTime}
//           className={`time ${!isTimeUp ? "down" : ""}`}
//         >
//           {prevTime}
//         </div>
//       )}
//     </div>
//   );
// };

const ActivityTime = ({ onComplete , duration}) => (<div className="time-wrapper">
    <CountdownCircleTimer isPlaying duration={3} onComplete={onComplete}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}>
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer></div>);

export default ActivityTime;