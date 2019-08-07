import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

//props destructured to use just cars variable
export const CarTool = ({ cars: initialCars }) => {

    //creating shallow copy of the array
    const [ cars, setCars ] = useState(initialCars.concat())


    const addCar = (car) => {
        
        setCars(cars.concat({
            ...car,
            //creating unique id that will use highest number id + 1
            id: Math.max(...cars.map(c => c.id)) + 1
        }));

    }

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars}/>
        <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>;
};