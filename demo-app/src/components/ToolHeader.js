import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = memo(({ headerText }) => {

    console.log('rendering tool header');

    return <header>
        <h1>{headerText}</h1>
    </header>
});
//default one if we don't pass props
ToolHeader.defaultProps = {
    headerText: 'The Tool',
};
ToolHeader.propTypes = {
    headerText: PropTypes.string,
};