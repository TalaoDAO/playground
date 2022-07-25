import React from "react";

import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';


import com_logo_1 from '../../assets/images/v1/pages/employer/company-logo.svg';
import com_logo_2 from '../../assets/images/v1/pages/employer/company-logo.svg';
import com_logo_3 from '../../assets/images/v1/pages/employer/company-logo.svg';

import com_tools_1 from '../../assets/images/v1/pages/university/Mobile-top-elements-university.svg';
import com_tools_2 from '../../assets/images/v1/pages/university/Mobile-top-elements-university.svg';
import com_tools_3 from '../../assets/images/v1/pages/university/Mobile-top-elements-university.svg';


import com_acc_1 from '../../assets/images/v1/pages/employer/ic_account_circle.svg';
import com_acc_2 from '../../assets/images/v1/pages/employer/ic_account_circle.svg';
import com_acc_3 from '../../assets/images/v1/pages/employer/ic_account_circle.svg';

import { Link } from 'react-router-dom';
import LoginForm from "../../components/LoginForm";
import { ROUTES } from '../../constants';

import './styles.scss'

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function EmployerHome() {


  return (
    <main >
      <div className="pt-10 pb-63">
        <Container fluid>
          <Row className="">
            <Col xs={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} className="turquoise-container content-padded-uni">
              <Row>
                <Col xs={12} md={12} lg={8} className="justify-diff">

                  <Image src={com_logo_1} srcSet={`${com_logo_2} 2x, ${com_logo_3} 3x`} className="uni-logo"  fluid></Image>

                </Col>
                <Col xs={12} md={12} lg={4} className="text-center">
                  <Image src={com_tools_1} srcSet={`${com_tools_2} 2x, ${com_tools_3} 3x`} className="uni-tools"  fluid></Image>

                </Col>
              </Row>
              <Row className="justify-diff lower">

                <Col xs={12} md={12} lg={12}>
                  <Card >
                    <Card.Body className="account-body text-center">
                      <Row className="" >
                        <Col className="text-center">

                          <Image src={com_acc_1} srcSet={`${com_acc_2} 2x, ${com_acc_3} 3x`} className="icon-account" fluid></Image>

                        </Col>


                      </Row>
                      <Row>
                        <Col className="text-center">

                          <div className="tag-h2-dark">My account</div>

                        </Col>


                      </Row>
                      <Row>
                        <Col className="text-center">
                          <LoginForm next={ROUTES.COMPANY_ACCOUNT} />

                        </Col>

                      </Row>

                    </Card.Body>
                  </Card>

                </Col>
              </Row>
            </Col>
          </Row>



        </Container>
      </div>
    </main>
  );
}

export default EmployerHome;
