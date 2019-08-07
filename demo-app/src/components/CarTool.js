import React, { useState, useCallback } from 'react';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

//props destructured to use just cars variable
export const CarTool = ({ cars: initialCars }) => {

    //creating shallow copy of the array
    const [ cars, setCars ] = useState(initialCars.concat())
    const [ editCarId, setEditCarId ] = useState(-1);

    const defaultInputRef = useDefaultInputFocus();

    const init = useCallback(() => {
        setEditCarId(-1);
        if (defaultInputRef.current) {
            defaultInputRef.current.focus();
        }
    }, [ defaultInputRef ]);

    const addCar = useCallback((car) => {
        
        setCars(cars.concat({
            ...car,
            //creating unique id that will use highest number id + 1
            id: Math.max(...cars.map(c => c.id)) + 1
        }));
        init();

    }, [ cars, init ]);

    const replaceCar = useCallback((car) => {
        const newCars = cars.concat();
        const carIndex = newCars.findIndex(c => c.id === car.id);
        newCars[carIndex] = car;
        setCars(newCars);
        init();
    }, [ cars, init]);
    
    const cancelCar = useCallback(() => {
        init();
    }, [init]);

    const deleteCar = useCallback(carId => {
        //produces new array that adds all the cars which id doesn't match
        setCars(cars.filter(car => car.id !== carId ));
        init();
    }, [ cars, init ]);

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars} editCarId = {editCarId}
         onEditCar={setEditCarId} onDeleteCar={deleteCar}
         onSaveCar={replaceCar} onCancelCar={cancelCar}/>
        <CarForm buttonText="Add Car" onSubmitCar={addCar}
         ref={defaultInputRef} />
    </>;
};