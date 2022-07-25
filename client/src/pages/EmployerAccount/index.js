import React from "react";

import {
  Container, Button, Row, Col, Image, Modal, Accordion, ListGroup
} from 'react-bootstrap';


import com_logo_1 from '../../assets/images/v1/pages/employer/company-logo.svg';
import com_logo_2 from '../../assets/images/v1/pages/employer/company-logo.svg';
import com_logo_3 from '../../assets/images/v1/pages/employer/company-logo.svg';

import com_tools_1 from '../../assets/images/v1/pages/university/Mobile-top-elements-university.svg';
import com_tools_2 from '../../assets/images/v1/pages/university/Mobile-top-elements-university.svg';
import com_tools_3 from '../../assets/images/v1/pages/university/Mobile-top-elements-university.svg';


import icon_profile from '../../assets/images/v1/pages/university/profile.svg';
import icon_messages from '../../assets/images/v1/pages/university/messages.svg';
import icon_calendar from '../../assets/images/v1/pages/university/calendar.svg';
import icon_files from '../../assets/images/v1/pages/university/files.svg';
import icon_dashboard from '../../assets/images/v1/pages/university/dashboard.svg';
import icon_oval from '../../assets/images/v1/pages/university/Oval.svg';
import icon_arrow from '../../assets/images/v1/pages/university/ic_arrow_forward_24px.svg';


import EmployerForm from "../../components/EmployerForm";
import Calendar from 'react-calendar';
import {useLocation} from 'react-router-dom';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function EmployerAccount(props) {
  const [qr, setQr] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL + "/qr-url")
      .then((res) => res.json())
      .then((qr) => setQr(qr.url));
  }, []);


  return (
    <main >
      <div className="pt-10 pb-63">
        <Container fluid>
          <Row className="">
            <Col xs={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} className="turquoise-container content-padded-uni">
              <Row>
                <Col xs={12} md={12} lg={8} className="text-left">

                  <Image src={com_logo_1} srcSet={`${com_logo_2} 2x, ${com_logo_3} 3x`} className="uni-logo"  fluid></Image>

                </Col>
                <Col xs={12} md={12} lg={4} className="text-center">
                  <Image src={com_tools_1} srcSet={`${com_tools_2} 2x, ${com_tools_3} 3x`} className="uni-tools" fluid></Image>

                </Col>
              </Row>
              <Row >
                <Col xs={12} md={12} lg={3} className="lower">
                  <Accordion defaultActiveKey="0" flush className="lg-only shadow">
                    <Accordion.Item eventKey="0" className="bg-white">
                      <Accordion.Header className="bg-white">
                        <Image src={icon_profile} className="menu-icon" fluid></Image>&nbsp; {(location.state && location.state.givenName)?(location.state.givenName+ ' '+ location.state.familyName):'Janie Doe'}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-double">
                        <ListGroup className="border-0" flush>
                          <ListGroup.Item className="border-0">
                            <Row>
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_dashboard} className="menu-icon" fluid></Image>&nbsp;
                                Dashboard&nbsp;

                              </Col>
                            </Row>

                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row className="text-left">
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_files} className="menu-icon" fluid></Image>&nbsp;
                                Documents&nbsp;

                              </Col>
                            </Row>

                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row>
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_calendar} className="menu-icon" fluid></Image>&nbsp;
                                Calendar&nbsp;

                              </Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row>
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_messages} className="menu-icon" fluid></Image>&nbsp;
                                Messages&nbsp;

                              </Col>
                            </Row>
                          </ListGroup.Item>
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion flush className="sm-only shadow">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="bg-white"><Image src={icon_profile} className="menu-icon" fluid></Image>&nbsp;{(location.state && location.state.givenName)?(location.state.givenName+ ' '+ location.state.familyName):'Janie Doe'}</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup className="border-0" flush>
                          <ListGroup.Item className="border-0">
                            <Row>
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_dashboard} className="menu-icon" fluid></Image>&nbsp;
                                Dashboard&nbsp;

                              </Col>
                            </Row>

                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row className="text-left">
                              <Col xs md lg={8} className="text-left">
                                <Image src={icon_files} className="menu-icon" fluid></Image>&nbsp;
                                Documents&nbsp;

                              </Col>
                              <Col xs md lg={{offset:1, span:3}} className="text-right">
                                <Image src={icon_arrow} className="menu-icon text-right" fluid></Image>

                              </Col>
                            </Row>

                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row>
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_calendar} className="menu-icon" fluid></Image>&nbsp;
                                Calendar&nbsp;

                              </Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row>
                              <Col xs md lg={12} className="text-left">
                                <Image src={icon_messages} className="menu-icon" fluid></Image>&nbsp;
                                Messages&nbsp;

                              </Col>
                            </Row>
                          </ListGroup.Item>
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col xs={12} md={12} lg={3} className="lower">
                  <Row>
                    <Col>
                      <Accordion defaultActiveKey="0" flush className="shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Documents</Accordion.Header>
                          <Accordion.Body className="accordion-single">
                            <Row className="lower">
                              <Col className="text-center ">
                                <Button variant="primary" onClick={handleShow}>Employer Certificate</Button>
                                <Modal show={show} onHide={handleClose} className="align-items-center justify-content-center text-center">
                                  <Modal.Header closeButton>
                                    <Modal.Title>Download employer certificate</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <EmployerForm state={location.state}/>
                                  </Modal.Body>

                                </Modal>
                              </Col>


                            </Row>

                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>

                  <Row className="lower">
                    <Col>
                      <Accordion defaultActiveKey="0" flush className="lg-only shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>To do list</Accordion.Header>
                          <Accordion.Body className="accordion-single">
                            <ListGroup>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion flush className="sm-only shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>To do list</Accordion.Header>
                          <Accordion.Body>
                            <ListGroup>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12} lg={3} className="lower">
                  <Row>
                    <Col>
                      <Accordion defaultActiveKey="0" flush className="lg-only shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Calendar</Accordion.Header>
                          <Accordion.Body className="accordion-single">
                            <Calendar/>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion flush className="sm-only shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Calendar</Accordion.Header>
                          <Accordion.Body>
                            <Calendar className={['c1','c2']}/>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                  <Row className="lower">
                    <Col>
                      <Accordion defaultActiveKey="0" flush className="lg-only shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Messages</Accordion.Header>
                          <Accordion.Body className="accordion-single">
                            <ListGroup>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion flush className="sm-only shadow">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Messages</Accordion.Header>
                          <Accordion.Body>
                            <ListGroup>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <ListGroup.Item className="border-0">
                                <Row >
                                  <Col xs md lg={2}>
                                    <div class="content-check-un"></div>
                                  </Col>
                                  <Col xs md lg={9}>
                                    <div className="content-line"></div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12} lg={3} className="lower">
                  <Accordion defaultActiveKey="0" flush className="lg-only shadow">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Users</Accordion.Header>
                      <Accordion.Body className="accordion-double">
                        <ListGroup>
                          <ListGroup.Item className="border-0">
                            <Row >
                              <Col xs md lg={3}>
                                <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                              </Col>
                              <Col xs md lg={9}>
                                <div className="content-line"></div>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row >
                              <Col xs md lg={3}>
                                <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                              </Col>
                              <Col xs md lg={9}>
                                <div className="content-line"></div>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row >
                              <Col xs md lg={3}>
                                <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                              </Col>
                              <Col xs md lg={9}>
                                <div className="content-line"></div>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row >
                              <Col xs md lg={3}>
                                <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                              </Col>
                              <Col xs md lg={9}>
                                <div className="content-line"></div>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <Row >
                              <Col xs md lg={3}>
                                <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                              </Col>
                              <Col xs md lg={9}>
                                <div className="content-line"></div>
                              </Col>
                            </Row>
                          </ListGroup.Item>

                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion flush className="sm-only shadow">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Users</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup.Item className="border-0">
                          <Row >
                            <Col xs md lg={3}>
                              <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                            </Col>
                            <Col xs md lg={9}>
                              <div className="content-line"></div>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                          <Row >
                            <Col xs md lg={3}>
                              <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                            </Col>
                            <Col xs md lg={9}>
                              <div className="content-line"></div>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                          <Row >
                            <Col xs md lg={3}>
                              <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                            </Col>
                            <Col xs md lg={9}>
                              <div className="content-line"></div>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                          <Row >
                            <Col xs md lg={3}>
                              <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                            </Col>
                            <Col xs md lg={9}>
                              <div className="content-line"></div>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                          <Row >
                            <Col xs md lg={3}>
                              <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                            </Col>
                            <Col xs md lg={9}>
                              <div className="content-line"></div>
                            </Col>
                          </Row>
                        </ListGroup.Item>


                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>



        </Container>
      </div>
    </main>
  );
}

export default EmployerAccount;
