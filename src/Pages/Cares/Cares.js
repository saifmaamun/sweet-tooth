import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Care from '../Care/Care';

const Cares = () => {
    const [care, setCare] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setCare(data.slice(0, 6)))
    }, [])
    return (
        <div id="services" className="container mt-5 pt-5">
            <h1 className="text-start text-info fw-bold pb-5"><u>Our Care Programes</u></h1>
            <Container>
                <Row className="g-4">
                    {
                        care.map(care => <Care
                            key={care.id}
                            care={care}
                        ></Care>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Cares;