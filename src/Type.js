import React from 'react'; //import 'React' default export, and { Component } non-default export from react
// App.css was a hangover from the create-react-app, it's not really needed for this basic example
import axios from "axios";
import Button from "@material-ui/core/Button";
import App from "./App";
import Distance from "./Distance";
import Price from "./Price";
import Select from 'react-select'

import { useSelector, useDispatch } from "react-redux";
import { changePage, changeCat } from "./actions";

function Type(){
    
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page);
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
    { value: 'bubletea', label: 'Bubble Tea' },
    { value: 'coffee', label: 'Coffee' },
    { value: 'diner', label: 'Diner' },
    { value: 'dessert', label: 'Dessert' },
    { value: 'foodtrucks', label: 'Food Truck' }];
    
    function handleChange (selectedOptions)  {
        setSelectedOption({ selectedOptions });
    }

    function handleChangeR (selectedOptionsR)  {
        setSelectedOptionR({ selectedOptionsR });
    }

    if(page === 'type'){
        return(<div>
            <div>
                <h3>What kind of cuisine(s) are you feeling?</h3>
                <p>(Leave empty if no preference)</p>
                <Select
                    isMulti
                    defaultValue={selectedOption}
                    onChange={handleChange}
                    closeMenuOnSelect={false}
                    name="colors"
                    options={optionsCuisine}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div>
            <h3>What kind of restaurant?</h3>
            <p>(Leave empty if no preference)</p>
            <Select
                isMulti
                defaultValue={selectedOptionR}
                onChange={handleChangeR}
                closeMenuOnSelect={false}
                name="colors"
                options={optionsType}
                className="basic-multi-select"
                classNamePrefix="select"
            />
            </div>
            {/*selectedOption ? <div>{selectedOption.selectedOptions.map((user) => (
        <div className="user">{user.value}</div>
            ))}</div> : <h1>h1</h1>*/}
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
        </div>)
    }
    else if(page === 'distance'){
        return(<div>
            <Distance />
        </div>)
    }
    else if(page === 'price'){
        return(<div>
            <Price />
        </div>)
    }
}

export default Type;