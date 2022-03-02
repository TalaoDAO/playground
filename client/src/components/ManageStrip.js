import React from 'react';

import {
    Container, Image, Row, Col, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import gc01 from '../pages/img/Green cube hero - separation.png';
import gc02 from '../pages/img/Green cube hero - separation@2x.png';
import gc03 from '../pages/img/Green cube hero - separation@3x.png';

import pow01 from '../pages/img/icon-btn-learn-more-pass-activation.png';
import pow02 from '../pages/img/icon-btn-learn-more-pass-activation@2x.png';
import pow03 from '../pages/img/icon-btn-learn-more-pass-activation@3x.png';


import ycs01 from '../pages/img/Yellow cube small - separation.png';
import ycs02 from '../pages/img/Yellow cube small - separation@2x.png';
import ycs03 from '../pages/img/Yellow cube small - separation@3x.png';


const ManageStrip = () => (
    <div className="ManageStrip p-3 mb-2">
        <Container>
            <Row>
                <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                    <Image src={gc01} srcSet={`${gc02} 2x, ${gc03} 3x`} fluid className="separator-top"></Image>

                </Col>

            </Row>
            <Row className="p-3 bg-playground text-white tall-element align-content-center">
                <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} className="justify-content-center">

                    <Row>
                        <span className="Title-yellow text-center p-3">Manage your certificates</span>

                    </Row>
                    <Row>
                        <span className="Title-TAGH3 text-center  p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>

                    </Row>
                    <Row style={{ paddingTop: "30px" }} className="justify-content-center ">
                        <div className="btn-learn-more">
                            <Link to="/manage" className="white-label">LEARN MORE <Image fluid src={pow01} srcSet={`${pow02} 2x, ${pow03} 3x`} className="icon-btn-learn-more"></Image>
                            </Link>
                        </div>

                    </Row>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-center text-center">
              <Col xs={12} md={12} lg={{ span: 12 }}>
                <Image src={ycs01} srcSet={`${ycs02} 2x, ${ycs03} 3x`} className="separator-bottom "  fluid></Image>

              </Col>
            </Row>

        </Container>

    </div>
);

export default ManageStrip;