import React from "react"; //import 'React' default export, and { Component } non-default export from react
// App.css was a hangover from the create-react-app, it's not really needed for this basic example
import Button from "@material-ui/core/Button";
import App from "./App";
import Type from "./Type";

import { useSelector, useDispatch } from "react-redux";
import { changePage, changeDist } from "./actions";

function Distance() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  //const [curDistance, changeDist] = React.useState(null);

  function handleBack() {
    dispatch(changePage("start"));
  }

  function handleDist(newDist) {
    dispatch(changeDist(newDist));
    dispatch(changePage("type"));
  }

  if (page === "distance") {
    return (
      <div>
        <h2>How far are you willing to travel?</h2>
        <ul>
          <li>
            <Button onClick={() => handleDist(8047)}>5 miles</Button>
          </li>
          <li>
            <Button onClick={() => handleDist(16093)}>10 miles</Button>
          </li>
          <li>
            <Button onClick={() => handleDist(24140)}>15 miles</Button>
          </li>
          <li>
            <Button onClick={() => handleDist(40000)}>25 miles</Button>
          </li>
        </ul>
        <Button onClick={handleBack}>Back</Button>
      </div>
    );
  } else if (page === "start") {
    return (
      <div>
        <App />
      </div>
    );
  } else if (page === "type") {
    return (
      <div>
        <Type />
      </div>
    );
  }
}
export default Distance;
