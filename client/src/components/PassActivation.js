import React from 'react';

import {
  Container, Image, Row, Col, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';



import gys01 from '../pages/img/pass_activation/green-yellow-separator.webp';
import gys02 from '../pages/img/pass_activation/green-yellow-separator@2x.webp';
import gys03 from '../pages/img/pass_activation/green-yellow-separator@3x.webp';
import gch01 from '../pages/img/home/green-hero.webp';
import gch02 from '../pages/img/home/green-hero@2x.webp';
import gch03 from '../pages/img/home/green-hero@3x.webp';

import btnpass from '../pages/img/pass_activation/btn-pass-activation.svg';

import aps01 from '../pages/img/pass_activation/wallet-pass-activation.svg';
import aps02 from '../pages/img/pass_activation/wallet-pass-activation.svg';
import aps03 from '../pages/img/pass_activation/wallet-pass-activation.svg';
import ycs01 from '../pages/img/pass_activation/yellow-separator.webp';
import ycs02 from '../pages/img/pass_activation/yellow-separator@2x.webp';
import ycs03 from '../pages/img/pass_activation/yellow-separator@3x.webp';
import {ROUTES} from "../constants/routes";


const PassActivation = () => (
  <div  className="position-relative">
      <Row className="text-center">
        <Col xs={12} md={12} lg={12}>
          <Image src={gys01} srcSet={`${gys02} 2x, ${gys03} 3x`} className="seperation-stripe" fluid></Image>
        </Col>
      </Row>
      <Row className="text-center ">
        <Col xs={12} md={12} lg={12}>
          <Image src={gch01} srcSet={`${gch02} 2x, ${gch03} 3x`} className="seperation-stripe-alt" fluid></Image>
        </Col>
      </Row>
      <Row className="dark-blue-section text-center">
        <Col xs={12} md={12} lg={{ span: 6 }}  className="text-center">
          <Image src={aps01} srcSet={`${aps02} 2x, ${aps03} 3x`} className="activation-pass-wallet" fluid></Image>
        </Col>
        <Col xs={12} md={12} lg={{ span: 6 }}>
          <Row>
            <Col xs={12} md={12} lg={12}>

              <div className="title-yellow-sec">Pass Activation</div>
            </Col>

          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <Image src={aps01} srcSet={`${aps02} 2x, ${aps03} 3x`} className="activation-pass-wallet-alt" fluid></Image>
            </Col>
          </Row>

          <Row className="shifting-content-location">
            <Col xs={12} md={12} lg={12} >
              <Link to={ROUTES.ACTIVATION} ><Image src={btnpass} className="btn-learn-more" fluid></Image></Link>
            </Col>


          </Row>
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={12} md={12} lg={12} >
          <Image src={ycs01} srcSet={`${ycs02} 2x, ${ycs03} 3x`} className="separator-bottom" fluid></Image>

        </Col>
      </Row>


  </div>
);

export default PassActivation;
