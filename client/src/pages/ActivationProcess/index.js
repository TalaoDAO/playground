import React from "react";

import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';



import { Link } from 'react-router-dom';
import ActivationForm from "../../components/ActivationForm";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function ActivationProcess() {


  return (
    <div className="PassActivation">
      <main >
        <Container fluid>

          <Row>
            <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>
              <Row>
                <Col>
                  <div className="section-header-dark">Activate your email pass</div>
                </Col>
              </Row>


              <br />


            </Col>

          </Row>
          <Row className=" text-left">

            <Col xs={12} md={12} lg={{ span: 4, offset: 4 }}>


              <Card className='shadow'>
                <Card.Body>
                  <Row>
                    <Col className="text-center">

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
