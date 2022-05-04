import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from 'react-bootstrap';
import { LogoImg } from '../../assets/images';
import { ROUTES } from '../../constants/routes';
import './styles.scss'

function getSessionToken() {
  let tokenString = sessionStorage.getItem('token');
  if (typeof tokenString !== "undefined" && tokenString !== null && tokenString !== undefined && tokenString !== "undefined") {
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken?.token
  }
  return null;
}

const Header = () => {
  const [token, setToken] = useState(getSessionToken());

  useEffect(() => {
    sessionStorage.setItem('token', JSON.stringify(token));
  }, [token]);

  return (
    <header className="app-header">
      <Container fluid >
        <div className='header-position'>
          <Navbar bg="white" expand="lg md">
            <Navbar.Brand href={ROUTES.HOME}>
              <Image src={LogoImg}  fluid className='talao-logo' />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto">
                <NavDropdown className="nav-menu px-3" title="Play with talao wallet" id="basic-nav-dropdown"  >
                  <NavDropdown.Item href={ROUTES.ACTIVATION}>Activate your email pass</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.DIPLOMA}>Download a diploma</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.STUDENT} >Download your student card</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.EMPLOYER}>Request an employer certificate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.DISCOUNT}>Get a discount coupon</NavDropdown.Item>
                </NavDropdown>
                {/*<Nav.Link href={ROUTES.MANAGE}  className="nav-menu px-3">Manage Certificates</Nav.Link>*/}
                <Nav.Link href={'#'}  className="nav-menu px-3">How does it work?</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
}

export default Header;
