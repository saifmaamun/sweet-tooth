import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Signin = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="fw-bold my-3">Please Sign up</h1>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <div className="mx-auto text-center">
                            <input className="w-100 py-3 rounded border-info" placeholder="Name" type="text" name="" id="" /><br/><br/>
                            <input className="w-100 py-3 rounded border-info" placeholder="Email" type="email" name="" id="" /><br /><br />
                            <input className="w-100 py-3 rounded border-info" placeholder="Password" type="password" name="" id="" /><br /><br />
                            <input className="w-100 py-3 rounded border-info" placeholder="Re-enter Password" type="password" name="" id="" /><br /><br />
                            <input className="w-100 py-3 rounded border-info" placeholder="Address" type="text" name="" id="" /><br /><br />
                            <input className="w-100 py-3 rounded border-info" placeholder="Occupation" type="text" name="" id="" /><br /><br />
                            
                        </div>
                        <div className="text-center">
                            <Button className="my-3">Log In</Button>
                            <br />
                            <p>=====Or Sign in With Google=====</p>
                            <Button>Sign In With Google</Button>
                            <br />
                            <br />
                            <Link to='/login'><p>Already have an account</p></Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Signin;