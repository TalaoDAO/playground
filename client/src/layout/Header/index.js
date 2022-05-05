import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from 'react-bootstrap';
import Container from '../../components/common/Container';
import { logoImg } from '../../assets/images/common';
import { ROUTES } from '../../constants';
import Icon from '../../components/common/Icon';
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
      <Container>
        <Navbar bg="white">
          <Navbar.Brand>
            <Link to={ROUTES.HOME}>
              <Image src={logoImg}  fluid className='talao-logo' />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav " className="header-navbar">
            <Nav className="ms-auto d-flex align-items-center">
              <NavDropdown className="nav-menu header-dropdown menu-link" title="Play with talao wallet" id="basic-nav-dropdown"  >
                <NavDropdown.Item>
                  <Link className="menu-link" to={ROUTES.ACTIVATION}>Activate your email pass</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="menu-link" to={ROUTES.DIPLOMA}>Download a diploma</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="menu-link" to={ROUTES.STUDENT}>Download your student card</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="menu-link" to={ROUTES.EMPLOYER}>Request an employer certificate</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="menu-link" to={ROUTES.DISCOUNT}>
                    Get a discount coupon
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/*<Nav.Link href={ROUTES.MANAGE}  className="nav-menu px-3">Manage Certificates</Nav.Link>*/}
              <Nav.Item className="nav-menu d-flex align-items-center ml-25">
                <Link className="menu-link" to={ROUTES.HOW_TO_WORK}>How does it work?</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          <span className="hamburger-btn">
            <Icon name="hamburger-menu"/>
          </span>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
