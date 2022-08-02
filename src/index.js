import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './style.css'
import Results from './views/results'
import Home from './views/home'
import Error from './views/error'

import appReducer from './reducers/reducer';

const store = createStore(appReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route exact path="/results" element={<Results />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </div>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
