import React, { useState } from 'react';
import ColorContext from 'contexts/ColorContext';

function ColorProvider(props) {
    const [color, setColor] = useState('red');
    const colorPicker = value => setColor(value);

    return (
        <ColorContext.Provider
            value={{ color: color, colorPicker: colorPicker }}
        >
            {props.children}
        </ColorContext.Provider>
    );
}

export default ColorProvider;