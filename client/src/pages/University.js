import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image, Modal
} from 'react-bootstrap';

import uni_logo_1 from './img/university/university-logo.svg';
import uni_logo_2 from './img/university/university-logo.svg';
import uni_logo_3 from './img/university/university-logo.svg';

import uni_banner_1 from './img/university/university-banner.svg';
import uni_banner_2 from './img/university/university-banner.svg';
import uni_banner_3 from './img/university/university-banner.svg';


import { Link } from 'react-router-dom';
import LoginForm from "../components/LoginForm";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function University() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main >
      <Container fluid>
        <Row className="">
          <Col xs={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} className="azure-container content-padded-uni">
            <Row >
              <Col xs={12} md={12} lg={10} className="text-left " >

                <Image src={uni_logo_1} srcSet={`${uni_logo_2} 2x, ${uni_logo_3} 3x`} className="uni-logo" fluid></Image>

              </Col>
              <Col xs={12} md={12} lg={2} className="text-center">
                <Button variant="btn btn-danger" onClick={handleShow}>My Account</Button>
                <Modal show={show} onHide={handleClose} className="text-center">

                  <Modal.Body>
                    <div className="subtitle-dark">Scan with your mobile wallet</div>
                    <LoginForm next="/uni-account" />

                  </Modal.Body>

                </Modal>


              </Col>
            </Row>
            
            <Row >
              <Col xs={12} md={12} lg={6} className="text-center">

                <div class="lower lg-only"></div>
                <Image src={uni_banner_1} srcSet={`${uni_banner_2} 2x, ${uni_banner_3} 3x`} className="uni-banner" fluid></Image>
              </Col>

              <Col xs={12} md={12} lg={6} className="text-center">

                <div class="lower lg-only"></div>
                <div className="title-white-low">University of Web Design</div>
              </Col>
            </Row>
            <Row class="lower sm-only">
              <Col>
                &nbsp;
              </Col>
            </Row>
          </Col>
        </Row>


      </Container>

    </main>
  );
}

export default University;