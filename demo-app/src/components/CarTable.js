import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType} from '../propTypes/cars';
import { ViewCarRow } from './ViewCarRow';

export const CarTable = ({ cars, onDeleteCar: deleteCar }) => {

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
            {cars.map(car => <ViewCarRow key={car.id} car={car} onDeleteCar={deleteCar} />)}
        </tbody>
    </table>;

};
//set default so cars.map doesn't fail when nothing is passed
CarTable.defaultProps = {
    cars: []
};

CarTable.propTypes = {
    cars: carsPropType,
    onDeleteCar: PropTypes.func.isRequired
}