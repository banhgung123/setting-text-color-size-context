import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ResetContext from 'contexts/ResetContext';
import './style.scss';

Reset.propTypes = {
    
};

function Reset(props) {
    const {reset} = useContext(ResetContext);
    
    return (
        <div className="reset">
            <Button color="primary" onClick={() => reset({color: 'red', size: 12})}>Reset</Button>
        </div>
    );
}

export default Reset;