import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)))
    },[])
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-start text-info fw-bold pb-5"><u>Our Department</u></h1>
            <Container>
                <Row className="g-4">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }       
                </Row>
            </Container>
            
        </div>
    );
};

export default Services;