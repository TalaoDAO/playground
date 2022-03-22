import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';



import { Link } from 'react-router-dom';
import ActivationForm from "../components/ActivationForm";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function ActivationProcess() {


  return (
    <div className="PassActivation">
      <main >
        <Container>

        <Row>
              <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
                <br />
                <span className="section-header-dark">Download app</span>
                <br />
                

              </Col>

            </Row>
            <Row className="  align-items-center justify-content-left text-left">

              <Col xs={12} md={12} lg={12}>


                <Card className=''>
                  <Card.Body>
                    <Row>
                      <Col className="align-items-center justify-content-center text-center">

                        <ActivationForm />

                      </Col>


                    </Row>

                  </Card.Body>
                </Card>

              </Col>
            </Row>


        </Container>

      </main>
    </div>
  );
}

export default ActivationProcess;