import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

//props destructured to use just cars variable
export const CarTool = ({ cars: initialCars }) => {

    //creating shallow copy of the array
    const [ cars, setCars ] = useState(initialCars.concat())
    const [ editCarId, setEditCarId ] = useState(-1);


    const addCar = (car) => {
        
        setCars(cars.concat({
            ...car,
            //creating unique id that will use highest number id + 1
            id: Math.max(...cars.map(c => c.id)) + 1
        }));

    }

    const replaceCar = (car) => {
        const newCars = cars.concat();
        const carIndex = newCars.findIndex(c => c.i === car.id);
        newCars[carIndex] = car;
        setCars(newCars);
    };
    
    const cancelCar = () => {
        setEditCarId(-1);
    }

    const deleteCar = carId => {
        //produces new array that adds all the cars which id doesn't match
        setCars(cars.filter(car => car.id !== carId ));
    }

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars} editCarId = {editCarId}
         onDeleteCar={deleteCar}/>
        <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>;
};