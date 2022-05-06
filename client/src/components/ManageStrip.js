import React from 'react';

import {
    Container, Image, Row, Col, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import gc01 from '../assets/images/v1/pages/manage_strip/green-separator.webp';
import gc02 from '../assets/images/v1/pages/manage_strip/green-separator@2x.webp';
import gc03 from '../assets/images/v1/pages/manage_strip/green-separator@3x.webp';

import btnpass from '../assets/images/v1/pages/manage_strip/button-activation-pass.svg';

import ycs01 from '../assets/images/v1/pages/manage_strip/yellow-separator.webp';
import ycs02 from '../assets/images/v1/pages/manage_strip/yellow-separator@2x.webp';
import ycs03 from '../assets/images/v1/pages/manage_strip/yellow-separator@3x.webp';
import {ROUTES} from "../constants/routes";


const ManageStrip = () => (
    <div  className="position-relative">
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
                            <Link to={ROUTES.MANAGE} ><Image src={btnpass} className="btn-learn-more" fluid></Image></Link>

                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row className="text-center">
              <Col xs={12} md={12} lg={{ span: 12 }}>
                <Image src={ycs01} srcSet={`${ycs02} 2x, ${ycs03} 3x`} className="separator-bottom "  fluid></Image>

              </Col>
            </Row>


    </div>
);

export default ManageStrip;
