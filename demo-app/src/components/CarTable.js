import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType} from '../propTypes/cars';

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
            {cars.map(car => <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{car.price}</td>
                <td><button type="button" onClick={() => deleteCar(car.id)}>Delete</button></td>
            </tr>)}
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