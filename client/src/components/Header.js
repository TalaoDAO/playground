import React from 'react';
import logo from '../images/talao-logo.png';

import {
  Container, Navbar, Nav, NavDropdown,Image
} from 'react-bootstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
  <header>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/home"><Image src={logo} className="fluid" height="50px"></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto justify-content-end">
                <Nav.Link href="/activation">Pass Activation</Nav.Link>
                <NavDropdown title="Use Cases" id="basic-nav-dropdown">
                <NavDropdown.Item href="/diploma">Download a diploma</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/student">Download your student card</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employer">Request a certificate of employment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/discount">Get a discount coupon</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/manage">Manage Certificates</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  </header>
);

export default Header;