import React from 'react';
import propTypes from 'prop-types';
import '../workout.css'

const DisplayItem = ({ item }) => (<div className="item">
  <h1 >{item.name}</h1>
  <p className="choice_title">difficulty: {item.difficulty}     bodyPart: {item.bodyPart}</p>
  <p>{item.explanation}</p>
</div>);

const ChoiceInfo = ({ item, isExpanded=false, onExpand, children }) => (
  <div className="choice_container">
    <div className="choice_info"><DisplayItem item={item} /></div>
    <div className="expandContent">
      <button type="submit" className="choice_button" variant="contained" color="primary" onClick={onExpand}>
        { !isExpanded ? "more" : "less" }
      </button>
      { isExpanded && children }
    </div>
  </div>);

ChoiceInfo.propTypes = {
  item: propTypes.object.isRequired,
  isExpanded: propTypes.bool,
  onExpand: propTypes.func.isRequired,
};

export default ChoiceInfo;