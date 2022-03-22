import React from 'react';

import {
    Container, Image, Row, Col, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import gc01 from '../pages/img/manage_strip/green-separator.webp';
import gc02 from '../pages/img/manage_strip/green-separator@2x.webp';
import gc03 from '../pages/img/manage_strip/green-separator@3x.webp';

import btnpass from '../pages/img/manage_strip/button-activation-pass.svg';

import ycs01 from '../pages/img/manage_strip/yellow-separator.webp';
import ycs02 from '../pages/img/manage_strip/yellow-separator@2x.webp';
import ycs03 from '../pages/img/manage_strip/yellow-separator@3x.webp';


const ManageStrip = () => (
    <div className="ManageStrip">
        <Container fluid>
            <Row>
                <Col xs={12} md={12} lg={12} className="text-center">
                    <Image src={gc01} srcSet={`${gc02} 2x, ${gc03} 3x`} fluid className="separator-top"></Image>

                </Col>

            </Row>
            <Row className="text-center dark-blue-section ">
                <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} >

                    <Row>
                        <Col xs={12} md={12} lg={12} >
                            <div className="title-yellow">Manage your certificates</div>
                        </Col>

                    </Row>
                    <Row className="text-center">
                        <Col xs={12} md={12} lg={12} >
                            <Link to="/manage" ><Image src={btnpass} className="btn-learn-more" fluid></Image></Link>

                        </Col>

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