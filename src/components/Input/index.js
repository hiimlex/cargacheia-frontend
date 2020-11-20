import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export default function Input (props) {
    return (
        <div className="input-container">
            <span className="input-label">{props.label}</span>
            <input className="input" placeholder={props.placeholder} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}