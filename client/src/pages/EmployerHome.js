import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';


import com_logo from './img/employer/company-logo.png';
import com_left from './img/employer/company-left.png';
import com_tools from './img/employer/company-tools.png';
import com_account from './img/employer/company-account.png';
import { Link } from 'react-router-dom';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function EmployerHome() {
  

  return (
    <div className="EmployerHome">
      <main >
        <Container>

            <div className="turquoise-container">
                <Row className="turquoise-container">
                <Col xs={8} md={8} lg={8} style={{ textAlign: "left" }} className="p-4 turquoise-container">
                
                <Image src={com_logo} className="img-scale" fluid></Image>

                </Col>
                <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 turquoise-container" >
                <Image src={com_tools} className="img-scale" fluid></Image>

                </Col>
            </Row>
            <Row className="  align-items-center justify-content-left text-left turquoise-container">
                <Col xs={12} md={12} lg={6}>
                    <Image src={com_left} className="img-fit" fluid></Image>
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <Row>
                      <Col><Image src={com_account} className="img-fit" fluid></Image></Col>
                  </Row>
                  <Row>
                      <Col xs={12} md={12} lg={{span: 6, offset:3}}>
                             <Link to="/com-account" className="btn btn-danger " >My Account</Link>
                      </Col>
                  </Row>
                </Col>
            </Row>

            </div>


        </Container>

      </main>
    </div>
  );
}

export default EmployerHome;