import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Feat from './Feat';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/reducer';
import { BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import "./0AFF3567B090FD04433E7D47CA0F90F3.txt"

const store = createStore(appReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
  <Router basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route exact path="/" element={<App />} /> 
          <Route
            path="/error"
            element={ <ErrorPage /> }
          />
          <Route
            path="/redirect"
            element={ <Navigate to="/error" /> }
          />
          <Route
            path="/feat"
            element={ <Feat /> }
          />
          <Route
            path="/.well-known/pki-validation/"
            element="0AFF3567B090FD04433E7D47CA0F90F3.txt"
          />
      </Routes>
  </Router>
  </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
