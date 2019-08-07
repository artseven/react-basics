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
        setEditCarId(-1);

    }

    const replaceCar = (car) => {
        const newCars = cars.concat();
        const carIndex = newCars.findIndex(c => c.id === car.id);
        newCars[carIndex] = car;
        setCars(newCars);
        setEditCarId(-1);
    };
    
    const cancelCar = () => {
        setEditCarId(-1);
    }

    const deleteCar = carId => {
        //produces new array that adds all the cars which id doesn't match
        setCars(cars.filter(car => car.id !== carId ));
        setEditCarId(-1);
    }

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars} editCarId = {editCarId}
         onEditCar={setEditCarId} onDeleteCar={deleteCar}
         onSaveCar={replaceCar} onCancelCar={cancelCar}/>
        <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>;
};