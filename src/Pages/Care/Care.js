import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Care = ({care}) => {
    const { name, description, id, dentist, position, degree, phone, serviceImg } = care;
    
    return (
        <Col xs={12} sm={12} md={12} >
            <Card className="border-secondary bg-primary shadow shadow-lg bg-gradient text-light rounded rounded-3">

                <Card.Body>
            <Container>
                <Row>
                            <Col sm={4}>
                                <img className="w-100" src={serviceImg} alt="" />
                    </Col>
                    <Col sm={8}>
                                <Card.Title className=" fs-3">{name}</Card.Title>
                                <Card.Text className=" pt-3">
                                    {description}
                                </Card.Text>
                    </Col>
                </Row>
            </Container>
                            </Card.Body>
                    
            </Card>
        </Col>
    );
};

export default Care;