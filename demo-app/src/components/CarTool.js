import React, { useState } from 'react';

export const CarTool = (props) => {
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
                {props.cars.map(car => <tr key={car.id}>
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
                <input type="text" id="make-input"></input>
            </div>
            <div>
                <label htmlFor="model-input">Model:</label>
                <input type="text" id="model-input"></input>
            </div>
            <div>
                <label htmlFor="year-input">Year:</label>
                <input type="text" id="year-input"></input>
            </div>
            <div>
                <label htmlFor="color-input">Color:</label>
                <input type="text" id="color-input"></input>
            </div>
            <div>
                <label htmlFor="price-input">Price:</label>
                <input type="text" id="price-input"></input>
            </div>
        </form>
    </>;
};