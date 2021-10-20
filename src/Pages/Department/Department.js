import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Department = ({service}) => {
    const { name, description, dentist, position, degree, phone, img } = service;
    return (
        <div>
            <Col xs={12} sm={12} md={12} >
                <Container>
                    <Row>
                        <Col sm={5} className="py-3">
                            <img src={img} alt="" />
                        </Col>
                        <Col className="text-start text-primary pt-5" sm={7}>
                            <Card.Title className=" fs-2"><u>Department Name:</u> {name}</Card.Title>
                            <h4><u>Head:</u> {dentist}, ({degree}), {position}</h4>
                            <Card.Text className=" pt-3">
                                <u>About:</u> {description}
                            </Card.Text>
                            <Card.Text className=" pt-2">
                                <u>Phone:</u> {phone}
                            </Card.Text>
                            <br />
                            <br />
                            <br />
                            <br />
                            

                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    );
};

export default Department;
