import React from 'react'; //import 'React' default export, and { Component } non-default export from react
// App.css was a hangover from the create-react-app, it's not really needed for this basic example
import axios from "axios";
import Button from "@material-ui/core/Button";
import App from "./App";
import Type from "./Type";
import './App.css';
import { Alert, View, SafeAreaView, StyleSheet } from 'react-native';

import { BrowserRouter as Router, Route, useNavigate, Routes} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changePage, changePrice, getRandomInt, changeResult} from "./actions";

function Price(){
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page);
        const location = useSelector((state) => state.location);
        const distance = useSelector((state) => state.distance);
        const categories = useSelector((state) => state.categories);
        const price = useSelector((state) => state.price);
        const result = useSelector((state) => state.result);
    
    const [checked, setChecked] = React.useState([]);

    let navigate = useNavigate(); 
    const goFEAT = (res) =>{ 
        let path = `/FEAT`; 
        navigate(path,{state:res});
  }

    function handleBack() {
        dispatch(changePage("type"));
    }

    function addStr(str1, str2){
        return str1+str2;
    }

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
      const result = businesses[getRandomInt(businesses.length)];
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

    function handleSubmit() {
        //console.log(checked);
        if (checked.length) {
            dispatch(changePrice(checked));
        }
        else{
            dispatch(changePrice([]));
        }
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
        console.log(search);
        //makeCall(search);
        let promise = new Promise(function(resolve, reject) {
            axios.get(`https://featserv-env.eba-ifrc9mun.us-west-1.elasticbeanstalk.com/results/`, { params: search})
    .then(res => {
    //console.log(res.data.total);
        if(!res.data.businesses.length){
            alert("There weren't any results that matched your search. It just wasn't meant to be! Change search and try again. ");
            reject('No results');
            return;
      }
      var businesses = [];
      //console.log(res.data);
      for (const business of res.data.businesses) { 
        //console.log(business.name); 
        businesses.push(business);
      }
      const result = businesses[getRandomInt(businesses.length)];
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
            goFEAT(response);
          }
        }, function(error){
            alert('try again');
        } );
        //console.log(result);
        
    }

    // Add/Remove checked item from list
    const handleCheck = (event) => {
    var updatedList = [...checked];
        if (event.target.checked) {
        updatedList = [...checked, event.target.value];
        } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        dispatch(changePrice(checked));
    };

    // Return classes based on whether item is checked
    const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    
    if(page === 'price'){
        return(
        <div>
            <h3>How much are you willing to spend?</h3>
            <p>(Select one or more options, leave empty if no preference)</p>
            <div>
            {[{show:'Low($)',value: '1'},{show:'Mid($$)',value:'2'}, {show:'High($$$)',value:'3'}, {show:'Highest($$$$)', value:'4'}].map((item, index) => (
                <div key={index}>
                    <input value={item.value} type="checkbox" onChange={handleCheck} />
                    <span className={isChecked(item.value)}>{item.show}</span>
                </div>
                ))}
            </div>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>)
    }
    else if(page === 'type'){
        return(<div>
            <Type />
        </div>)
    }
}

export default Price;