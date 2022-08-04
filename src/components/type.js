import React from 'react'
import Select from 'react-select'

import PropTypes from 'prop-types'

import { useSelector, useDispatch } from "react-redux";
import { changePage, changeCat } from "../actions";

import './type.css'

const Type = (props) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedOptionR, setSelectedOptionR] = React.useState(null);

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

  const optionsType = [{ value: 'breakfast_brunch', label: 'Breakfast' },
  { value: 'bakeries', label: 'Bakery' },
  { value: 'bars', label: 'Bar' },
  //{ value: 'bubletea', label: 'Bubble Tea' },
  { value: 'coffee', label: 'Coffee' },
  //{ value: 'cafes', label: 'Cafe' },
  //{ value: 'diner', label: 'Diner' },
  //{ value: 'dessert', label: 'Dessert' },
  //{ value: 'foodtrucks', label: 'Food Truck' },
  { value: 'restaurants', label: 'Restaurant' }];
  
  function handleChange (selectedOptions)  {
      setSelectedOption({ selectedOptions });
  }

  function handleChangeR (selectedOptionsR)  {
      setSelectedOptionR({ selectedOptionsR });
  }

  return (
    <div className="type-container">
      <div className="type-container1">
        <h1 className="type-text">{props.heading2}</h1>
        <span className="type-text1">{props.text2}</span>
        {/*<select className="type-select">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>*/ }
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
        <h1 className="type-text2">{props.heading1}</h1>
        <span className="type-text3">{props.text1}</span>
        {/*<select className="type-select1">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>*/}
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
      </div>
      <div className="type-container2">
        <button className="type-button button" onClick={handleBack}>{props.button2}</button>
        <button className="type-button1 button" onClick={handleNext}>{props.button21}</button>
      </div>
    </div>
  )
}

Type.defaultProps = {
  text1: '(Leave empty if no preference)',
  button21: 'Next',
  heading2: 'What kind of cuisine(s) are you feeling?',
  heading1: 'What kind of restaurant(s)?',
  button2: 'Back',
  text2: '(Leave empty if no preference)',
}

Type.propTypes = {
  text1: PropTypes.string,
  button21: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  button2: PropTypes.string,
  text2: PropTypes.string,
}

export default Type
