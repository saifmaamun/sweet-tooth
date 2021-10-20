import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="mt-5 pt-3 bg-primary">
            <Container>
                <Row>
                    <Col sm={5} md={5} className="border-end border-dark">
                        <div className="">
                            <h2>Address</h2>
                            <h4>Iris Marcket (2nd Floor)</h4>
                            <h4>P.O. Box 283 8562 Junction Rd.</h4>
                            <h4>Nikunjo, Gulshan 20620</h4>
                            <h4>(+880) 587-2335</h4>
                    </div>
                    </Col>
                    <Col sm={2} md={2}></Col>
                    <Col sm={5} md={5} className="border-start border-dark">
                        <div className="">
                            <h2>Contacts</h2>
                            <h4>www.sweethtooth.com</h4>
                            <h4>sweethtooth@health.org</h4>
                            <h4>https://www.facebook.com/sweethtooth</h4>
                            <h4>(+880) 587-2335</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;