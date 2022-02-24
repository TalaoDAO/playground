import React from "react";
import ddemo01 from '../images/discount-demo-01.png';
import "../App.css";
import QRCode from "react-qr-code";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function DiscountDemo() {
  const [data, setData] = React.useState(null);



  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL+"/api")
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="DiscountDemo">
      <main className="my-5 py-5">
        <Container className="px-0">
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-transparent">
            <div className="col-md-10 p-lg-10 mx-auto my-10">
              <h1 className="display-4 fw-normal">Get a discount coupon</h1> {REACT_APP_NODE_LOCAL}
            </div>
          </div>

          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-10 p-lg-10 mx-auto my-10">
                <Row><h4 className="display-4 fw-normal">Breaking News</h4></Row>
                
                <Row>
                    <Col xs md lg={{span:6, offset: 3}}>
                    <Card className="xs">
                        <Card.Header className="bg-white"><h2>NFT</h2></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h4>Hope and see</h4>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Image src={ddemo01} fluid></Image>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <QRCode value="http://localhost:3001/discount-offer" />
                                </Col>

                            </Row>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
              

            </div>
        </div>


          <p>{!data ? "Loading..." : data}</p>
        </Container>

      </main>
    </div>
  );
}

export default DiscountDemo;