import React from "react";
import {
  Container, Image, Row, Col
} from 'react-bootstrap';
import UseCases from '../../parts/UseCases';

import create_1 from '../img/generate/Image-phone-icon-create-account.webp';
import create_2 from '../img/generate/Image-phone-icon-create-account@2x.webp';
import create_3 from '../img/generate/Image-phone-icon-create-account@3x.webp';
import phrase_1 from '../img/generate/Image-phone-icon-save-phrase.webp';
import phrase_2 from '../img/generate/Image-phone-icon-save-phrase@2x.webp';
import phrase_3 from '../img/generate/Image-phone-icon-save-phrase@3x.webp';
import start_1 from '../img/generate/Image-phone-start-using-wallet.webp';
import start_2 from '../img/generate/Image-phone-start-using-wallet@2x.webp';
import start_3 from '../img/generate/Image-phone-start-using-wallet@3x.webp';

const { REACT_APP_NODE_LOCAL } = process.env;

function Generate() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <main>
      <Container fluid className="position-relative  px-0 overflow-hidden">
        <div className="bg-blue-dark py-47">
          <h1 className="mb-0 text-center text-white">
            Generate your account
          </h1>
        </div>

        <div id="description" className="text-center">
          <Row >
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Image src={create_1} srcSet={`${create_2} 2x, ${create_3} 3x`} className="phone-image lg-only" fluid></Image>

            </Col>
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Row >
                <Col >
                  <div className="section-title-dark-single">Create your account</div>
                </Col>

              </Row>
            </Col>
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Image src={create_1} srcSet={`${create_2} 2x, ${create_3} 3x`} className="phone-image sm-only" fluid></Image>

            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} lg={9}>
              <Row className="text-center light-blue-div" >

                <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} >
                  <Row >
                    <Col >
                      <div className="section-title-dark-single">Save your phrase for recovery</div>
                    </Col>

                  </Row>
                </Col>
                <Col xs={12} md={12} lg={{ span: 6 }} >
                  <Image src={phrase_1} srcSet={`${phrase_2} 2x, ${phrase_3} 3x`} className="light-blue-image-no-shadow" fluid></Image>

                </Col>
              </Row>

            </Col>
          </Row>

          <Row >
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Image src={start_1} srcSet={`${start_2} 2x, ${start_3} 3x`} className="phone-image lg-only" fluid></Image>

            </Col>
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Row >
                <Col >
                  <div className="section-title-dark-single">Start using your wallet</div>
                </Col>

              </Row>
            </Col>
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Image src={start_1} srcSet={`${start_2} 2x, ${start_3} 3x`} className="phone-image sm-only" fluid></Image>

            </Col>
          </Row>

        </div>

        <UseCases />
      </Container>
    </main>
  );
}

export default Generate;