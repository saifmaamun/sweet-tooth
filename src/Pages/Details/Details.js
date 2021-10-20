import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import { HashLink } from 'react-router-hash-link';

const Details = () => {
    const { id } = useParams()
    const [info, setInfo] = useState([])
    const [fullInfo,setFullInfo]=useState([])
    
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setInfo(data[id-1]))
    }, [])
    
    const { name, description,  dentist, position, degree, phone, img } = info;
    
    return (
        <div>
            <Header></Header>
            <div className="pt-5 mt-5">
                <Container>
                <Row>
                        <Col sm={4}>
                            <img className="rounded-3" src={img} alt="" />
                    </Col>
                        <Col sm={8}>
                            <Card  className="text-start py-2 my-3">
                                <Card.Body>
                                    <Card.Title className="fs-3">Name Of Department: {name}</Card.Title>
                                    <Card.Subtitle className="pt-4 fs-4 mb-2">Head Of Department: {dentist}, { degree}</Card.Subtitle>
                                    <Card.Subtitle className="pt-2 fs-5 mb-2">{position}</Card.Subtitle>
                                    <Card.Text className="pt-2 fw-bold mb-2"><u>Advice:</u> {description}</Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Details;