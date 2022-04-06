import React from 'react';
import styled from 'styled-components';
// import Logout from './components/auth/Logout';

import {
  Container, Navbar, Nav, NavDropdown, Image, Row, Col
} from 'react-bootstrap';


import logo1 from '../images/logoUniversity.webp';
import logo2 from '../images/logoUniversity@2x.webp';
import logo3 from '../images/logoUniversity@3x.webp';
import avatar from '../images/Avatar.svg';

const LogoText = styled.span`
    font-size: 28px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.07;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-left: 10px;
`;

const MyAccount = styled.div`
    border-radius: 26px;
    background-color: #eb2762;
`;

const MyAccountText = styled.span`
    font-size: 19px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff !important;
`;

const AvatarImg = styled.img`
    margin-right: 7px;
`;


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
      <Container fluid className='header'>
        <div className='header-position'>
            <Navbar bg="red" expand="lg md">
            <Navbar.Brand href="/home">
                <Image src={logo1} srcSet={`${logo2} 2x, ${logo3} 3x`} fluid className='talao-logo'></Image>
                <LogoText>University of web design</LogoText>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav  className="ms-auto">
                    <MyAccount>
                        <Nav.Link href="/uni-account" >
                            <AvatarImg src={avatar} alt='avatar'></AvatarImg>
                            <MyAccountText>My account</MyAccountText>
                        </Nav.Link>
                    </MyAccount>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
      </Container>
    </header>
  );
}

export default Header;