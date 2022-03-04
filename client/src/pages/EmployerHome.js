import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';


import com_logo_1 from './img/employer/company-logo.png';
import com_logo_2 from './img/employer/company-logo@2x.png';
import com_logo_3 from './img/employer/company-logo@3x.png';

import com_tools_1 from './img/employer/account-tools.png';
import com_tools_2 from './img/employer/account-tools@2x.png';
import com_tools_3 from './img/employer/account-tools@3x.png';


import com_acc_1 from './img/employer/company-account.png';
import com_acc_2 from './img/employer/company-account@2x.png';
import com_acc_3 from './img/employer/company-account@3x.png';

import { Link } from 'react-router-dom';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function EmployerHome() {


  return (
    <div className="EmployerHome">
      <main >
        <Container>

          <div className="turquoise-container p-5">
            <Row className="turquoise-container">
              <Col xs={8} md={8} lg={8} style={{ textAlign: "left" }} className="p-4 turquoise-container">

                <Image src={com_logo_1} srcSet={`${com_logo_2} 2x, ${com_logo_3} 3x`} className="img-scale" fluid></Image>

              </Col>
              <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 turquoise-container" >
                <Image src={com_tools_1} srcSet={`${com_tools_2} 2x, ${com_tools_3} 3x`} className="img-scale" fluid></Image>

              </Col>
            </Row>
            <Row className="  align-items-center justify-content-left text-left turquoise-container">

              <Col xs={12} md={12} lg={12}>


                <Card className=''>
                  <Card.Header className="bg-white text-left">
                    <h4>Documents</h4>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col className="align-items-center justify-content-center text-center">

                        <Image src={com_acc_1} srcSet={`${com_acc_2} 2x, ${com_acc_3} 3x`} className="img-fit" fluid></Image>

                      </Col>


                    </Row>
                    <Row>
                      <Col className="p-4">
                        <Link to="/com-account" className="btn btn-primary" >My Account</Link>

                      </Col>

                    </Row>

                  </Card.Body>
                </Card>

              </Col>
            </Row>

          </div>


        </Container>

      </main>
    </div>
  );
}

export default EmployerHome;