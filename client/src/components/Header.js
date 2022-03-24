import React from 'react';
import Logout from './auth/Logout';

import {
  Container, Navbar, Nav, NavDropdown, Image, Row, Col
} from 'react-bootstrap';


import logo1 from '../pages/img/home/LogoTalao.webp';
import logo2 from '../pages/img/home/LogoTalao@2x.webp';
import logo3 from '../pages/img/home/LogoTalao@3x.webp';



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
      <Container fluid >
        <div className='header-position'>
          
        <Navbar bg="white" expand="lg md">
          <Navbar.Brand href="/home"><Image src={logo1} srcSet={`${logo2} 2x, ${logo3} 3x`} fluid className='talao-logo'></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav  className="ms-auto">
              <Nav.Link href="/activation" className="nav-menu px-3">Pass Activation</Nav.Link>
              <NavDropdown  className="nav-menu px-3" title="Use Cases" id="basic-nav-dropdown"  >
                <NavDropdown.Item href="/diploma">Download a diploma</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/student" >Download your student card</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employer">Request a certificate of employment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/discount">Get a discount coupon</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/manage"  className="nav-menu px-3">Manage Certificates</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </Container>
    </header>
  );
}

export default Header;