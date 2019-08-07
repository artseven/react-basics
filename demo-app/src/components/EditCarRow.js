import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { carPropType } from '../propTypes/cars';

export class EditCarRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props.car
        };

        this.defaultInputRef = createRef();

        this.change = this.change.bind(this);
        this.saveCar = this.saveCar.bind(this);

        console.dir(this);
    }

    componentDidMount() {
        if (this.defaultInputRef.current) {
            this.defaultInputRef.current.focus();
        }
    }

    change({ target }) {
        this.setState({
            //looks into name on the input field
            //ternary operator to check field type
            //to make sure number field type returns number and not a string
            [ target.name ]: target.type === 'number' ? Number(target.value) : target.value,            
        });
    };

    
    saveCar() {
        this.props.onSaveCar({
            ...this.state,
            id: this.props.car.id,
        });
    }

    render() {
        return <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" id="edit-make-input" name="make" value={this.state.make} onChange={this.change} ref={this.defaultInputRef}/></td>
        <td><input type="text" id="edit-model-input" name="model" value={this.state.model} onChange={this.change} /></td>
        <td><input type="number" id="edit-year-input" name="year" value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" id="edit-color-input" name="color" value={this.state.color} onChange={this.change} /></td>
        <td><input type="number" id="edit-price-input" name="price" value={this.state.price} onChange={this.change} /></td>
        <td>
            <button type="button" onClick={this.props.onSaveCar}>Save</button>
            <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
        </td>
    </tr>;

    }
}

EditCarRow.propTypes = {
    car: carPropType.isRequired,
    onSaveCar: PropTypes.func.isRequired,
    onCancelCar: PropTypes.func.isRequired
}
