import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components/CarTool';



ReactDOM.render(
    //carList is argument, cars is parameter(props)
    <CarTool />,
    document.querySelector('#root')
)
