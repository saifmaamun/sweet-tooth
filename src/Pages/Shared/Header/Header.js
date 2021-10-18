import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
                <Navbar className="fw-bold"collapseOnSelect expand="sm" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Sweeth Tooth</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/campaign">Campaign</Nav.Link>
                            </Nav>
                            <Nav className="me">
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/signin">Signin</Nav.Link>
                            </Nav>
                            <Navbar.Text>
                                Signed in as:<span className=" px-1 text-dark fw-bold"> Mark Otto</span>
                            </Navbar.Text>
                                <Button>Logout</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;