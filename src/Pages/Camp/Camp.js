import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Camp = ({ campaign }) => {
    const { name, description, img, dentist, position, degree } = campaign;
    return (
        <div>
            <Col className="text-light bg-dark m-3">
                <Container>
                    <Row>
                        <Col sm={5} className="py-3">
                            <img src={img} alt="" />
                        </Col>
                        <Col className="text-start pt-5" sm={7}>
                            <h3 className="py-2"><u>Topic:</u> { name}</h3>
                            <h4><u>Host:</u> {dentist}, ({degree}), {position}</h4>
                            <p className="py-2"><u>About:</u> {description}</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="text-danger">Comming Soon......</p>
                            
                        </Col>
                    </Row>
                </Container>
                
            </Col>
        </div>
    );
};

export default Camp;