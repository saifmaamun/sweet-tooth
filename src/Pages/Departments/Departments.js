import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Departments = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container mt-5 pt-5">
                <h1 className="text-start text-info fw-bold pb-5"><u>Our Department</u></h1>
                <Container>
                    <Row className="g-4">
                        {
                            services.map(service => <Department
                                key={service.id}
                                service={service}
                            ></Department>)
                        }
                    </Row>
                </Container>

            </div>
                <Footer></Footer>
        </div>
    );
}
export default Departments;