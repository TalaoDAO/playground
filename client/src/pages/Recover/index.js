import React from "react";
import {
  Container, Image, Row, Col
} from 'react-bootstrap';
import UseCases from '../../parts/UseCases';

import recovery_1 from '../../assets/images/v1/pages/recover/Image-phone-key-recovery.webp';
import recovery_2 from '../../assets/images/v1/pages/recover/Image-phone-key-recovery@2x.webp';
import recovery_3 from '../../assets/images/v1/pages/recover/Image-phone-key-recovery@3x.webp';
import recover_1 from '../../assets/images/v1/pages/recover/Image-phone-start-using-wallet.webp';
import recover_2 from '../../assets/images/v1/pages/recover/Image-phone-start-using-wallet@2x.webp';
import recover_3 from '../../assets/images/v1/pages/recover/Image-phone-start-using-wallet@3x.webp';

import { REACT_APP_NODE_LOCAL } from '../../constants';

function Recover() {
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
            Recover your account
          </h1>
        </div>


        <div id="description" className="text-center">
          <Row >
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Image src={recover_1} srcSet={`${recover_2} 2x, ${recover_3} 3x`} className="phone-image lg-only" fluid></Image>

            </Col>
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Row >
                <Col >
                  <div className="section-title-dark-single">Recovery phrase</div>
                </Col>

              </Row>
            </Col>
            <Col xs={12} md={12} lg={{ span: 5 }} >
              <Image src={recover_1} srcSet={`${recover_2} 2x, ${recover_3} 3x`} className="phone-image sm-only" fluid></Image>

            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} lg={9}>
              <Row className="text-center light-blue-div" >

                <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} >
                  <Row >
                    <Col >
                      <div className="section-title-dark-single">Start using your wallet</div>
                    </Col>

                  </Row>
                </Col>
                <Col xs={12} md={12} lg={{ span: 6 }} >
                  <Image src={recovery_1} srcSet={`${recovery_2} 2x, ${recovery_3} 3x`} className="light-blue-image" fluid></Image>

                </Col>
              </Row>

            </Col>
          </Row>
        </div>

        <UseCases />
      </Container>
    </main>
  );
}

export default Recover;
