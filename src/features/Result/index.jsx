import React, { useContext } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import ColorContext from 'contexts/ColorContext';
import SizeContext from 'contexts/SizeContext';

Result.propTypes = {
    
};

function Result(props) {
    const {color} = useContext(ColorContext);
    const { size } = useContext(SizeContext);
    
    return (
        <>
            <p>Color: <span style={{color: `${color}`}}>{color}</span>, Font Size: {size} px</p>
            <div
                className="result"
                style={{
                    color: color,
                    fontSize: `${size}px`,
                    border: `5px solid ${color}`,
                    padding: `${size}px 0`
                }}
            >
                setting context
            </div>
        </>
    );
}

export default Result;