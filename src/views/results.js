import React from 'react'

import { Helmet } from 'react-helmet'
import {useLocation} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Navigate, Link } from "react-router-dom";

import FirstResult from '../components/first-result'
import ResultInfo from '../components/result-info'
import ScrollBarResults from '../components/scroll-bar-results'
import './results.css'

//Ratings: https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png

const Results = (props) => {
  const resPage = useSelector(state => state.res_page);
  const location = useLocation();
  //console.log(location.state)

  function check(rest){
    if(rest){
      return true;
    }
    return false;
  }
  const restaurant = location.state;

  return check(location.state) ? (
    <div>
      <Helmet>
        <title>Results - FEAT</title>
        <meta property="og:title" content="Results - FEAT" />
      </Helmet>
      <nav class="navbar" id="main-nav">
        <div class="container-fluid">
        <Link className="navbar-brand" id="logo" to="/">FEAT</Link>
      </div>
      </nav>
      <div class="container-expand" id="about-bg">
      <div class="container-fluid bg-white align-items-center" id="content-hold">
        <FirstResult result={restaurant[resPage]}></FirstResult>
        <div class="card">
      <div class="card-body">
        <ResultInfo result={restaurant[resPage]}></ResultInfo>
      </div>
      <img class="card-img-bottom" src={restaurant[resPage].image_url} alt="Yelp Image"/>
      </div>
        <ScrollBarResults resLength={restaurant.length}></ScrollBarResults>
      </div>
    </div>
    </div>) : (<Navigate to="../use" />)
}

export default Results
