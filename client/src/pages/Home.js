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


import bch01 from './img/home/background-cubes.webp';
import bch02 from './img/home/background-cubes@2x.webp';
import bch03 from './img/home/background-cubes@3x.webp';
import phh03 from './img/home/phone-hero.svg';
import phh02 from './img/home/phone-hero.svg';
import phh01 from './img/home/phone-hero.svg';
import gch01 from './img/home/green-hero.webp';
import gch02 from './img/home/green-hero@2x.webp';
import gch03 from './img/home/green-hero@3x.webp';
import apl01 from './img/home/btn-mac-app-store.svg';
import apl02 from './img/home/btn-mac-app-store.svg';
import apl03 from './img/home/btn-mac-app-store.svg';
import goo01 from './img/home/btn-google-play.svg';
import goo02 from './img/home/btn-google-play.svg';
import goo03 from './img/home/btn-google-play.svg';
import dow01 from './img/home/phone-download.webp';
import dow02 from './img/home/phone-download@2x.webp';
import dow03 from './img/home/phone-download@3x.webp';
import agn01 from './img/home/icon-how-to-generate-account.svg';
import agn02 from './img/home/icon-how-to-generate-account.svg';
import agn03 from './img/home/icon-how-to-generate-account.svg';
import are01 from './img/home/icon-how-to-recover-account.svg';
import are02 from './img/home/icon-how-to-recover-account.svg';
import are03 from './img/home/icon-how-to-recover-account.svg';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Home">
      <main>
        <Container fluid className="position-relative" >
          <div className="dark-blue-jumbo" >

            <Row className="text-left">

              <Col sm={12} md={12} lg={12}>
                <Image src={bch01} srcSet={`${bch02} 2x, ${bch03} 3x`} fluid className="img-banner p-2"></Image>
                <span className="tag-h1">Playground wallet</span>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <span className="subtitle-colored">Start a decentralized world journey</span>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={6}>
                <p className="tag-h2 paragraph">Passport for a decentralized world</p>
                <p className="tag-h3" >Talao provides protocols, wallets and innovative decentralized tools to allow businesses to offer customers and avatars services based on their identity, their reputation, their community  and their digital assets.</p>
              </Col>
              
            </Row>
       


          </div>
          <div>
          <Row >
              <Col sm={12} md={12} lg={{ span: 4, offset: 4 }} className="text-center">

                <Image src={gch01} srcSet={`${gch02} 2x, ${gch03} 3x`} className="title-separator" fluid></Image>
              </Col>
              <Col sm={12} md={12} lg={4} className="text-center">
                <Image src={phh01} srcSet={`${phh02} 2x, ${phh03} 3x`} className="img-phone" fluid></Image>

              </Col>

            </Row>
            <Row >
              <Col sm={12} md={12} lg={12} className="text-center">

                <Image src={gch01} srcSet={`${gch02} 2x, ${gch03} 3x`} className="title-separator-alt" fluid></Image>
              </Col>
            </Row>
          </div>

         

          <div className="text-center">
            <Row>
              <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                <br />
                <span className="section-header-dark">Download app</span>
                <br />
               

              </Col>

            </Row>
          </div>

          <div className="text-center">
            <Row>
              <Col xs={12} md={12} lg={{ span: 2, offset: 4 }}>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=co.talao.wallet"><Image src={goo01} srcSet={`${goo02} 2x, ${goo03} 3x`} className="btn-google-play" fluid></Image></a>
              </Col>
              <Col xs={12} md={12} lg={{ span: 2 }}>

                <a target="_blank" href="https://apps.apple.com/app/talao-wallet/id1582183266#?platform=iphone"><Image src={apl01} srcSet={`${apl02} 2x, ${apl03} 3x`} className="btn-mac-app-store" fluid ></Image></a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                <Image src={dow01} srcSet={`${dow02} 2x, ${dow03} 3x`} className="phone-download" fluid></Image>
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
        </Container>

      </main>
    </div>
  );
}

export default Home;