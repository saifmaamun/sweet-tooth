import React from 'react';
import { Button, Card, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description,id, dentist, position, degree, phone, img } = service;
    const details= description.slice(0,150)
    return (
        <Col xs={12} sm={6} md={4} >
            <Card className="border-secondary bg-primary shadow shadow-lg bg-gradient text-light rounded rounded-3">
                <Card.Body>
                    <Card.Title className=" fs-3">{name}</Card.Title>
                    <Card.Text className=" pt-3">
                        {details}
                    </Card.Text>
                    <Link to={`/details/${id}`}><button className="px-3 btn btn-warning fw-bold" variant="light">Details </button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;