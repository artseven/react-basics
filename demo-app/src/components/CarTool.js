import React, { useState } from 'react';
//props destructured to use just cars variable
export const CarTool = ({ cars: initialCars }) => {
    //array destructuring syntax
    //unpacking values from arrays or properties from objects 
    //into distinct variables
    //actual state data  || function to update data and re-render
    const [ carForm, setCarForm ] = useState({
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
    });//initial state data
    //creating shallow copy of the array
    const [ cars, setCars ] = useState(initialCars.concat())
    //using target variable on the event object
    //to avoid referencing e.target
    const change = ({ target }) => {
        setCarForm({
            //spread operator
            ...carForm,
            //looks into name on the input field
            //ternary operator to check field type
            //to make sure number field type returns number and not a string
            [ target.name ]: target.type === 'number' ? Number(target.value) : target.value,            
        })
    }

    const addCar = () => {
        
        setCars(cars.concat({
            ...carForm,
            //creating unique id that will use highest number id + 1
            id: Math.max(...cars.map(c => c.id)) + 1
        }));

        //re-initializing the form
        setCarForm({
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0
        });
    }

    console.log(carForm);

    return <>
        <header>
            <h1>CarTool</h1>
        </header>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.color}</td>
                    <td>{car.price}</td>
                </tr>)}
            </tbody>
        </table>
        <form>
            <div>
                <label htmlFor="make-input">Make:</label>
                <input type="text" id="make-input" name="make"
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
            <button type="button" onClick={addCar}>Add Car</button>
        </form>
    </>;
};