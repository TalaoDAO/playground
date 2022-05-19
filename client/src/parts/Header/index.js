import React from 'react';
import { logoImg } from '../../assets/images';
import {
  Container, Navbar, Nav, NavDropdown, Image,
} from 'react-bootstrap';
import './styles.scss';
import {ROUTES} from "../../constants";
import {Link} from "react-router-dom";

function getSessionToken() {
  let tokenString = sessionStorage.getItem('token');
  if (typeof tokenString !== "undefined" && tokenString !== null && tokenString !== undefined && tokenString !== "undefined") {
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
    <header className="app-header">
      <Container fluid >
        <div className='header-position'>

          <Navbar bg="white" expand="lg md">
            <Navbar.Brand href="/home">
              <Image src={logoImg} fluid className='talao-logo' />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto">
                <NavDropdown  className="nav-menu" title="Play with talao wallet" id="basic-nav-dropdown"  >
                  <NavDropdown.Item href={ROUTES.ACTIVATION}>Activate your email pass</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.UNIVERSITY}>Download a diploma</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.UNIVERSITY}>Download your student card</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.EMPLOYER}>Request an employer certificate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={ROUTES.DISCOUNT}>Get a discount coupon</NavDropdown.Item>
                </NavDropdown>

                <Nav.Item className="nav-menu how-nav-menu">
                  <Link className="header-link" to={ROUTES.HOW_TO_WORK}>How does it work?</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
}

export default Header;
