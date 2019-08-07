import React from 'react';
import PropTypes from 'prop-types';

import { carPropType } from '../propTypes/cars';

export const EditCarRow = ({
    car,
    saveCar,
    onCancelCar: cancelCar
}) => {

    const saveCar = () => {
        //onSaveCar
    }
    return  <tr >
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td>
            <button type="button" onClick={() => saveCar(car.id)}>Save</button>
            <button type="button" onClick={() => cancelCar(car.id)}>Cancel</button>
        </td>
    </tr>;
};

EditCarRow.propTypes = {
    car: carPropType.isRequired,
    onSaveCar: PropTypes.func.isRequired,
    onCancelCar: PropTypes.func.isRequired
}
