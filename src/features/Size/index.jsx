import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import SizeContext from 'contexts/SizeContext';

Size.propTypes = {
    
};

function Size(props) {
    const {size, sizeChoose} = useContext(SizeContext);
    return (
        <>
            <Card outline color="warning">
                <CardHeader className="card-header-size">Size: { size } px</CardHeader>
                <CardBody>
                    <Button color="success" onClick={() => sizeChoose(size <= 8 ? 8 : size - 2)}>Giảm</Button>
                    <Button color="success" onClick={() => sizeChoose(size >= 32 ? 32 : size + 2)}>Tăng</Button>
                </CardBody>
            </Card>
        </>
    );
}

export default Size;