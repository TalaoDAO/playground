import React from 'react';
import logo from '../images/talao-logo.png';
import Logout from './auth/Logout';

import {
  Container, Navbar, Nav, NavDropdown, Image
} from 'react-bootstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;
function isAuth() {
  let token = sessionStorage.getItem('token');
  return token ? true : false;
}

function getSessionToken() {
  let tokenString = sessionStorage.getItem('token');
  if (typeof tokenString !== "undefined" && tokenString !== null && tokenString !== undefined && tokenString !== "undefined") {
    console.log(tokenString);

    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken?.token
  }
  return null;
}

const Header = () => {
  const [token, setToken] = React.useState(getSessionToken());

  React.useEffect(() => {
    sessionStorage.setItem('token', JSON.stringify(token));

  }, [token]);

  return (
    <header>
      <Container>
        <Navbar bg="white" expand="lg">
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
              {!token ? '' : <Logout setToken={setToken} />}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;