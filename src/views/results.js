import React from 'react'

import { Helmet } from 'react-helmet'
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

import FirstResult from '../components/first-result'
import ResultInfo from '../components/result-info'
import ScrollBarResults from '../components/scroll-bar-results'
import './results.css'

const Results = (props) => {
  const resPage = useSelector(state => state.res_page);
  const location = useLocation();
  //console.log(location.state)
  const restaurant = location.state;

  let navigate = useNavigate(); 
  const goHome = () =>{ 
      let path = `/`; 
      navigate(path);
      window.location.reload();
}
  var toRender = <FirstResult rootClassName="first-result-root-class-name" result={restaurant[resPage]}></FirstResult>;
  return (
    <div className="results-container">
      <Helmet>
        <title>Results - FEAT</title>
        <meta property="og:title" content="Results - FEAT" />
      </Helmet>
      <div className="results-container1">
        {toRender}
        <ResultInfo rootClassName="result-info-root-class-name" result={restaurant[resPage]}></ResultInfo>
        <div className="results-container2">
        <img src={restaurant[resPage].image_url}></img>
        </div>
        <ScrollBarResults rootClassName="scroll-bar-results-root-class-name1" resLength={restaurant.length}></ScrollBarResults>
        <button onClick={goHome} className="results-get-new-result-button button">
          New FEAT
        </button>
      </div>
    </div>
  )
}

export default Results
