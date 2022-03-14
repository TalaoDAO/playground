import React from "react";
import "../App.css";


import step011 from '../pages/img/Image-employer-certificate-acces-account.png';
import step012 from '../pages/img/Image-employer-certificate-acces-account@2x.png';
import step013 from '../pages/img/Image-employer-certificate-acces-account@3x.png';


import step021 from '../pages/img/Image-employer-certificate-scan-qrcode.png';
import step022 from '../pages/img/Image-employer-certificate-scan-qrcode@2x.png';
import step023 from '../pages/img/Image-employer-certificate-scan-qrcode@3x.png';


import step031 from '../pages/img/Image-employer-certificate-request.png';
import step032 from '../pages/img/Image-employer-certificate-request@2x.png';
import step033 from '../pages/img/Image-employer-certificate-request@3x.png';


import step041 from '../pages/img/Image-employer-certificate-complete-form.png';
import step042 from '../pages/img/Image-employer-certificate-complete-form@2x.png';
import step043 from '../pages/img/Image-employer-certificate-complete-form@3x.png';


import step051 from '../pages/img/Image-employer-certificate-scan-qrcode-request.png';
import step052 from '../pages/img/Image-employer-certificate-scan-qrcode-request@2x.png';
import step053 from '../pages/img/Image-employer-certificate-scan-qrcode-request@3x.png';


import step061 from '../pages/img/Image-employer-certificate-accept-certificate-wallet.png';
import step062 from '../pages/img/Image-employer-certificate-accept-certificate-wallet@2x.png';
import step063 from '../pages/img/Image-employer-certificate-accept-certificate-wallet@3x.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Image
  } from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Employer() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="Employer">
      <main >
        <Container className="px-0">
          <Row className="p-3 bg-playground text-white align-content-center">
            <Col xs={12} md={12} lg={{ span: 8, offset: 2 }} className="justify-content-center">

              <Row>
                <Col>
                  <span className="Title-TAGH1 text-center p-3">Request an employer certificate</span>
                </Col>
              </Row>
              
              <Row>
                <Col className="justify-content-center p-4">
                  <Button href="/company" variant="btn btn-info btn-lg ">Start Demo</Button>
                </Col>
              </Row>
              <Row className="p-5">
                <Col>
                  <Button variant="outline-light " href="#description">How does it work?</Button>
                </Col>
              </Row>

            </Col>
          </Row>


          <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">

            <Row>
                <Col>
                  <span className="Title-TAGH1-dark text-center p-3">From your desktop</span>
                </Col>
            </Row>
            <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row >
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">1.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="Title-TAGH2-dark"> Request access to your account</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={step011} srcSet={`${step012} 2x, ${step013} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>

              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row>
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">2.</h1>
                  </Col>
                  <Col className="text-start">

                    <span className="Title-TAGH2-dark"> Scan the QR Code</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-lg-10">
                    <Image src={step021} srcSet={`${step022} 2x, ${step023} 3x`} className="step-image-desktop " fluid></Image>

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
                    <span className="Title-TAGH2-dark"> Request your diploma certificate</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={step031} srcSet={`${step032} 2x, ${step033} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>

              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row>
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">4.</h1>
                  </Col>
                  <Col className="text-start">

                    <span className="Title-TAGH2-dark"> Complete the form</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-lg-10">
                    <Image src={step041} srcSet={`${step042} 2x, ${step043} 3x`} className="step-image-desktop " fluid></Image>

                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row >
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">5.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="Title-TAGH2-dark"> Scan with your mobile wallet</span>
                  </Col>

                </Row>
                <Row>
                  <Col >
                    <Image src={step051} srcSet={`${step052} 2x, ${step053} 3x`} className="step-image-desktop" fluid></Image>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }}>
                <Row>
                  <Col className="text-end" xs={3} md={3} lg={{ span: 3 }}>
                    <h1 className="text-muted">6.</h1>
                  </Col>
                  <Col className="text-start">
                    <span className="Title-TAGH2-dark"> Accept your certificate</span>
                  </Col>

                </Row>
                <Row>
                  <Col className="p-lg-10">
                    <Image src={step061} srcSet={`${step062} 2x, ${step063} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row>
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
              <Button href="/company" variant="btn btn-info btn-lg btn-demo">Start Demo</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={{ span: 10, offset: 1 }}>
              <hr className="btn-info btn-demo-hr" />
            </Col>
          </Row>


          <UseCases />
          <ManageStrip />

          <p>{!data ? "Loading..." : data}</p>

        </Container>
      </main>
    </div>
  );
}

export default Employer;