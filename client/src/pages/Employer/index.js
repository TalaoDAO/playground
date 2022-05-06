import React from "react";

import step011 from '../../pages/img/employment/Image-employer-certificate-acces-account.webp';
import step012 from '../../pages/img/employment/Image-employer-certificate-acces-account@2x.webp';
import step013 from '../../pages/img/employment/Image-employer-certificate-acces-account@3x.webp';


import step021 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode.webp';
import step022 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode@2x.webp';
import step023 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode@3x.webp';


import step031 from '../../pages/img/employment/Image-employer-certificate-request.webp';
import step032 from '../../pages/img/employment/Image-employer-certificate-request@2x.webp';
import step033 from '../../pages/img/employment/Image-employer-certificate-request@3x.webp';


import step041 from '../../pages/img/employment/Image-employer-certificate-complete-form.webp';
import step042 from '../../pages/img/employment/Image-employer-certificate-complete-form@2x.webp';
import step043 from '../../pages/img/employment/Image-employer-certificate-complete-form@3x.webp';


import step051 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode-request.webp';
import step052 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode-request@2x.webp';
import step053 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode-request@3x.webp';


import step061 from '../../pages/img/employment/Image-employer-certificate-accept-certificate-wallet.svg';
import step062 from '../../pages/img/employment/Image-employer-certificate-accept-certificate-wallet.svg';
import step063 from '../../pages/img/employment/Image-employer-certificate-accept-certificate-wallet.svg';

import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import UseCases from "../../components/UseCases";
import ManageStrip from "../../components/ManageStrip";
import {ROUTES} from "../../constants/routes";

const { REACT_APP_NODE_LOCAL } = process.env;

function Employer() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Employer ">
      <main >
        <Container fluid>
          <Row className="dark-blue-section text-center">
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} >

              <Row>
                <Col>
                  <div className="title-white">Request an employer certificate</div>
                </Col>
              </Row>

              <Row className="lower">
                <Col>
                  <Button href={ROUTES.COMPANY} variant="btn btn-info btn-lg ">Start Demo</Button>
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
                    <Image src={step011} srcSet={`${step012} 2x, ${step013} 3x`} className="step-image-desktop " fluid></Image>

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
                    <Image src={step021} srcSet={`${step022} 2x, ${step023} 3x`} className="step-image-desktop " fluid></Image>

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
                    <Image src={step031} srcSet={`${step032} 2x, ${step033} 3x`} className="step-image-desktop " fluid></Image>

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
                  <Col>
                    <Image src={step041} srcSet={`${step042} 2x, ${step043} 3x`} className="step-image-desktop " fluid></Image>

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
                    <Image src={step051} srcSet={`${step052} 2x, ${step053} 3x`} className="step-image-desktop" fluid></Image>
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
                    <Image src={step061} srcSet={`${step062} 2x, ${step063} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="position-relative overflow-hidden text-center lower">
            <Row>
              <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                <Button href={ROUTES.COMPANY} variant="btn btn-info btn-lg btn-demo">Start Demo</Button>
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

export default Employer;
