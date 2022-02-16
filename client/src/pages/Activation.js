import React from "react";
import logo from "../logo.svg";
import "../App.css";
import activation01 from '../images/activation-01.png';
import activation02 from '../images/activation-02.png';
import activation03 from '../images/activation-03.png';
import activation04 from '../images/activation-04.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Image
  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

function Activation() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="Activation">
      <main className="my-5 py-5">
        <Container className="px-0">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-10 p-lg-10 mx-auto my-10">
                <Row><h1 className="display-4 fw-normal">Activate your pass</h1></Row>
              <Row>
              <p className="lead fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </Row>
              <Row>
                  <Col>
                <Button variant="dark">Start Demo</Button>
              </Col>
              </Row>
              <Row style={{padding:20}}>
                  <Col>
                    <Button variant="outline-dark" href="#description">How does it work?</Button>
                </Col>
              </Row>

            </div>
            
          </div>

          <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">
                <div className="col-md-10 p-lg-10 mx-auto my-10">
                    <Row><h1 className="display-4 fw-normal">From your desktop</h1></Row>
                <Row>
                    <Col xs md lg= {{ span: 6, offset: 3 }}>
                        <hr style={{backgroundColor:"black",height:"2px"}}/>
                    </Col>
                </Row>
                
                </div>
              
              <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
                  <Col xs md lg={{span:6}}>
                      <Row >
                          <Col className="text-end" xs md lg={{span:3}}>
                            <h1 className="text-muted">1.</h1>
                          </Col>
                          <Col className="text-start">
                                <h2> Enter your information</h2>
                          </Col>
                      </Row>
                      <Row>
                          <Col >
                            <Image src={activation01} fluid></Image>
                          </Col>
                      </Row>
                      <Row>
                          <Col >
                            <p className="text-muted fs-6"><b>1.</b> First name <b>2.</b> Last name <b>3.</b> E-mail</p>
                          </Col>
                      </Row>
                  </Col>
                  <Col xs md lg={{span:6}}>
                    <Row>
                          <Col className="text-end" xs md lg={{span:3}}>
                            <h1 className="text-muted">2.</h1>
                          </Col>
                          <Col className="text-start">
                                <h2> Enter your code</h2>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="p-lg-10">
                            <Image src={activation02} fluid></Image>
                          </Col>
                      </Row>
                      <Row>
                          <Col >
                            <p className="text-muted fs-6"><b>1.</b> Enter the code you received by email </p>
                          </Col>
                      </Row>
                  </Col>
              </Row>
              <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
                  <Col xs md lg={{span:6}}>
                      <Row >
                            <Col className="text-end" xs md lg={{span:3}}>
                                <h1 className="text-muted">3.</h1>
                            </Col>
                            <Col className="text-start">
                                    <h2> Scan with your mobile wallet</h2>
                            </Col>
                          
                      </Row>
                      <Row>
                          <Col >
                            <Image src={activation03} fluid></Image>
                          </Col>
                      </Row>
                  </Col>
                  <Col xs md lg={{span:6}}>
                    <Row>
                            <Col className="text-end" xs md lg={{span:3}}>
                                <h1 className="text-muted">4.</h1>
                            </Col>
                            <Col className="text-start">
                                    <h2> Accept your certificate</h2>
                            </Col>
                         
                      </Row>
                      <Row>
                          <Col className="p-lg-10">
                            <Image src={activation04} fluid></Image>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </div>


            <Row>
                <Col xs md lg={{span:6,offset:3}}>
                    <Button variant="dark">Start Demo</Button>
                </Col>
            </Row>
            <Row>
                <Col xs md lg={{span:10,offset:1}}>
                    <hr/>
                </Col>
            </Row>


          <UseCases/>
          <ManageStrip/>

          <p>{!data ? "Loading..." : data}</p>
        
        </Container>
      </main>
    </div>
  );
}

export default Activation;