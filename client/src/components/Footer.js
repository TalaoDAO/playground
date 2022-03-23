import React from 'react';

import {
  Col,
  Container, Row, Image
} from 'react-bootstrap';
import { Route } from 'react-router-dom';

import twitter from '../pages/img/home/icon-twitter-footer.svg';
import linkedin from '../pages/img/home/icon-linkedin-footer.svg';
import fb from '../pages/img/home/icon-facebook-footer.svg';


const {REACT_APP_VERSION } = process.env;



const Footer = () => (
  <footer>
    <Container fluid >
      <Row >
        <Col xs={12} md={12} lg={4}>
          <div className='footer-title'>
            Service
          </div>

          <div className='footer-normal'>
            Conseil 
          </div>
          
          <div className='footer-normal'>
            Développement
          </div>
        </Col>

        <Col xs={12} md={12} lg={4}>
          <div className='footer-title'>
            A propos
          </div>

          <div className='footer-normal'>
          Protection de la vie privée 
          </div>
          
          <div className='footer-normal'>
             CGU
          </div>
        </Col>

        <Col xs={12} md={12} lg={4}>
          <div className='footer-title'>
            Follow
          </div>

          <div className='footer-normal'>
          <Image src={twitter} className="footer-img p-1" fluid></Image>

          <Image src={linkedin} className="footer-img p-1" fluid></Image>

          <Image src={fb} className="footer-img p-1" fluid></Image>
          </div>
          
          <div className='footer-normal'>
            © Talao 2021 Version: {REACT_APP_VERSION}
          </div>
        </Col>
      </Row>

    </Container>
  </footer>
);

export default Footer;