import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { changeResPage } from '../actions';
import { useNavigate } from "react-router-dom";

import './scroll-bar-results.css'

const ScrollBarResults = (props) => {
  const resPage = useSelector(state => state.res_page);
  const dispatch = useDispatch();
  let navigate = useNavigate(); 
  const goHome = () =>{ 
    let path = `/use`; 
    navigate(path);
    window.location.reload();
  }
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
    <div id="scroll-bar-results-container" class="btn-toolbar justify-content-between">
    {backShow(resPage) ? <button onClick={handleBack} id="backButton" className="btn btn-primary align-self-start">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
    </svg>
      </button> : <button onClick={handleBack} id="backButton" className="btn btn-primary align-self-start invisible"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
    </svg></button>}
    <button onClick={goHome} id="backButton" className="btn btn-primary align-self-center">Retry <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
</svg></button>
      {nextShow(resPage) ? <button onClick={handleNext} id="nextButton" className="btn btn-primary align-self-end">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
      </button> : <button onClick={handleNext} id="nextButton" className="btn btn-primary align-self-end invisible"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg></button>}
  </div>
  )
}

export default ScrollBarResults
