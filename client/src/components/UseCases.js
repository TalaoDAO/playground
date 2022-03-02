import React from 'react';

import dipi01 from '../pages/img/icon-diploma-use-case.png';
import dipi02 from '../pages/img/icon-diploma-use-case@2x.png';
import dipi03 from '../pages/img/icon-diploma-use-case@3x.png';
import dipd01 from '../pages/img/image-download-a-diploma.png';
import dipd02 from '../pages/img/image-download-a-diploma@2x.png';
import dipd03 from '../pages/img/image-download-a-diploma@3x.png';

import stci01 from '../pages/img/icon-student-card-use-case.png';
import stci02 from '../pages/img/icon-student-card-use-case@2x.png';
import stci03 from '../pages/img/icon-student-card-use-case@3x.png';
import stcd01 from '../pages/img/image-download-a-diploma.png';
import stcd02 from '../pages/img/image-download-a-diploma@2x.png';
import stcd03 from '../pages/img/image-download-a-diploma@3x.png';

import eci01 from '../pages/img/icon-employer-certificate-use-case.png';
import eci02 from '../pages/img/icon-employer-certificate-use-case@2x.png';
import eci03 from '../pages/img/icon-employer-certificate-use-case@3x.png';
import ecd01 from '../pages/img/image-employer-certificate-use-case.png';
import ecd02 from '../pages/img/image-employer-certificate-use-case@2x.png';
import ecd03 from '../pages/img/image-employer-certificate-use-case@3x.png';

import disi01 from '../pages/img/icon-discount-coupon-use-case.png';
import disi02 from '../pages/img/icon-discount-coupon-use-case@2x.png';
import disi03 from '../pages/img/icon-discount-coupon-use-case@3x.png';
import disd01 from '../pages/img/Image-discount-coupon-use-case.png';
import disd02 from '../pages/img/Image-discount-coupon-use-case@2x.png';
import disd03 from '../pages/img/Image-discount-coupon-use-case@3x.png';

import {
    Container, Image, Card, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UseCases = () => (
    <div className="UseCases p-5">
        <Container>

            <div className="position-relative overflow-hidden align-items-center justify-content-center text-center">
                <Row>
                    <Col xs md lg={{ span: 4, offset: 4 }}>
                        <Row>
                            <span className="Title-TAGH1-dark">Use Cases</span>

                        </Row>
                        <Row>
                            <span className="Description-TAGUI_L-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
                        </Row>
                    </Col>

                </Row>
            </div>
            <div className="position-relative overflow-hidden align-items-center justify-content-center text-center">
                <Row className="p-5">
                    <Col xs={12} md={12} lg={{ span: 5, offset: 1 }}>
                        <Card className='border-0'>
                            <Card.Header className="bg-white border-0">

                                <Image src={dipi01} srcSet={`${dipi02} 2x, ${dipi03} 3x`} className="icon-use-case" fluid></Image>
                            </Card.Header>
                            <Card.Body className='border-0'>
                                <Row>
                                    <Col>
                                        <span className="Description-TAGUI_L-dark">Download a diploma</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Image src={dipd01} srcSet={`${dipd02} 2x, ${dipd03} 3x`} className="download-use-case" fluid></Image>
                                    </Col>

                                </Row>

                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Link to="/diploma" className="links-dark fs-6">LEARN MORE</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={{ span: 5 }}>
                        <Card className='border-0'>
                            <Card.Header className="bg-white border-0">

                                <Image src={stci01} srcSet={`${stci02} 2x, ${stci03} 3x`} className="icon-use-case" fluid></Image>
                            </Card.Header>
                            <Card.Body className='border-0'>
                                <Row>
                                    <Col>
                                        <span className="Description-TAGUI_L-dark">Download your student card</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Image src={stcd01} srcSet={`${stcd02} 2x, ${stcd03} 3x`} className="download-use-case" fluid></Image>
                                    </Col>

                                </Row>

                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Link to="/student" className="links-dark fs-6">LEARN MORE</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className="p-4">
                    <Col xs={12} md={12} lg={{ span: 5, offset: 1 }}>
                        <Card className='border-0' >
                            <Card.Header className="bg-white border-0">
                                
                                <Image src={eci01} srcSet={`${eci02} 2x, ${eci03} 3x`} className="icon-use-case" fluid></Image>    
                            </Card.Header>
                            <Card.Body className='border-0'>
                                <Row>
                                    <Col>
                                        <span className="Description-TAGUI_L-dark">Request an employer certificate</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Image src={ecd01} srcSet={`${ecd02} 2x, ${ecd03} 3x`} className="download-use-case" fluid></Image>  
                                    </Col>

                                </Row>

                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Link to="/employer" className="links-dark fs-6">LEARN MORE</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={{ span: 5 }}>
                        <Card  className='border-0'>
                            <Card.Header className="bg-white border-0">
                                
                            <Image src={disi01} srcSet={`${disi02} 2x, ${disi03} 3x`} className="icon-use-case" fluid></Image> 
                                </Card.Header>
                            <Card.Body className='border-0'>
                                <Row>
                                    <Col>
                                    <span className="Description-TAGUI_L-dark">Use discount coupon</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Image src={disd01} srcSet={`${disd02} 2x, ${disd03} 3x`} className="download-use-case" fluid></Image> 
                                    </Col>

                                </Row>

                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Link to="/discount" className="links-dark fs-6">LEARN MORE</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>


        </Container>

    </div>
);

export default UseCases;