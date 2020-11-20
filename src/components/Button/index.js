import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Button (props) {
    return (
        <button className="button">
            {props.label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string
}