import React from "react";
import "../App.css";

import diploma011 from '../pages/img/Image-diploma-acces-to-your-account.png';
import diploma012 from '../pages/img/Image-diploma-acces-to-your-account@2x.png';
import diploma013 from '../pages/img/Image-diploma-acces-to-your-account@3x.png';


import diploma021 from '../pages/img/Image-diploma-Scan-the-qrcode-.png';
import diploma022 from '../pages/img/Image-diploma-Scan-the-qrcode-@2x.png';
import diploma023 from '../pages/img/Image-diploma-Scan-the-qrcode-@3x.png';


import diploma031 from '../pages/img/Image-diploma-request-diploma-certificate.png';
import diploma032 from '../pages/img/Image-diploma-request-diploma-certificate@2x.png';
import diploma033 from '../pages/img/Image-diploma-request-diploma-certificate@3x.png';


import diploma041 from '../pages/img/Image-diploma-compte-form.png';
import diploma042 from '../pages/img/Image-diploma-compte-form@2x.png';
import diploma043 from '../pages/img/Image-diploma-compte-form@3x.png';


import diploma051 from '../pages/img/Image-diploma-scan-qrcode.png';
import diploma052 from '../pages/img/Image-diploma-scan-qrcode@2x.png';
import diploma053 from '../pages/img/Image-diploma-scan-qrcode@3x.png';


import diploma061 from '../pages/img/Image-diploma-accept-news-certificate.png';
import diploma062 from '../pages/img/Image-diploma-accept-news-certificate@2x.png';
import diploma063 from '../pages/img/Image-diploma-accept-news-certificate@3x.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Student() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL + "/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Student">
      <main className="my-5 py-5">
        <Container className="px-0">
          <Row className="p-3 bg-playground text-white align-content-center">
            <Col xs={12} md={12} lg={{ span: 8, offset: 2 }} className="justify-content-center">

              <Row>
                <Col>
                  <span className="Title-TAGH1 text-center p-3">Download your student card</span>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} className="justify-content-center">
                  <span className="Title-TAGH3 text-center p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
                </Col>
              </Row>
              <Row>
                <Col className="justify-content-center p-5">
                  <Button variant="btn btn-info btn-lg ">Start Demo</Button>
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

            <Row><Col><span className="Title-TAGH1-dark text-center p-3">From your desktop</span></Col></Row>
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
                    <Image src={diploma011} srcSet={`${diploma012} 2x, ${diploma013} 3x`} className="step-image-desktop " fluid></Image>

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
                    <Image src={diploma021} srcSet={`${diploma022} 2x, ${diploma023} 3x`} className="step-image-desktop " fluid></Image>

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
                    <span className="Title-TAGH2-dark"> Request your student card</span>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <Image src={diploma031} srcSet={`${diploma032} 2x, ${diploma033} 3x`} className="step-image-desktop " fluid></Image>

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
                    <Image src={diploma041} srcSet={`${diploma042} 2x, ${diploma043} 3x`} className="step-image-desktop " fluid></Image>

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
                    <Image src={diploma051} srcSet={`${diploma052} 2x, ${diploma053} 3x`} className="step-image-desktop" fluid></Image>
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
                    <Image src={diploma061} srcSet={`${diploma062} 2x, ${diploma063} 3x`} className="step-image-mobile" fluid></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row>
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
              <Button variant="btn btn-info btn-lg btn-demo">Start Demo</Button>
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

export default Student;