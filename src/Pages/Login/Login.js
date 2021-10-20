import React, {useState }  from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logImg from '../../images/Login/log-bg.png'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Login = () => {
    const { signinUsingGoogle, handleUserLogin,error} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        handleUserLogin(email, password);
    };


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
                                <input onBlur={hanldeEmail} className="w-100 py-3 rounded border-info" type="email" name="" placeholder="Email" />
                                <br />
                                <br />
                                <input onBlur={hanldePassword} className="w-100 py-3 rounded border-info" type="password" name="" placeholder="Password" />
                                <br />
                                <div className="row mb-3 text-danger">{error}</div>
                                <br />
                                <div className="text-center">
                                    <Button onClick={handleLogin} className="my-3">Log In</Button>
                                    <br />
                                    <p>=====Or Sign in With Google=====</p>
                                    <Button onClick={signinUsingGoogle}>Sign In With Google</Button>
                                    <br />
                                    <br />
                                    <Link to='/signin'><p>New User?</p></Link>
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