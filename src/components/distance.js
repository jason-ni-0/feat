import React from 'react'

import PropTypes from 'prop-types'

import { useSelector, useDispatch } from "react-redux";
import { changePage, changeDist } from "../actions";

import './distance.css'

const Distance = (props) => {
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(changePage("start"));
  }

  function handleDist(newDist) {
    dispatch(changeDist(newDist));
    dispatch(changePage('type'));
  }

  return (
    <div className="distance-container">
      <div className="distance-container1">
        <h1 className="distance-text">{props.heading}</h1>
        <button className="distance-button button" onClick={() => handleDist(8047)}>{props.button}</button>
        <button className="distance-button1 button" onClick={() => handleDist(16093)}>{props.button1}</button>
        <button className="distance-button2 button" onClick={() => handleDist(24140)}>{props.button11}</button>
        <button className="distance-button3 button" onClick={() => handleDist(40000)}>{props.button111}</button>
        <button className="distance-button4 button" onClick={handleBack}>{props.BackButton}</button>
      </div>
    </div>
  )
}

Distance.defaultProps = {
  button1: '10 miles',
  heading: 'How far are you willing to travel?',
  button11: '15 miles',
  BackButton: 'Back',
  button: '5 miles',
  button111: '25 miles',
}

Distance.propTypes = {
  button1: PropTypes.string,
  heading: PropTypes.string,
  button11: PropTypes.string,
  BackButton: PropTypes.string,
  button: PropTypes.string,
  button111: PropTypes.string,
}

export default Distance
