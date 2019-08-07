import React, { Fragment } from 'react';

//custom components uppercase
//this way of exporting benefits for tree-shaking
export const HelloWorld = () => {
    // return React.createElement('h1', null, 'Hello World!');
    // in JSX
    //fragment is a wrapper that doesn't create html-element
    //can be written as <></>
    return <Fragment>
        <h1>Hello World!</h1>
        <span>Test</span>
    </Fragment>
};