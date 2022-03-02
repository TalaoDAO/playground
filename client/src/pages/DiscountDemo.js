import React from "react";
import ddemo01 from '../images/discount-demo-01.png';
import "../App.css";
import QRCode from "react-qr-code";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';


import news_lt from './img/news-left-top.png';
import news_rt from './img/news-right-top.png';
import news_l from './img/news-left.png';
import news_rb from './img/news-right-bottom.png';
import news_dis from './img/news-discount.png';


const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function DiscountDemo() {
  const [qr, setQr] = React.useState(null);



  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL + "/api/qr-url")
      .then((res) => res.json())
      .then((qr) => setQr(qr.url));
  }, []);

  return (
    <div className="DiscountDemo">
      <main >
        <Container>


          <Row>
            <Col xs={8} md={8} lg={8} style={{ textAlign: "right" }}>
              <Image src={news_lt} className="img-fit" fluid></Image>

            </Col>
            <Col style={{ textAlign: "right" }}>
              <Image src={news_rt} className="img-fit" fluid></Image>

            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={8} style={{ textAlign: "left" }}>
              <Image src={news_l} className="img-scale" fluid></Image>

            </Col>
            <Col xs={12} md={12} lg={4} style={{ textAlign: "right" }}>
              <Row className="p-5" style={{ borderColor: "var(--dark-blue-grey)" }}>
                <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 0 }} style={{ textAlign: "center" }}>

                  <Image src={news_dis} className="img-scale" fluid></Image>
                </Col>

                <Col xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
                  <QRCode value={REACT_APP_QR_URL + "/discount-offer"} size={128} />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
                  <Image src={news_rb} className="img-scale"></Image>
                </Col>
              </Row>


            </Col>

          </Row>


          <p>{!qr ? "Loading..." : qr}</p>
        </Container>

      </main>
    </div>
  );
}

export default DiscountDemo;