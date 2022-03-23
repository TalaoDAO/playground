import React from "react";
import "../App.css";

import diploma011 from '../pages/img/diploma/Image-diploma-acces-to-your-account.webp';
import diploma012 from '../pages/img/diploma/Image-diploma-acces-to-your-account@2x.webp';
import diploma013 from '../pages/img/diploma/Image-diploma-acces-to-your-account@3x.webp';


import diploma021 from '../pages/img/diploma/Image-diploma-Scan-the-qrcode-.webp';
import diploma022 from '../pages/img/diploma/Image-diploma-Scan-the-qrcode-@2x.webp';
import diploma023 from '../pages/img/diploma/Image-diploma-Scan-the-qrcode-@3x.webp';


import diploma031 from '../pages/img/diploma/Image-diploma-request-diploma-certificate.webp';
import diploma032 from '../pages/img/diploma/Image-diploma-request-diploma-certificate@2x.webp';
import diploma033 from '../pages/img/diploma/Image-diploma-request-diploma-certificate@3x.webp';


import diploma041 from '../pages/img/diploma/Image-diploma-compte-form.webp';
import diploma042 from '../pages/img/diploma/Image-diploma-compte-form@2x.webp';
import diploma043 from '../pages/img/diploma/Image-diploma-compte-form@3x.webp';


import diploma051 from '../pages/img/diploma/Image-diploma-scan-qrcode.webp';
import diploma052 from '../pages/img/diploma/Image-diploma-scan-qrcode@2x.webp';
import diploma053 from '../pages/img/diploma/Image-diploma-scan-qrcode@3x.webp';


import diploma061 from '../pages/img/diploma/Image-diploma-accept-news-certificate.svg';
import diploma062 from '../pages/img/diploma/Image-diploma-accept-news-certificate.svg';
import diploma063 from '../pages/img/diploma/Image-diploma-accept-news-certificate.svg';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

const { REACT_APP_NODE_LOCAL } = process.env;

function Diploma() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <main >
        <Container fluid className="position-relative  px-0 overflow-hidden">
          <Row className="dark-blue-section text-center">
          <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} >

              <Row>
                <Col>
                  <div className="title-white">Download a diploma</div>
                </Col>

              </Row>
              <Row className="lower">
                <Col>
                  <Button href="/university" variant="btn btn-info btn-lg ">Start Demo</Button>
                </Col>
              </Row>
              <Row className="lower">
                <Col>
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
                    <span className="step-title"> Request access to your account</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={diploma011} srcSet={`${diploma012} 2x, ${diploma013} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>

              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row className="text-center lower">
                  <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                    <h1 className="step-muted">2.</h1>
                  </Col>
                  <Col className="text-start">

                    <span className="step-title"> Scan the QR Code</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Image src={diploma021} srcSet={`${diploma022} 2x, ${diploma023} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="text-center">
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row className="text-center lower">
                  <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                    <h1 className="step-muted">3.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="step-title"> Request your diploma certificate</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={diploma031} srcSet={`${diploma032} 2x, ${diploma033} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>

              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row className="text-center lower">

                  <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                    <h1 className="step-muted">4.</h1>
                  </Col>
                  <Col className="text-start">

                    <span className="step-title"> Complete the form</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={diploma041} srcSet={`${diploma042} 2x, ${diploma043} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="text-center">
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row className="text-center lower">
                  <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                    <h1 className="step-muted">5.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="step-title"> Scan with your mobile wallet</span>
                  </Col>

                </Row>
                <Row>
                  <Col >
                    <Image src={diploma051} srcSet={`${diploma052} 2x, ${diploma053} 3x`} className="step-image-desktop" fluid></Image>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row className="text-center lower">
                  <Col className="text-end" xs={3} md={3} lg={{ span: 4 }}>
                    <h1 className="step-muted">6.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="step-title"> Accept your certificate</span>
                  </Col>

                </Row>
                <Row>
                  <Col>
                    <Image src={diploma061} srcSet={`${diploma062} 2x, ${diploma063} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="position-relative overflow-hidden text-center lower">
            <Row>
              <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                <Button variant="btn btn-info btn-lg btn-demo" href="/university">Start Demo</Button>
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

export default Diploma;