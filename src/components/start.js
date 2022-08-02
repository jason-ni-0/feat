import React from 'react'
import axios from "axios";

import { useSelector,useDispatch } from 'react-redux';
import { changeLoc, changePage } from '../actions';

import PropTypes from 'prop-types'

import './start.css'

const Start = (props) => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location);
  const [curLoc, setCurLoc] = React.useState("");

  const simpleAlertHandler = () => {
    alert(`Enter a valid location`);
  };

  function handleStart(){
    let promise = new Promise(function(resolve, reject) {
      axios.get(`https://featserv-env.eba-ifrc9mun.us-west-1.elasticbeanstalk.com/results/`, { params: {location:curLoc}})
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
      console.log(response);
      dispatch(changeLoc(curLoc));
      dispatch(changePage('distance'));
    }
  }, function(error){
    simpleAlertHandler();
  } );
  }

  return (
    <div className={`start-container ${props.rootClassName} `}>
      <div className="start-container1">
        <h1 className="start-f-e-a-t">
          <span className="">FEAT</span>
        </h1>
      </div>
      <span className="start-text1">{props.text}</span>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        onChange={(e) => {
          setCurLoc(e.target.value);
        }}
        className="start-textinput input"
      />
      <button className="start-button button" onClick={handleStart}>{props.button}</button>
    </div>
  )
}

Start.defaultProps = {
  button: 'Start',
  rootClassName: '',
  text: 'Start by entering location:',
  textinput_placeholder: 'eg. Baltimore, 93117',
}

Start.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Start
