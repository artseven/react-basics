import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType} from '../propTypes/cars';

import { EditCarRow } from './EditCarRow';
import { ViewCarRow } from './ViewCarRow';


export const CarTable = ({ 
    cars, editCarId,
    onEditCar: editCar,
    onDeleteCar: deleteCar,
    onSaveCar: saveCar,
    onCancelCar: cancelCar,
}) => {

    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th><label htmlFor="edit-make-input"></label>Make</th>
                <th><label htmlFor="edit-model-input"></label>Model</th>
                <th><label htmlFor="edit-year-input"></label>Year</th>
                <th><label htmlFor="edit-color-input"></label>Color</th>
                <th><label htmlFor="edit-price-input"></label>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cars.length === 0 && <tr>
                <td colSpan="6">There are no cars.</td>
            </tr>}
            {cars.map(car => car.id === editCarId 
                ? <EditCarRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
                : <ViewCarRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
        </tbody>
    </table>;

};
//set default so cars.map doesn't fail when nothing is passed
CarTable.defaultProps = {
    cars: [],
    editCarId: -1,
};

CarTable.propTypes = {
    cars: carsPropType,
    editCarId: PropTypes.number,

    onDeleteCar: PropTypes.func.isRequired,
    onEditCar: PropTypes.func.isRequired,
    onSaveCar: PropTypes.func.isRequired
}