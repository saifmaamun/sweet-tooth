import React from 'react';
import { Button, Card, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, dentist, position, degree, phone, img } = service;
    const details= description.slice(0,120)
    return (
        <Col xs={12} sm={6} md={4} >
            <Card  className="border-info bg-primary text-light rounded rounded-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="">{name}</Card.Title>
                    <Card.Subtitle className="my-3 fs-4 fw-bold">{dentist}</Card.Subtitle>
                    <Card.Subtitle className="mb-3">{degree}</Card.Subtitle>
                    <Card.Subtitle className="mb-3">{position}</Card.Subtitle>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to="/services"><Button className="px-3 fw-bold" variant="light">Details </Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;