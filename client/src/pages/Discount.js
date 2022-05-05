import React from "react";
import "../App.css";
import {
    Container, Button, Row, Col, Image
  } from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

import step051 from '../pages/img/discount/Image-discount-coupon-scan-qrcode.webp';
import step052 from '../pages/img/discount/Image-discount-coupon-scan-qrcode.webp';
import step053 from '../pages/img/discount/Image-discount-coupon-scan-qrcode.webp';


import step061 from '../pages/img/discount/Image-discount-coupon-accpet-certifiacte-wallet.svg';
import step062 from '../pages/img/discount/Image-discount-coupon-accpet-certifiacte-wallet.svg';
import step063 from '../pages/img/discount/Image-discount-coupon-accpet-certifiacte-wallet.svg';
import {ROUTES} from "../constants/routes";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Discount() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
      <main>
        <Container fluid className="px-0 overflow-hidden">
          <Row className="dark-blue-section text-center">
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} >

              <Row>
                <Col>
                  <div className="title-white">Get a discount coupon</div>
                </Col>
              </Row>
              
              <Row className="lower">
                <Col>
                  <Button variant="btn btn-info btn-lg " href={ROUTES.DISCOUNT_DEMO}>Start Demo</Button>
                </Col>
              </Row>
              <Row className="lower">
                <Col>
                  <Button variant="outline-light" href="#description">How does it work?</Button>
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
                    <span className="step-title"> Scan the QR Code</span>
                  </Col>

                </Row>
                <Row>
                  <Col >
                    <Image src={step051} srcSet={`${step052} 2x, ${step053} 3x`} className="step-image-desktop" fluid></Image>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row className="text-center lower">
                  <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                    <h1 className="step-muted">2.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="step-title"> Accept your certificate</span>
                  </Col>

                </Row>
                <Row>
                  <Col >
                    <Image src={step061} srcSet={`${step062} 2x, ${step063} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="position-relative overflow-hidden text-center lower">

          <Row>
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
              <Button variant="btn btn-info btn-lg btn-demo" href={ROUTES.DISCOUNT_DEMO}>Start Demo</Button>
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
  );
}

export default Discount;
