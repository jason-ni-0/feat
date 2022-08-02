import React from 'react'
import axios from "axios";

import { BrowserRouter as Router, Route, useNavigate, Routes} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePage, changePrice, getRandomInt, changeResult} from "../actions";

import PropTypes from 'prop-types'

import './price.css'

const Price = (props) => {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.location);
  const distance = useSelector((state) => state.distance);
  const categories = useSelector((state) => state.categories);
  const price = useSelector((state) => state.price);
  //console.log(price);

  const [checked, setChecked] = React.useState([]);

  const navigate = useNavigate(); 
  const goResults = (res) =>{ 
    const path = `/results`; 
    navigate(path,{state:res});
  }
  function handleBack() {
    dispatch(changePage("type"));
  }

  function addStr(str1, str2){
    return str1+str2;
  }
  /*
  function makeCall(quer){
    //console.log(quer);
        axios.get(`https://featserv-env.eba-ifrc9mun.us-west-1.elasticbeanstalk.com/results/`, { params: quer})
    .then(res => {
    //console.log(res.data.total);
      if(res.data === 'LOCATION_NOT_FOUND'){
        return null;
      }
      var businesses = [];
      if(!res.data.businesses.length){
        alert("There weren't any results that matched your search. It just wasn't meant to be! Change search and try again. ");
        return;
      }
      //console.log(res.data);
      for (const business of res.data.businesses) { 
        //console.log(business.name); 
        businesses.push(business);
      }
      const result = [];
      if(businesses.length <= 3){
        result = businesses;
      }
      else{
        while(result.length != 3){
          var randInt = getRandomInt(businesses.length);
          result.push(businesses[randInt]);
          businesses.splice(randInt, 1);
        }
      }
      //console.log(result);
      dispatch(changeResult(result));
      return result;
      //setRest(result);
      })
      .catch(function(error) {
        console.log(error);
    });

    return () => {
      console.log('Will unmount');
    };
  } // Empty array means to only run once on mount.
  */

    function handleSubmit() {
        //console.log(checked);
        /*
        if (checked.length) {
            dispatch(changePrice(checked));
        }
        else{
            dispatch(changePrice([]));
        }
        */
        dispatch(changePage('loading'));
       //console.log(location, distance, price, categories[0].value);
        const search = {
            location: location,
            distance: distance
        };
        if (categories.length){
            var cat = "";
            for (let i = 0; i < categories.length; i++) {
                if(i !== 0){
                    cat+=",";
                }
                cat+=categories[i];
            }
            //cat+=',restaurants';
            var finCategories = {categories: cat}; 
            Object.assign(search, search, finCategories);
            //console.log(search);
        }
        if (price.length){
            var pr = "";
            for (let i = 0; i < price.length; i++) {
                if(i !== 0){
                    pr+=",";
                }
                pr+=price[i];
            }
            var finPr = {price: pr}; 
            Object.assign(search, search, finPr);
        }
        //console.log(search);
        //makeCall(search);
        let promise = new Promise(function(resolve, reject) {
            axios.get(`https://featserv-env.eba-ifrc9mun.us-west-1.elasticbeanstalk.com/results/`, { params: search})
    .then(res => {
    //console.log(res.data.total);
        if(!res.data.businesses.length){
            alert("There weren't any results that matched your search. It just wasn't meant to be! Change search and try again. ");
            dispatch(changePage("price"));
            reject('No results');
            return;
      }
      var businesses = [];
      //console.log(res.data);
      for (const business of res.data.businesses) { 
        //console.log(business.name); 
        businesses.push(business);
      }
      var result = [];
      if(businesses.length <= 3){
        result = businesses;
      }
      else{
        while(result.length != 3){
          var randInt = getRandomInt(businesses.length);
          result.push(businesses[randInt]);
          businesses.splice(randInt, 1);
        }
      }
      //console.log(result);
      dispatch(changeResult(result));
      resolve(result);
      //setRest(result);
      })
      .catch(function(error) {
        console.log(error);
    });
    });
          promise.then(function(response) {
          if(response){
            //console.log(response);
            goResults(response);
          }
        }, function(error){
            //alert('try again');
        } );
        //console.log(result);
        
    }

    // Add/Remove checked item from list
    const handleCheck = (event) => {
    //setChecked([...checked, event.target.value]);
    let promise = new Promise(function(resolve, reject) {
    var updatedList = [...checked];
        if (event.target.checked) {
        updatedList = [...checked, event.target.value];
        } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        resolve(updatedList);
        });
        promise.then(function(response) {
          if(response){
            //console.log(response);
            dispatch(changePrice(response));
          }
        }, function(error){
            //alert('try again');
        } );
    };

    // Return classes based on whether item is checked
    const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div className="price-container">
      <div className="price-container1">
        <h1 className="price-text">{props.heading}</h1>
        <span className="price-text1">{props.text}</span>
        <div className="price-container2">
          <input type="checkbox" className="price-checkbox" onChange={handleCheck} value='1' />
          <label className="price-text2">{props.text1}</label>
        </div>
        <div className="price-container3">
          <input type="checkbox" className="price-checkbox1" onChange={handleCheck} value='2'/>
          <label className="price-text3">{props.text11}</label>
        </div>
        <div className="price-container4">
          <input type="checkbox" className="price-checkbox2" onChange={handleCheck} value='3'/>
          <label className="price-text4">{props.text111}</label>
        </div>
        <div className="price-container5">
          <input type="checkbox" className="price-checkbox3" onChange={handleCheck} value='4'/>
          <label className="price-text5">{props.text1111}</label>
        </div>
      </div>
      <div className="price-container6">
        <button className="price-button button" onClick={handleBack}>{props.button2}</button>
        <button className="price-button1 button" onClick={handleSubmit}>{props.button21}</button>
      </div>
    </div>
  )
}

Price.defaultProps = {
  text1111: 'Highest($$$$)',
  text: '(Select one or more options, leave empty if no preference)',
  heading: 'How much are you willing to spend?',
  text11: 'Mid($$)',
  button2: 'Back',
  button21: 'Submit',
  text111: 'High($$$)',
  text1: 'Low($)',
}

Price.propTypes = {
  text1111: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  text11: PropTypes.string,
  button2: PropTypes.string,
  button21: PropTypes.string,
  text111: PropTypes.string,
  text1: PropTypes.string,
}

export default Price
