import React from 'react';

import {
  Container
} from 'react-bootstrap';


const Footer = () => (
  <footer className='p-3 mb-2 bg-light text-dark'>
    <Container>
    <p>{`${new Date().toLocaleString()}`}</p>
    </Container>
  </footer>
);

export default Footer;