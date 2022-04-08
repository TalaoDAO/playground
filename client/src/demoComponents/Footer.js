import React from 'react';

import {
  Col,
  Container, Row, Image
} from 'react-bootstrap';
import { Route } from 'react-router-dom';

import twitter from '../pages/img/home/icon-twitter-footer.svg';
import linkedin from '../pages/img/home/icon-linkedin-footer.svg';
import fb from '../pages/img/home/icon-facebook-footer.svg';
import logoFooter from '../pages/img/home/Logo-footer.png';


const { REACT_APP_VERSION } = process.env;



const Footer = () => (
  <footer className="footer" >
    <Container fluid >
      <Row>
        <Col xs={12} md={12} lg={{offset:3,span:6}}>
          <Row >

            <Col xs={12} md={8} lg={8}>

              <div className='footer-normal'>
              <Image src={logoFooter} className="footer-img p-1" fluid></Image>

              </div>

              <div className='footer-normal'>
                © Talao {new Date().getFullYear()} Version: {REACT_APP_VERSION}
              </div>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <div className='footer-title'>
                Follow us
              </div>

              <div className='footer-normal'>
                <a href="https://twitter.com/Talao_io" target="_blank"><Image src={twitter} className="footer-img p-1 footer-normal-img" fluid></Image></a>

                <a href="https://www.linkedin.com/company/talao" target="_blank" ><Image src={linkedin} className="footer-img p-1 footer-normal-img" fluid></Image></a>

                <a href="https://www.facebook.com/TalaoDAO/" target="_blank"><Image src={fb} className="footer-img p-1 footer-normal-img" fluid></Image></a>
              </div>

              
            </Col>
          </Row>
        </Col>
      </Row>



    </Container>
  </footer>
);

export default Footer;