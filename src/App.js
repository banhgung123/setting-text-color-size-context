import ColorProvider from 'features/Color/ColorProvider/ColorProvider';
import Reset from 'features/Reset';
import ResetProvider from 'features/Reset/ResetProvider/ResetProvider';
import Result from 'features/Result';
import Size from 'features/Size';
import SizeProvider from 'features/Size/SizeProvider/SizeProvider';
import { Col, Container, Row } from 'reactstrap';
import Color from './features/Color';

function App() {
    return (
        <ColorProvider>
            <SizeProvider>
                <ResetProvider>
                    <Container style={{ padding: '3rem' }}>
                        <Row>
                            <Col>
                                <Color />
                            </Col>
                            <Col>
                                <Size />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Reset />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Result />
                            </Col>
                        </Row>
                    </Container>
                </ResetProvider>
            </SizeProvider>
        </ColorProvider>
    );
}

export default App;
