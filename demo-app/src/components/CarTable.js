import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType} from '../propTypes/cars';
import { ViewCarRow } from './ViewCarRow';

export const CarTable = ({ cars, onDeleteCar: deleteCar }) => {

    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
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