import React, { useState, useCallback, useEffect } from 'react';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';
import { 
    getAllCars as dbGetAllCars, 
    createCar as dbCreateCar, 
    replaceCar as dbReplaceCar, 
    deleteCar as dbDeleteCar 
} from '../services/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

//props destructured to use just cars variable
export const CarTool = () => {

    //creating shallow copy of the array
    const [ cars, setCars ] = useState([]);
    const [ editCarId, setEditCarId ] = useState(-1);

    const defaultInputRef = useDefaultInputFocus();

    const refreshCars = useCallback(() => {
        dbGetAllCars().then(cars => setCars(cars));
    }, []);

    useEffect(() => {
        refreshCars();
    }, [ refreshCars ]);

    const init = useCallback(() => {
        setEditCarId(-1);
        if (defaultInputRef.current) {
            defaultInputRef.current.focus();
        }
    }, [ defaultInputRef ]);

    const addCar = useCallback((car) => {

        dbCreateCar(car)
            .then(refreshCars);
        init();

    }, [ refreshCars, init ]);

    const replaceCar = useCallback((car) => {
        dbReplaceCar(car)
            .then(refreshCars);
        init();

    }, [ refreshCars, init]);
    
    const cancelCar = useCallback(() => {
        init();
    }, [init]);

    const deleteCar = useCallback(carId => {
        dbDeleteCar(carId)
            .then(refreshCars);
        init();
    }, [ refreshCars, init ]);

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars} editCarId = {editCarId}
         onEditCar={setEditCarId} onDeleteCar={deleteCar}
         onSaveCar={replaceCar} onCancelCar={cancelCar}/>
        <CarForm buttonText="Add Car" onSubmitCar={addCar}
         ref={defaultInputRef} />
    </>;
};