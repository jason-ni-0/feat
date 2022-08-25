import React from 'react'


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
    <div class="container-fluid col d-grid gap-3 justify-content-center">
      <p>&nbsp;</p>
      <h1>How far are you willing to travel?</h1>
      <button className="btn btn-primary btn-lg btn-block"onClick={() => handleDist(8047)}>5 miles</button>
      <button className="btn btn-primary btn-lg btn-block" onClick={() => handleDist(16093)}>10 miles</button>
      <button className="btn btn-primary btn-lg btn-block" onClick={() => handleDist(24140)}>15 miles</button>
      <button className="btn btn-primary btn-lg btn-block" onClick={() => handleDist(40000)}>25 miles</button>
      <p>&nbsp;</p>
      <button id="back" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
    </div>
  )
}
export default Distance
