import React from 'react'
import axios from "axios";

import { useSelector,useDispatch } from 'react-redux';
import { changeLoc, changePage, changeLat, changeLng } from '../actions';
import LoadingOverlay from "react-loading-overlay";
import { InfinitySpin } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";


function FeatPortal(props){
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const [curLoc, setCurLoc] = React.useState(null);
    const [lat, setLat] = React.useState(null);
    const [lng, setLng] = React.useState(null);
    const [status, setStatus] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
  
    //console.log(lat, lng);
    //console.log(status);
  
    const simpleAlertHandler = () => {
      alert(`Enter a valid location`);
    };
  
    function handleStart(){
      let promise = new Promise(function(resolve, reject) {
        axios.get(`https://featserv-env.eba-ifrc9mun.us-west-1.elasticbeanstalk.com/results/`, { params: {location: curLoc, latitude: lat, longitude: lng}})
        .then(res => {
        //console.log(res.data);
          if(res.data !== 'LOCATION_NOT_FOUND'){
            resolve('valid');
          }
          else{
            reject('invalid');
          }
          })
          .catch(function(error) {
            console.log(error);
        });
      });
      promise.then(function(response) {
      if(response){
        //console.log(response);
        dispatch(changeLoc(curLoc));
        dispatch(changeLat(lat));
        dispatch(changeLng(lng));
        dispatch(changePage('distance'));
        const path = `/use`; 
        navigate(path);
      }
    }, function(error){
      simpleAlertHandler();
    } );
    }
  
    const getLocation = () => {
      setLoading(true);
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        setLoading(false);
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          setLoading(false);
          alert("Got location, press Start!");
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          document.getElementById('locIn').value = "Current Location";
        }, () => {
          alert('Unable to retrieve your location');
          setLoading(false);
        });
      }
    }
    
    const featPort = () =>{ 
      const path = `/use`; 
      dispatch(changePage("start"));
      navigate(path);
    }
    return(
        <div class="container-expand" id="about-bg" 
            style={{ backgroundImage: `url(./steakbg.jpg)` }}>
            <div class="container-fluid bg-white" id="content-hold">
            {/*
            <ul class="nav nav-tabs" id="myTab">
        <li>
            <p>&nbsp;</p>
            <h1>Click to get fate!</h1>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="home">
            <p>&nbsp;</p>
            <button type="button" class="btn btn-primary btn-lg" onClick={featPort}>Get Started</button>
            </div>
        </div>
    */}
    <LoadingOverlay class="loadingOverlay" spinner={<InfinitySpin color="#aa00ff"
    ariaLabel="three-dots-loading" />} styles={{
      overlay: base => ({
        ...base,
        background: "rgba(255, 255, 255, 0.9)"
      }),
      content: base => ({
        ...base,
        marginTop: props.marginTop
      })
    }} active={loading}>
    <div class="container-fluid col d-grid gap-3">
        <p>&nbsp;</p>
        <p class="h1">Where to start?</p>
        <div class="input-group mb-3">
        <input
        apiKey={process.env.REACT_APP_GMAPS_API_KEY}
        onPlaceSelected={(place) => {
            if(lat && lng){
                setLat(null);
                setLng(null);
              }
              setCurLoc(place.formatted_address);
        }}
        type="text"
        placeholder='Location: eg. Baltimore, 93117'
        id="locIn"
        onChange={(e) => {
          if(lat && lng){
            setLat(null);
            setLng(null);
          }
          setCurLoc(e.target.value);
        }}
        className="form-control"
        />
      <div class="input-group-append">
      <button id="locButton" className="btn btn-primary btn-lg btn-block" onClick={getLocation}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
      </button>
      </div>
      </div>
      <button className="btn btn-primary btn-lg btn-block" onClick={handleStart}>
          Start
      </button>
      <p>&nbsp;</p>
    </div>
    </LoadingOverlay>
    </div>
</div>
    )
}
export default FeatPortal