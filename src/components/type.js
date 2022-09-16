import React from 'react'
import Select from 'react-select'

import { useSelector, useDispatch } from "react-redux";
import { changePage, changeCat } from "../actions";

import './type.css'

const Type = (props) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedOptionR, setSelectedOptionR] = React.useState(null);
  document.getElementById("about-bg").style.backgroundImage = `url(./breakfast.jpg)`;
  function handleBack() {
      dispatch(changePage("distance"));
  }

  function handleNext() {
      var sO = [];
      var sOR = [];
      if(selectedOption && selectedOptionR){
          for (let i = 0; i < selectedOption.selectedOptions.length; i++) {
              sO.push(selectedOption.selectedOptions[i].value);
          }
          for (let i = 0; i < selectedOptionR.selectedOptionsR.length; i++) {
              sOR.push(selectedOptionR.selectedOptionsR[i].value);
          }
          dispatch(changeCat(sO.concat(sOR)));
      }
      else if (selectedOption){
          for (let i = 0; i < selectedOption.selectedOptions.length; i++) {
              sO.push(selectedOption.selectedOptions[i].value);
          }
          dispatch(changeCat(sO));
      }
      else if (selectedOptionR){
          for (let i = 0; i < selectedOptionR.selectedOptionsR.length; i++) {
              sOR.push(selectedOptionR.selectedOptionsR[i].value);
          }
          dispatch(changeCat(sOR));
      }
      else{
          dispatch(changeCat([]));
      }
      
      dispatch(changePage("price"));
  }

  const optionsCuisine = [{ value: 'american', label: 'American' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'vietnamese', label: 'Vietnamese'},
  { value: 'vegetarian', label: 'Vegetarian' }];

  const optionsType = [
  { value: 'restaurants', label: 'Restaurant' },
  { value: 'breakfast_brunch', label: 'Breakfast' },
  //{ value: 'bakeries', label: 'Bakery' },
  { value: 'bars', label: 'Bar' },
  { value: 'hotdogs', label: 'Fast Food' },
  //{ value: 'bubletea', label: 'Bubble Tea' },
  { value: 'coffee', label: 'Coffee' }
  //{ value: 'cafes', label: 'Cafe' },
  //{ value: 'diner', label: 'Diner' },
  //{ value: 'dessert', label: 'Dessert' },
  //{ value: 'foodtrucks', label: 'Food Truck' },
];
  
  function handleChange (selectedOptions)  {
      setSelectedOption({ selectedOptions });
  }

  function handleChangeR (selectedOptionsR)  {
      setSelectedOptionR({ selectedOptionsR });
  }

  return (
    <div class="container-fluid col d-grid gap-3">
      <p>&nbsp;</p>
        <h1>What kind of cuisine(s) are you feeling?</h1>
        <p class="lead">(Leave empty if no preference)</p>
        <Select
          isMulti
          defaultValue={selectedOption}
          onChange={handleChange}
          closeMenuOnSelect={false}
          name="colors"
          options={optionsCuisine}
          className="type-select"
          classNamePrefix="select"
        />
        <h1>What kind of place(s)?</h1>
        <p class="lead">(Leave empty if no preference)</p>
        <Select
          isMulti
          defaultValue={selectedOptionR}
          onChange={handleChangeR}
          closeMenuOnSelect={false}
          name="colors"
          options={optionsType}
          className="type-select"
          classNamePrefix="select"
        />
        <p>&nbsp;</p>
        <div class="btn-toolbar justify-content-between">
        <button id="backButton" class="btn btn-primary align-self-start" onClick={handleBack}>Back</button>
        <button id="nextButton" class="btn btn-primary align-self-end" onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Type
