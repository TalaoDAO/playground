import React from "react";
import "../App.css";

import entinf1 from '../pages/img/activate/Image-enter-your-informations.svg';
import entinf2 from '../pages/img/activate/Image-enter-your-informations.svg';
import entinf3 from '../pages/img/activate/Image-enter-your-informations.svg';

import entcode1 from '../pages/img/activate/Image-enter-your-code.svg';
import entcode2 from '../pages/img/activate/Image-enter-your-code.svg';
import entcode3 from '../pages/img/activate/Image-enter-your-code.svg';

import scan1 from '../pages/img/activate/image-scan-with-your-mobile-wallet.svg';
import scan2 from '../pages/img/activate/image-scan-with-your-mobile-wallet.svg';
import scan3 from '../pages/img/activate/image-scan-with-your-mobile-wallet.svg';


import cert1 from '../pages/img/activate/Image-accept-your-certificate.svg';
import cert2 from '../pages/img/activate/Image-accept-your-certificate.svg';
import cert3 from '../pages/img/activate/Image-accept-your-certificate.svg';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

const { REACT_APP_NODE_LOCAL } = process.env;

function Activation() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (

    <div className="Employer ">
    <main >
      <Container fluid >
        <Row className="dark-blue-section text-center">
          <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} >

            <Row>
              <Col>
                <div className="title-white">Activate your pass</div>
              </Col>
            </Row>
            <Row className="lower">
              <Col>
                <Button variant="btn btn-info btn-lg " href="/pass-activation">Start Demo</Button>
              </Col>
            </Row>
            <Row>
              <Col className="lower">
                <Button variant="outline-light " href="#description">How does it work?</Button>
              </Col>
            </Row>


          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={12} lg={12} >
            <div className="vertical-line"></div>

          </Col>
        </Row>

        <div id="description" className="text-center">

          <Row><Col><div className="section-header-dark lower">From your desktop</div></Col></Row>


          <Row className="text-center">
            <Col xs={12} md={12} lg={{ span: 6 }}>
              <Row className="text-center lower">
                <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                  <h1 className="step-muted">1.</h1>
                </Col>
                <Col className="text-start">
                  <span className="step-title"> Enter your information</span>
                </Col>
              </Row>
              <Row>
                <Col >
                  <Image src={entinf1} srcSet={`${entinf2} 2x, ${entinf3} 3x`} className="step-image-desktop " fluid></Image>

                </Col>
              </Row>
              <Row>
                <Col >
                  <div className="text-muted fs-6"><b>1.</b> First name <b>2.</b> Last name <b>3.</b> E-mail</div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={{ span: 6 }}>
              <Row className="text-center lower">
                <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                  <h1 className="step-muted">2.</h1>
                </Col>
                <Col className="text-start">

                  <span className="step-title"> Enter your code</span>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <Image src={entcode1} srcSet={`${entcode2} 2x, ${entcode3} 3x`} className="step-image-desktop " fluid></Image>

                </Col>
              </Row>
              <Row>
                <Col >
                  <div className="text-muted fs-6"><b>1.</b> Enter the code you received by email </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center" >
            <Col xs={12} md={12} lg={{ span: 6 }}>
              <Row className="text-center lower">
                <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                  <h1 className="step-muted">3.</h1>
                </Col>
                <Col className="text-start">
                  <span className="step-title"> Scan with your mobile wallet</span>
                </Col>

              </Row>
              <Row>
                <Col >
                  <Image src={scan1} srcSet={`${scan2} 2x, ${scan3} 3x`} className="step-image-mobile" fluid></Image>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={{ span: 6 }}>
              <Row className="text-center lower">
                <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                  <h1 className="step-muted">4.</h1>
                </Col>
                <Col className="text-start">
                  <span className="step-title"> Accept your certificate</span>
                </Col>

              </Row>
              <Row>
                <Col>
                  <Image src={cert1} srcSet={`${cert2} 2x, ${cert3} 3x`} className="step-image-mobile" fluid></Image>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="position-relative overflow-hidden text-center lower ">
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

      </Container>
    </main>
    </div>
  );
}

export default Activation;