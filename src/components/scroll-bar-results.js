import React from 'react'

import PropTypes from 'prop-types'
import { useSelector,useDispatch } from 'react-redux';
import { changeResPage } from '../actions';

import './scroll-bar-results.css'

const ScrollBarResults = (props) => {
  const resPage = useSelector(state => state.res_page);
  const dispatch = useDispatch();
  function backShow(page){
    if(page === 0){
      return false;
    }
    return true;
  }
  
  function nextShow(page){
    if(page === props.resLength - 1){
      return false;
    }
    return true;
  }
  function handleNext(){
    const newPage = resPage + 1;
    dispatch(changeResPage(newPage));
  }
  function handleBack(){
    const newPage = resPage - 1;
    dispatch(changeResPage(newPage));
  }
  return (
    <div className={`scroll-bar-results-container ${props.rootClassName} `}>
      {backShow(resPage) ? <button onClick={handleBack} className="scroll-bar-results-button button">
        {props.button1}
      </button> : null}
      {nextShow(resPage) ? <button onClick={handleNext} className="scroll-bar-results-button1 button">
        {props.button11}
      </button> : null}
    </div>
  )
}

ScrollBarResults.defaultProps = {
  button11: 'Next',
  button1: 'Back',
  rootClassName: '',
}

ScrollBarResults.propTypes = {
  button11: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ScrollBarResults
