import React from 'react';

import dipi01 from '../pages/img/use_cases/icon-diploma-use-case.svg';
import dipi02 from '../pages/img/use_cases/icon-diploma-use-case.svg';
import dipi03 from '../pages/img/use_cases/icon-diploma-use-case.svg';
import dipd01 from '../pages/img/use_cases/image-download-a-diploma.webp';
import dipd02 from '../pages/img/use_cases/image-download-a-diploma@2x.webp';
import dipd03 from '../pages/img/use_cases/image-download-a-diploma@3x.webp';

import stci01 from '../pages/img/use_cases/icon-student-card-use-case.svg';
import stci02 from '../pages/img/use_cases/icon-student-card-use-case.svg';
import stci03 from '../pages/img/use_cases/icon-student-card-use-case.svg';
import stcd01 from '../pages/img/use_cases/image-download-a-diploma.webp';
import stcd02 from '../pages/img/use_cases/image-download-a-diploma@2x.webp';
import stcd03 from '../pages/img/use_cases/image-download-a-diploma@3x.webp';

import eci01 from '../pages/img/use_cases/icon-employer-certificate-use-case.svg';
import eci02 from '../pages/img/use_cases/icon-employer-certificate-use-case.svg';
import eci03 from '../pages/img/use_cases/icon-employer-certificate-use-case.svg';
import ecd01 from '../pages/img/use_cases/image-employer-certificate-use-case.webp';
import ecd02 from '../pages/img/use_cases/image-employer-certificate-use-case@2x.webp';
import ecd03 from '../pages/img/use_cases/image-employer-certificate-use-case@3x.webp';

import disi01 from '../pages/img/use_cases/icon-discount-coupon-use-case.svg';
import disi02 from '../pages/img/use_cases/icon-discount-coupon-use-case.svg';
import disi03 from '../pages/img/use_cases/icon-discount-coupon-use-case.svg';
import disd01 from '../pages/img/use_cases/image-discount-coupon-use-case.webp';
import disd02 from '../pages/img/use_cases/image-discount-coupon-use-case@2x.webp';
import disd03 from '../pages/img/use_cases/image-discount-coupon-use-case@3x.webp';

import {
    Container, Image, Card, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UseCases = () => (
    <div className="UseCases p-5">
        <Container fluid>

            <div className="text-center">
                <Row>
                    <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                        <Row>
                            <div className="section-header-dark">Use Cases</div>

                        </Row>
                    </Col>

                </Row>
            </div>
            <div className=" text-center">
                <Row >
                    <Col xs={12} md={12} lg={{ span: 5, offset: 1 }}>
                        <Card className='borderless-card'>
                            <Card.Header className='borderless-card'>

                                <Image src={dipi01} srcSet={`${dipi02} 2x, ${dipi03} 3x`} className="icon-use-case" fluid></Image>
                            </Card.Header>
                            <Card.Body >
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className="subtitle-dark">Download a diploma</div>
                                    </Col>

                                </Row>
                                <Row className='text-center'>
                                    <Col xs={12} md={12} lg={12}>
                                        <Image src={dipd01} srcSet={`${dipd02} 2x, ${dipd03} 3x`} className="download-use-case" fluid></Image>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <Link to="/diploma" className="links-light">LEARN MORE</Link>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className='separation-hr'></div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={{ span: 5 }}>
                        <Card className='borderless-card'>
                            <Card.Header className="borderless-card">

                                <Image src={stci01} srcSet={`${stci02} 2x, ${stci03} 3x`} className="icon-use-case" fluid></Image>
                            </Card.Header>
                            <Card.Body className='borderless-card'>
                                <Row>
                                    <Col>
                                        <div className="subtitle-dark">Download your student card</div>
                                    </Col>

                                </Row>
                                <Row className='text-center'>
                                    <Col>
                                        <Image src={stcd01} srcSet={`${stcd02} 2x, ${stcd03} 3x`} className="download-use-case" fluid></Image>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <Link to="/student" className="links-light ">LEARN MORE</Link>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className='separation-hr'></div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="separated">
                    <Col xs={12} md={12} lg={{ span: 5, offset: 1 }}>
                        <Card className='borderless-card' >
                            <Card.Header className="borderless-card">
                                
                                <Image src={eci01} srcSet={`${eci02} 2x, ${eci03} 3x`} className="icon-use-case" fluid></Image>    
                            </Card.Header>
                            <Card.Body className='borderless-card'>
                                <Row>
                                    <Col>
                                        <div className="subtitle-dark">Request an employer certificate</div>
                                    </Col>

                                </Row>
                                <Row className='text-center'>
                                    <Col>
                                        <Image src={ecd01} srcSet={`${ecd02} 2x, ${ecd03} 3x`} className="download-use-case" fluid></Image>  
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <Link to="/employer" className="links-light">LEARN MORE</Link>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className='separation-hr'></div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={{ span: 5 }}>
                        <Card  className='borderless-card'>
                            <Card.Header className="borderless-card">
                                
                            <Image src={disi01} srcSet={`${disi02} 2x, ${disi03} 3x`} className="icon-use-case" fluid></Image> 
                                </Card.Header>
                            <Card.Body className='borderless-card'>
                                <Row>
                                    <Col>
                                        <div className="subtitle-dark">Use discount coupon</div>
                                    </Col>

                                </Row>
                                <Row className='text-center'>
                                    <Col>
                                        <Image src={disd01} srcSet={`${disd02} 2x, ${disd03} 3x`} className="download-use-case" fluid></Image> 
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <Link to="/discount" className="links-light">LEARN MORE</Link>
                                    </Col>

                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>


        </Container>

    </div>
);

export default UseCases;