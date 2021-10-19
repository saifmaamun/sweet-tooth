import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <>
                <Navbar className="fw-bold"collapseOnSelect expand="sm" bg="warning" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Sweeth Tooth</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/campaign">Campaign</Link>
                            </Nav>
                            <Nav className="me">
                                <Link to="/login">Login</Link>
                                <Link to="/signin">Signin</Link>
                            </Nav>
                            {user?.email && <Navbar.Text>
                                Signed in as:<span className=" px-1 text-dark fw-bold"> {user.displayName}</span>
                            </Navbar.Text>}
                                {user?.email && <Button onClick={logout}>Logout</Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;