import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';


import uni_logo from './img/university/university-logo.png';
import uni_banner from './img/university/university-banner.png';
import { Link } from 'react-router-dom';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function University() {
  

  return (
    <div className="University">
      <main >
        <Container>

            <div className="azure-container">
                <Row className="azure-container">
                <Col xs={8} md={8} lg={8} style={{ textAlign: "left" }} className="p-4 azure-container">
                
                <Image src={uni_logo} className="img-scale" fluid></Image>

                </Col>
                <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 azure-container" >
                    <Link to="/uni-account" className="btn btn-danger " >My Account</Link>

                </Col>
            </Row>
            <Row className="  align-items-center justify-content-left text-left azure-container">
                <Col xs={12} md={12} lg={6}>
                    <Image src={uni_banner} className="img-fit" fluid></Image>
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <span className="Title-TAGH1 text-left p-3">University of Web Design</span>
                </Col>
            </Row>

            </div>


        </Container>

      </main>
    </div>
  );
}

export default University;