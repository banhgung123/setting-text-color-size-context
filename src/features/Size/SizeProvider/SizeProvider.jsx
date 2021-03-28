import React, { useState } from 'react';
import SizeContext from 'contexts/SizeContext';

function SizeProvider(props) {
    const [size, setSize] = useState(12);
    const sizeChoose = value => setSize(value);

    return (
        <SizeContext.Provider
            value={{ size: size, sizeChoose: sizeChoose }}
        >
            {props.children}
        </SizeContext.Provider>
    );
}

export default SizeProvider;