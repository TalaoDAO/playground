import React from "react";
import "../App.css";
import manage01i from '../images/manage-01-icon.png';
import manage01 from '../images/manage-01.png';
import manage02i from '../images/manage-02-icon.png';
import manage02 from '../images/manage-02.png';
import manage03i from '../images/manage-03-icon.png';
import manage03 from '../images/manage-03.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Image
  } from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

function Manage() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="Manage">
      <main className="my-5 py-5">
        <Container className="px-0">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-10 p-lg-10 mx-auto my-10">
                <Row><h1 className="display-4 fw-normal">Manage Certificates</h1></Row>
              <Row>
              <p className="lead fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </Row>
              

            </div>
            
          </div>

          <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 justify-content-center align-middle bg-white">
               
                <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
                    <h1>My Certificates</h1>
                </Row>
                <Row className="p-2 ">

                    <Col xs md lg={{span:4, offset:2}} className="text-start align-middle ">
                        <Row >
                            <Col>
                                <Image src={manage01i} height={40} />
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-muted fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </Row>
                    </Col>
                    <Col xs md lg={{span:6}} className="text-start align-middle ">
                            <Image src={manage01} height={400} />
                    </Col>
                    </Row>

                <Row className="position-relative overflow-hidden p-2 p-md-4 m-md-2">
                    <h1>My Wallet Settings</h1>
                </Row>
                <Row className="p-2 ">

                    <Col xs md lg={{span:4, offset:2}} className="text-start align-middle ">
                        <Row >
                            <Col>
                                <Image src={manage02i} height={40} />
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-muted fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </Row>
                    </Col>
                    <Col xs md lg={{span:6}} className="text-start align-middle ">
                            <Image src={manage02} height={400} />
                    </Col>
                </Row>

                <Row className="p-2 ">

                    <Col xs md lg={{span:4, offset:2}} className="text-start align-middle ">
                        <Row >
                            <Col>
                                <Image src={manage03i} height={40} />
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-muted fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </Row>
                    </Col>
                    <Col xs md lg={{span:6}} className="text-start align-middle ">
                            <Image src={manage03} height={400} />
                    </Col>
                </Row>
                  
          </div>


          <p>{!data ? "Loading..." : data}</p>
        
        </Container>
      </main>
    </div>
  );
}

export default Manage;