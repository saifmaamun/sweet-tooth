import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import logImg from '../../images/Login/log-bg.png'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <h1 className="fw-bolder mt-2">Please Login</h1>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div>
                                <img className="w-100" src={logImg} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="mt-5 pt-5">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                
                                <div className="text-center">
                                    <Button className="my-3">Log In</Button>
                                    <br />
                                    <p>=====Or Sign in With Google=====</p>
                                    <Button>Sign In With Google</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;