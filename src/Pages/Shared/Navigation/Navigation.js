import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/home">Daily Tour</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blog">Blogs</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link >Taseen Bappi</Nav.Link>

                        {/* <Nav.Link href="#deets"><img src='./logo.svg' alt="" /></Nav.Link> */}

                    </Nav>
                    <Nav.Link ><button className='login-btn'>Login</button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;