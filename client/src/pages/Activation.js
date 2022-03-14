import React from "react";
import logo from "../logo.svg";
import "../App.css";
import activation01 from '../images/activation-01.png';
import activation02 from '../images/activation-02.png';
import activation03 from '../images/activation-03.png';
import activation04 from '../images/activation-04.png';

import entinf1 from '../pages/img/Image-enter-your-informations.png';
import entinf2 from '../pages/img/Image-enter-your-informations@2x.png';
import entinf3 from '../pages/img/Image-enter-your-informations@3x.png';

import entcode1 from '../pages/img/Image-enter-your-code.png';
import entcode2 from '../pages/img/Image-enter-your-code@2x.png';
import entcode3 from '../pages/img/Image-enter-your-code@3x.png';

import scan1 from '../pages/img/image-scan-with-your-mobile-wallet.png';
import scan2 from '../pages/img/image-scan-with-your-mobile-wallet@2x.png';
import scan3 from '../pages/img/image-scan-with-your-mobile-wallet@3x.png';


import cert1 from '../pages/img/Image-accept-your-certificate.png';
import cert2 from '../pages/img/Image-accept-your-certificate@2x.png';
import cert3 from '../pages/img/Image-accept-your-certificate@3x.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Activation() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Activation">
      <main >
        <Container>
          <Row className="position-relative p-3 p-md-5 m-md-3 bg-playground text-white  align-content-center">
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} className="justify-content-center">

              <Row>
                <Col>
                <span className="Title-TAGH1 text-center p-3">Activate your pass</span>
                </Col>
              </Row>
              <Row>
                <Col>
                <span className="Title-TAGH3 text-center p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
                </Col>
              </Row>
              <Row className='p-5'>
                <Col>
                  <Button variant="btn btn-info btn-lg " href="/pass-activation">Start Demo</Button>
                </Col>
              </Row>
              <Row className="p-3">
                <Col>
                  <Button variant="outline-light " href="#description">How does it work?</Button>
                </Col>
              </Row>

            </Col>
          </Row>


          <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">

            <Row><Col><span className="Title-TAGH1-dark text-center p-3">From your desktop</span></Col></Row>


            <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row >
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">1.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="Title-TAGH2-dark"> Enter your information</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={entinf1} srcSet={`${entinf2} 2x, ${entinf3} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>
                <Row>
                  <Col >
                    <p className="text-muted fs-6"><b>1.</b> First name <b>2.</b> Last name <b>3.</b> E-mail</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row>
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">2.</h1>
                  </Col>
                  <Col className="text-start">

                    <span className="Title-TAGH2-dark"> Enter your code</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-lg-10">
                    <Image src={entcode1} srcSet={`${entcode2} 2x, ${entcode3} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>
                <Row>
                  <Col >
                    <p className="text-muted fs-6"><b>1.</b> Enter the code you received by email </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row >
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">3.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="Title-TAGH2-dark"> Scan with your mobile wallet</span>
                  </Col>

                </Row>
                <Row>
                  <Col >
                    <Image src={scan1} srcSet={`${scan2} 2x, ${scan3} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row>
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">4.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="Title-TAGH2-dark"> Accept your certificate</span>
                  </Col>

                </Row>
                <Row>
                  <Col className="p-lg-10">
                    <Image src={cert1} srcSet={`${cert2} 2x, ${cert3} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
          <Row>
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
              <Button variant="btn btn-info btn-lg btn-demo" href="/pass-activation">Start Demo</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={{ span: 10, offset: 1 }}>
              <hr className="btn-info btn-demo-hr" />
            </Col>
          </Row>
          </div>


          <UseCases />
          <ManageStrip />

          <p>{!data ? "Loading..." : data}</p>

        </Container>
      </main>
    </div>
  );
}

export default Activation;