import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Card, CardBody, CardHeader } from 'reactstrap';
import ColorContext from 'contexts/ColorContext';
import classnames from 'classnames';

Color.propTypes = {
    
};

function Color(props) {
    const {color, colorPicker, number} = useContext(ColorContext);

    return (
        <>
            <Card outline color="info">
                    <CardHeader className="card-header-color">Color Picker: <span style={{color: `${color}`}}>{color}</span></CardHeader>
                <CardBody>
                    <div className="card-color-list">
                        <div
                            className={classnames('card-color-item')} onClick={() => colorPicker('red')}
                        ></div>
                        <div
                            className={classnames('card-color-item')} onClick={() => colorPicker('green')}
                        ></div>
                        <div
                            className={classnames('card-color-item')} onClick={() => colorPicker('blue')}
                        ></div>
                        <div
                            className={classnames('card-color-item')} onClick={() => colorPicker('gray')}
                        ></div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default Color;