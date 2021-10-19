import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="mt-5 bg-primary">
            <Container>
                <Row>
                    <Col sm={5} md={5} className="border-end border-dark">
                        <div className="">
                            <h3>Address</h3>
                            <h4></h4>
                    </div>
                    </Col>
                    <Col sm={2} md={2}></Col>
                    <Col sm={5} md={5} className="border-start border-dark">
                        <div className="">
                            <h3>Contacts</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;