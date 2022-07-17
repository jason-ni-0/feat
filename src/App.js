import React from 'react'; //import 'React' default export, and { Component } non-default export from react
// App.css was a hangover from the create-react-app, it's not really needed for this basic example
import axios from "axios";
import Button from "@material-ui/core/Button";
import Distance from './Distance'
import { Alert, View, SafeAreaView, StyleSheet } from 'react-native';
import { connect, useStore } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import { changeLoc, changePage, getRandomInt, makeCall } from './actions';
import Type from './Type';
import Price from './Price';
import Loading from './Loading';

function App() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const location = useSelector(state => state.location);
  const [curLoc, setCurLoc] = React.useState("");

  const simpleAlertHandler = () => {
    alert(`Enter a valid location`);
  };

  function handleStart(){
    let promise = new Promise(function(resolve, reject) {
      axios.get(`http://localhost:8000/results`, { params: {location:curLoc}})
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

  if(page === 'start'){
  return (
    <div>
      <div>
        <h1>FEAT</h1>
        <input 
          type="text"
          placeholder={"eg. Baltimore, 93117"}
          onChange={(e) => {
            setCurLoc(e.target.value);
          }}>
          </input>
      </div>
      <div>
        <Button onClick={handleStart}>
          Start
        </Button>
      </div>
    </div>
  )
}

else if (page === 'distance'){
  return(<div><Distance /></div>);
}

else if(page === 'type'){
  return(<div><Type /></div>)
}

else if(page === 'price'){
  return(<div><Price /></div>)
}

else if(page === 'loading'){
  return(<div><Loading /></div>)
}

}

/*
const mapStateToProps = (state) => {
  return {
      appState: state
  }
};

export default connect(mapStateToProps)(App);
*/
export default App;