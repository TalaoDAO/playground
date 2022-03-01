import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";
import PassActivation from "../components/PassActivation";
import { Link } from "react-router-dom";


import bch01 from './img/background-cubes-hero.png';
import bch02 from './img/background-cubes-hero@2x.png';
import bch03 from './img/background-cubes-hero@3x.png';
import phh03 from './img/Phone - home - hero@3x.png';
import phh02 from './img/Phone - home - hero@2x.png';
import phh01 from './img/Phone - home - hero.png';
import gch01 from './img/Green cube hero - separation.png';
import gch02 from './img/Green cube hero - separation@2x.png';
import gch03 from './img/Green cube hero - separation@3x.png';
import apl01 from './img/btn-mac-app-store.png';
import apl02 from './img/btn-mac-app-store@2x.png';
import apl03 from './img/btn-mac-app-store@3x.png';
import goo01 from './img/btn-google-play.png';
import goo02 from './img/btn-google-play@2x.png';
import goo03 from './img/btn-google-play@3x.png';
import dow01 from './img/Image phone - download app.png';
import dow02 from './img/Image phone - download app@2x.png';
import dow03 from './img/Image phone - download app@3x.png';
import agn01 from './img/icon-how-to-generate-account.png';
import agn02 from './img/icon-how-to-generate-account@2x.png';
import agn03 from './img/icon-how-to-generate-account@3x.png';
import are01 from './img/icon-how-to-recover-account.png';
import are02 from './img/icon-how-to-recover-account@2x.png';
import are03 from './img/icon-how-to-recover-account@3x.png';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL + "/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Home">
      <main >
        <Container >
          <div className="position-relative p-3 p-md-5 m-md-3 align-items-center justify-content-center text-center Background-cubes---hero" >

            <Row>
              <Col lg={{ span: 6, offset: 2 }}>
                <Row>

                  <Col>
                    <Image src={bch01} srcSet={`${bch02} 2x, ${bch03} 3x`} fluid className="img-banner"></Image>
                    <span className="Title-TAGH1">Playground wallet</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="Description-TAGUI_L">Start a decentralized world journey</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center text-center Background-cubes---hero p-3">
              <Col lg={{ span: 4, offset: 2 }}>
                <p className="Title-TAGH2 ">Passport for a decentralized world</p>
                <p className="Title-TAGH3" >Talao provides protocols, wallets and innovative decentralized tools to allow businesses to offer customers and avatars services based on their identity, their reputation, their community  and their digital assets.</p>

              </Col>
              <Col xs={12} md={12} lg={{ span: 6 }} >

                <Image src={phh01} srcSet={`${phh02} 2x, ${phh03} 3x`} className="img-phone" fluid></Image>

              </Col>
            </Row>
            <Row >
              <Col>

                <Image src={gch01} srcSet={`${gch02} 2x, ${gch03} 3x`} className="img-separator" fluid></Image>
              </Col>

            </Row>

          </div>

          <div className="position-relative p-3 p-md-5 m-md-3 overflow-hidden align-items-center justify-content-center text-center after-separator">
            <Row>
              <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                <br />
                <span className="Title-TAGH1-dark">Download app</span>
                <br />
                <span className="Description-TAGUI_L-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
                <br />

              </Col>

            </Row>
          </div>

          <div className="position-relative overflow-hidden align-items-center justify-content-center text-center">
            <Row>
              <Col xs={12} md={12} lg={{ span: 2, offset: 4 }}>
                <Image src={goo01} srcSet={`${goo02} 2x, ${goo03} 3x`} className="btn-google-play" fluid></Image>
              </Col>
              <Col xs={12} md={12} lg={{ span: 2 }}>

                <Image src={apl01} srcSet={`${apl02} 2x, ${apl03} 3x`} className="btn-mac-app-store" fluid ></Image>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                <Image src={dow01} srcSet={`${dow02} 2x, ${dow03} 3x`} className="Image-phone---download-app" fluid></Image>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={{ span: 4, offset: 2 }}>
                <Image src={agn01} srcSet={`${agn02} 2x, ${agn03} 3x`} className="links-icon" fluid></Image>
                <Link to="/generate" className="links-dark"> How to generate your account?</Link>
              </Col>
              <Col xs={12} md={12} lg={{ span: 4 }}>

                <Image src={are01} srcSet={`${are02} 2x, ${are03} 3x`} className="links-icon" fluid></Image>
                <Link to="/generate" className="links-dark"> How to recover your account?</Link>
              </Col>
            </Row>

          </div>


          <PassActivation />
          <UseCases />
          <ManageStrip />
          <p>{!data ? "Loading..." : data}</p>
        </Container>

      </main>
    </div>
  );
}

export default Home;