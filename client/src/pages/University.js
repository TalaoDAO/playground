import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image, Modal
} from 'react-bootstrap';

import uni_logo_1 from './img/university/university-logo.png';
import uni_logo_2 from './img/university/university-logo@2x.png';
import uni_logo_3 from './img/university/university-logo@3x.png';

import uni_banner_1 from './img/university/university-banner.png';
import uni_banner_2 from './img/university/university-banner@2x.png';
import uni_banner_3 from './img/university/university-banner@3x.png';


import { Link } from 'react-router-dom';
import LoginForm from "../components/LoginForm";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function University() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="University">
      <main >
        <Container>

          <div className="azure-container p-3">
            <Row className="azure-container">
              <Col xs={8} md={8} lg={8} style={{ textAlign: "left" }} className="p-4 azure-container">

                <Image src={uni_logo_1} srcSet={`${uni_logo_2} 2x, ${uni_logo_3} 3x`} className="img-scale" fluid></Image>

              </Col>
              <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 azure-container" >
                <Button variant="btn btn-danger" onClick={handleShow}>My Account</Button>
                <Modal show={show} onHide={handleClose} className="p-4 align-items-center justify-content-center text-center">

                  <Modal.Body>
                      <span className="tag-h2">Scan with your mobile wallet</span>
                      <LoginForm next="/uni-account"/>

                  </Modal.Body>

              </Modal>

              </Col>
            </Row>
            <Row className="p-5 align-items-center justify-content-left text-left azure-container" style={{padding:"200px"}}>
              <Col xs={12} md={12} lg={6}>
                <Image src={uni_banner_1} srcSet={`${uni_banner_2} 2x, ${uni_banner_3} 3x`} className="img-fit" fluid></Image>
              </Col>
              <Col xs={12} md={12} lg={6}>
                <span className="tag-h1 text-left p-3">University of Web Design</span>
              </Col>
            </Row>

          </div>


        </Container>

      </main>
    </div>
  );
}

export default University;