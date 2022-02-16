import React from 'react';
import uc01 from '../images/use-cases-01.png';
import uc01i from '../images/use-cases-01-icon.png';
import uc02 from '../images/use-cases-02.png';
import uc02i from '../images/use-cases-02-icon.png';
import uc03 from '../images/use-cases-03.png';
import uc03i from '../images/use-cases-03-icon.png';
import uc04 from '../images/use-cases-04.png';
import uc04i from '../images/use-cases-04-icon.png';

import {
  Container,Image, Card, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UseCases = () => (
    <div className="UseCases">
        <Container>
            <div className="col-md-8 p-lg-8 mx-auto my-8">
                    <Row>
                        <h1 className="display-4 fw-normal">Use Cases</h1>
                    </Row>
                    <Row>
                        <p className="lead fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </Row>   
            </div>
            <Row className="p-4">
                <Col xs md lg= {{ span: 4, offset: 2 }}>
                    <Card >
                        <Card.Header className="bg-white"><Image src={uc01i} height={30}></Image></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h4>Download a diploma</h4>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Image src={uc01} fluid></Image>
                                </Col>

                            </Row>
                            
                        </Card.Body>
                        <Card.Footer className="bg-white">
                            <Link to="/diploma" className="text-dark fs-6 text">LEARN MORE</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs md lg= {{ span: 4 }}>
                    <Card >
                        <Card.Header className="bg-white"><Image src={uc02i} height={30}></Image></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h4>Download your student card</h4>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Image src={uc02} fluid></Image>
                                </Col>

                            </Row>
                            
                        </Card.Body>
                        <Card.Footer className="bg-white">
                            <Link to="/student" className="text-dark fs-6 text">LEARN MORE</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="p-4">
                <Col xs md lg= {{ span: 4, offset: 2 }}>
                    <Card >
                        <Card.Header className="bg-white"><Image src={uc03i} height={30}></Image></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h4>Request an employer certificate</h4>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Image src={uc03} fluid></Image>
                                </Col>

                            </Row>
                            
                        </Card.Body>
                        <Card.Footer className="bg-white">
                            <Link to="/employer" className="text-dark fs-6 text">LEARN MORE</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs md lg= {{ span: 4 }}>
                    <Card >
                        <Card.Header className="bg-white"><Image src={uc04i} height={30}></Image></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h4>Use discount coupon</h4>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Image src={uc04} fluid></Image>
                                </Col>

                            </Row>
                            
                        </Card.Body>
                        <Card.Footer className="bg-white">
                            <Link to="/discount" className="text-dark fs-6 text">LEARN MORE</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
    
        </Container>

    </div>
);

export default UseCases;