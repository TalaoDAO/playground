import React from 'react';
import mstrip from '../images/manage-strip.png';

import {
  Container,Image, Card, Row, Col, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageStrip = () => (
    <div className="UseCases" className="p-3 mb-2 bg-secondary text-white">
        <Container>
            <Row>
                <Col xs md lg= {{ span: 4, offset: 2 }} className="justify-content-center">
                    <Row>
                        <h1 className="display-4 fw-normal">Manage your certificates</h1>
                    </Row>
                    <Row>
                        <p className="lead fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </Row>   
                    <Row style={{padding:20}}>
                            <Col>
                                <Button variant="outline-light" href="/manage">How it works</Button>
                            </Col>
                    </Row>
                </Col>
                <Col xs md lg= {{ span: 4 }} className="justify-content-center p-4">
                    <Image src={mstrip} height={400}/>
                </Col>
            </Row>
           
        </Container>

    </div>
);

export default ManageStrip;