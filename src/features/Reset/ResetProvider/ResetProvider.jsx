import React, { useContext } from 'react';
import ResetContext from 'contexts/ResetContext';
import ColorContext from 'contexts/ColorContext';
import SizeContext from 'contexts/SizeContext';

function ResetProvider(props) {
    const { colorPicker } = useContext(ColorContext);
    const { sizeChoose } = useContext(SizeContext);
    const reset = (value) => {
        colorPicker(value.color);
        sizeChoose(value.size);
    }

    return (
        <ResetContext.Provider value={{reset: reset}}>
            {props.children}
        </ResetContext.Provider>
    );
}

export default ResetProvider;