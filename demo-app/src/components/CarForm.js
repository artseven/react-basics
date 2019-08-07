import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const CarForm = memo(forwardRef(({ onSubmitCar, buttonText }, ref) => {

    console.log('rendering car form');
    //array destructuring syntax
    //unpacking values from arrays or properties from objects 
    //into distinct variables
    //actual state data  || function to update data and re-render
    const [ carForm, change, resetCarForm ] = useForm({
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
    });//initial state data

    // //using target variable on the event object
    // //to avoid referencing e.target
    // const change = ({ target }) => {
    //     setCarForm({
    //         //spread operator
    //         ...carForm,
    //         //looks into name on the input field
    //         //ternary operator to check field type
    //         //to make sure number field type returns number and not a string
    //         [ target.name ]: target.type === 'number' ? Number(target.value) : target.value,            
    //     })
    // }

    const submitCar  = () => {
        onSubmitCar({ ...carForm });
        //re-initializing the form
        resetCarForm();
    };



    return <form>
        <div>
            <label htmlFor="make-input">Make:</label>
            <input type="text" id="make-input" name="make" ref={ref}
            value={carForm.make} onChange={change}></input>
        </div>
        <div>
            <label htmlFor="model-input">Model:</label>
            <input type="text" id="model-input" name="model"
            value={carForm.model} onChange={change}></input>
        </div>
        <div>
            <label htmlFor="year-input">Year:</label>
            <input type="number" id="year-input" name="year"
            value={carForm.year} onChange={change}></input>
        </div>
        <div>
            <label htmlFor="color-input">Color:</label>
            <input type="text" id="color-input" name="color"
            value={carForm.color} onChange={change}></input>
        </div>
        <div>
            <label htmlFor="price-input">Price:</label>
            <input type="number" id="price-input" name="price"
            value={carForm.price} onChange={change}></input>
        </div>
        <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
}));

CarForm.defaultProps = {
    buttonText: 'Submit Car',
};

CarForm.propTypes = {
    buttonText: PropTypes.string,
    onSubmitCar: PropTypes.func.isRequired,
};
