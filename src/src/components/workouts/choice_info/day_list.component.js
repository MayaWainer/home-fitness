import React from 'react';
import propTypes from 'prop-types';
import '../workout.css'

const DayList = ({ dayList , onDayClick}) => (
  <div className="dayList">
    <div className="title">choose a day</div>
      {dayList.map(obj =>  <button type="submit"
                                  key={obj}
                                  variant="contained"
                                  color="primary"
                                  className="day_choice_button"
                                  onClick={() => onDayClick(obj)}
                            >
                            {obj}{console.log(obj)}
                           </button>
      )}
      <button type="submit"
              className="day_choice_button"
      >
        ...
      </button>
  </div>
)
// ChoiceInfo.propTypes = {
//   item: propTypes.object.isRequired,
//   link: propTypes.string
// };
DayList.propTypes = {
    dayList: propTypes.array.isRequired,
    onDayClick: propTypes.func.isRequired
}

export default DayList;