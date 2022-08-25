import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './style.css'
import Results from './views/results'
import Home from './views/home'
import Landing from './views/landing'
import Error from './views/error'

import appReducer from './reducers/reducer';

const store = createStore(appReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL + "/"}>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/use" element={<Home />} />
            <Route exact path="/results" element={<Results />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
