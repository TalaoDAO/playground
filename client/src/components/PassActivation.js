import React from 'react';

import {
    Container, Image, Row, Col, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';



import gys01 from '../pages/img/Green + yellow cube -  separation.png';
import gys02 from '../pages/img/Green + yellow cube -  separation@2x.png';
import gys03 from '../pages/img/Green + yellow cube -  separation@3x.png';
import pow01 from '../pages/img/icon-btn-learn-more-pass-activation.png';
import pow02 from '../pages/img/icon-btn-learn-more-pass-activation@2x.png';
import pow03 from '../pages/img/icon-btn-learn-more-pass-activation@3x.png';
import aps01 from '../pages/img/Wallet - Activation pass section.png';
import aps02 from '../pages/img/Wallet - Activation pass section@2x.png';
import aps03 from '../pages/img/Wallet - Activation pass section@3x.png';
import ycs01 from '../pages/img/Yellow cube small - separation.png';
import ycs02 from '../pages/img/Yellow cube small - separation@2x.png';
import ycs03 from '../pages/img/Yellow cube small - separation@3x.png';


const PassActivation = () => (
    <div className="PassActivation p-3 mb-2">
        <Container>
            <Row className="align-items-center justify-content-center text-center ">
              <Col xs md lg={{ span: 12 }}>

                <Image src={gys01} srcSet={`${gys02} 2x, ${gys03} 3x`} className="seperation-stripe" fluid></Image>

              </Col>
            </Row>
            <Row className="Trac-141-row align-items-center justify-content-center text-center">
              <Col xs md lg={{ span: 6 }}>
                <Image src={aps01} srcSet={`${aps02} 2x, ${aps03} 3x`} className="Wallet---Activation-pass-section" fluid></Image>
              </Col>
              <Col xs md lg={{ span: 6 }}>
                <Row>
                  <span className="Title-yellow ">Pass Activation</span>

                </Row>
                <Row>
                  <span className="Title-TAGH3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>

                </Row>
                <Row style={{ paddingTop: "30px" }}>
                  <div className="btn-learn-more">
                    <Link to="/activation" className="white-label">LEARN MORE <Image  fluid src={pow01} srcSet={`${pow02} 2x, ${pow03} 3x`} className="icon-btn-learn-more"></Image>
                  </Link>
                  </div>
                        
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center text-center">
              <Col xs md lg={{ span: 12 }}>
                <Image src={ycs01} srcSet={`${ycs02} 2x, ${ycs03} 3x`} className="separator-bottom "  fluid></Image>

              </Col>
            </Row>
            

        </Container>

    </div>
);

export default PassActivation;