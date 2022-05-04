import React from 'react';
import Logout from '../../components/auth/Logout';

import {
  Container, Navbar, Nav, NavDropdown, Image, Row, Col
} from 'react-bootstrap';

import logoImg from '../../assets/images/logo.svg';

import logo1 from '../../pages/img/home/LogoTalao.webp';
import logo2 from '../../pages/img/home/LogoTalao@2x.webp';
import logo3 from '../../pages/img/home/LogoTalao@3x.webp';
import {ROUTES} from "../../constants/routes";


const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;
function isAuth() {
  let token = sessionStorage.getItem('token');
  return token ? true : false;
}

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
    <header>
      <Container fluid >
        <div className='header-position'>
          <Navbar bg="white" expand="lg md">
            <Navbar.Brand href={ROUTES.HOME}>
              <Image src={logoImg}  fluid className='talao-logo' />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto">
                <NavDropdown  className="nav-menu px-3" title="Play with talao wallet" id="basic-nav-dropdown"  >
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
                <Nav.Link href={ROUTES.MANAGE}  className="nav-menu px-3">Manage Certificates</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
}

export default Header;
