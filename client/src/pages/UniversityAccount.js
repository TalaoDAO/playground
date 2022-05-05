import React from "react";
import {
    Container, Button, Row, Col, Image, Modal, Accordion, ListGroup
} from 'react-bootstrap';

import uni_logo_1 from './img/university/university-logo.svg';
import uni_logo_2 from './img/university/university-logo.svg';
import uni_logo_3 from './img/university/university-logo.svg';

import acc_tools_1 from './img/university/Mobile-top-elements-university.svg';
import acc_tools_2 from './img/university/Mobile-top-elements-university.svg';
import acc_tools_3 from './img/university/Mobile-top-elements-university.svg';

import icon_profile from './img/university/profile.svg';
import icon_messages from './img/university/messages.svg';
import icon_calendar from './img/university/calendar.svg';
import icon_files from './img/university/files.svg';
import icon_dashboard from './img/university/dashboard.svg';
import icon_oval from './img/university/Oval.svg';
import icon_arrow from './img/university/ic_arrow_forward_24px.svg';
import logoutIcon from './img/university/logout.svg';
import infoIcon from './img/university/info.svg';
import loadMoreIcon from './img/university/loadMore.svg';



import DiplomaForm from "../components/DiplomaForm";
import StudentForm from "../components/StudentForm";
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;


function UniversityAccount() {
    const [qr, setQr] = React.useState(null);
    const [showDiploma, setShowDiploma] = React.useState(false);

    const handleCloseDiploma = () => setShowDiploma(false);
    const handleShowDiploma = () => setShowDiploma(true);

    const [showStudent, setShowStudent] = React.useState(false);

    const handleCloseStudent = () => setShowStudent(false);
    const handleShowStudent = () => setShowStudent(true);

    const location = useLocation();

    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL + "/qr-url")
            .then((res) => res.json())
            .then((qr) => setQr(qr.url));
    }, []);

console.log({location})
    return (
        <main >
            <Container fluid>
                <Row className="">
                    <Col xs={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} className="azure-container content-padded-uni">
                        <Row>
                            <Col xs={12} md={12} lg={9} className="text-left">

                                <Image src={uni_logo_1} srcSet={`${uni_logo_2} 2x, ${uni_logo_3} 3x`} className="uni-logo" fluid></Image>

                            </Col>
                            <Col xs={12} md={12} lg={3} className="text-center">
                                <Image src={acc_tools_1} srcSet={`${acc_tools_2} 2x, ${acc_tools_3} 3x`} className="uni-tools" fluid></Image>

                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={12} lg={3} className="lower">
                                <Accordion defaultActiveKey="0" flush className="lg-only shadow">
                                    <Accordion.Item eventKey="0" className="bg-white">
                                        <div className="bg-white ticketHeader">
                                                <span>
                                                    <span className="avatarCircle">
                                                        <Image src={icon_profile} className="avatar-icon" fluid></Image>
                                                    </span>
                                                    <span className="nameText">
                                                        &nbsp; {(location.state && location.state.givenName)?(location.state.givenName+ ' '+ location.state.familyName):'Janie Doe'}
                                                    </span>
                                                </span>
                                                <span  className="connectedBtn">
                                                    Connected 
                                                </span>
                                        </div>
                                        <Accordion.Body className="accordion-double accordionBody">
                                            <ListGroup className="border-0" flush>
                                                <ListGroup.Item className="border-0">
                                                    <Row>
                                                        <Col xs={12} md={12} lg={12} className="text-left">
                                                            <Image src={icon_dashboard} className="menu-icon" fluid></Image>&nbsp;
                                                            Dashboard&nbsp;

                                                        </Col>
                                                    </Row>
                                                    
                                                    </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row className="text-left">
                                                        <Col xs={12} md={12} lg={12} className="text-left">
                                                            <Image src={icon_files} className="menu-icon" fluid></Image>&nbsp;
                                                            Documents&nbsp;

                                                        </Col>
                                                    </Row>
                                               
                                                    </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row>
                                                        <Col xs={12} md={12} lg={12} className="text-left">
                                                            <Image src={icon_calendar} className="menu-icon" fluid></Image>&nbsp;
                                                            Calendar&nbsp;

                                                        </Col>
                                                    </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="border-0">
                                                    <Row>
                                                        <Col xs={12} md={12} lg={12} className="text-left">
                                                            <Image src={icon_messages} className="menu-icon" fluid></Image>&nbsp;
                                                            Messages&nbsp;

                                                        </Col>
                                                    </Row>
                                                    </ListGroup.Item>
                                            </ListGroup>
                                            <div className="logoutWrap">
                                                <img className="logoutIcon" alt="logout icon" src={logoutIcon}/>
                                                <span className="logoutText">Logout</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion flush className="sm-only">
                                    <Accordion.Item eventKey="0">
                                    <Accordion.Header className="bg-white"><Image src={icon_profile} className="menu-icon" fluid></Image>&nbsp;{(location.state && location.state.givenName)?(location.state.givenName+ ' '+ location.state.familyName):'Janie Doe'}</Accordion.Header>
                                        <Accordion.Body>
                                        <ListGroup className="border-0" flush>
                                                <ListGroup.Item className="border-0">
                                                    <Row>
                                                        <Col xs={12} md={12} lg={12} className="text-left">
                                                            <Image src={icon_dashboard} className="menu-icon" fluid></Image>&nbsp;
                                                            Dashboard&nbsp;

                                                        </Col>
                                                    </Row>
                                                    
                                                    </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row className="text-left">
                                                        <Col xs={12} md={12} lg={8} className="text-left">
                                                            <Image src={icon_files} className="menu-icon" fluid></Image>&nbsp;
                                                            Documents&nbsp;

                                                        </Col>
                                                        <Col xs={12} md={12} lg={{offset:1, span:3}} className="text-right">
                                                            <Image src={icon_arrow} className="menu-icon text-right" fluid></Image>

                                                        </Col>
                                                    </Row>
                                               
                                                    </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row>
                                                        <Col xs={12} md={12} lg={12} className="text-left">
                                                            <Image src={icon_calendar} className="menu-icon" fluid></Image>&nbsp;
                                                            Calendar&nbsp;

                                                        </Col>
                                                    </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="border-0">
                                                    <Row>
                                                        <Col xs={12} md={12} lg={12} className="text-left">
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
                                        <Accordion defaultActiveKey="0" flush  className="shadow">
                                            <Accordion.Item eventKey="0">
                                                <div className="bg-white ticketHeader">Documents</div>
                                                <Accordion.Body className="accordion-single">
                                                    <Row className="lower">
                                                        <Col className="text-center ">
                                                            <Button variant="primary" className="action-button" onClick={handleShowDiploma}>Diploma</Button>
                                                            <Modal show={showDiploma} onHide={handleCloseDiploma} className="align-items-center justify-content-center text-center">
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Download my diploma</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <DiplomaForm state={location.state} />
                                                                </Modal.Body>

                                                            </Modal>
                                                        </Col>


                                                    </Row>
                                                    <Row className="lower">
                                                        <Col>
                                                            <Button variant="primary"  className="action-button"  onClick={handleShowStudent}>Student Card</Button>
                                                            <Modal show={showStudent} onHide={handleCloseStudent} className="align-items-center justify-content-center text-center">
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Download my student card</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <StudentForm state={location.state} />
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
                                                <div className="bg-white ticketHeader">
                                                    <span>To do list</span>
                                                    <span className="">
                                                        <Image src={infoIcon} className="infoIcon" fluid></Image>
                                                    </span>
                                                </div>
                                                <Accordion.Body className="accordion-single accordionBody">
                                                    <ListGroup>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                    <div className="showMore">
                                                         <Image src={loadMoreIcon} className="" fluid></Image>   
                                                    </div>
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
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
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
                                                <div className="bg-white ticketHeader">
                                                    <span>Calendar</span>
                                                    <span className="">
                                                        <Image src={infoIcon} className="infoIcon" fluid></Image>
                                                    </span>
                                                </div>
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
                                                <div className="bg-white ticketHeader">
                                                    <span>Messages</span>
                                                    <span className="">
                                                        <Image src={infoIcon} className="infoIcon" fluid></Image>
                                                    </span>
                                                </div>
                                                <Accordion.Body className="accordion-single accordionBody">
                                                    <ListGroup>
                                                    <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                    <div className="showMore">
                                                         <Image src={loadMoreIcon} className="" fluid></Image>   
                                                    </div>
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
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
                                                                    <div className="content-line"></div>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="border-0">
                                                            <Row >
                                                                <Col xs={12} md={12} lg={2}>
                                                                    <div class="content-check-un"></div>
                                                                </Col>
                                                                <Col xs={12} md={12} lg={9}>
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
                                        <div className="bg-white ticketHeader">
                                            <span>Students</span>
                                            <span className="">
                                                <Image src={infoIcon} className="infoIcon" fluid></Image>
                                            </span>
                                        </div>
                                        <Accordion.Body className="accordion-double-2">
                                            <ListGroup>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
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
                                        <Accordion.Header>Students</Accordion.Header>
                                        <Accordion.Body>
                                        <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
                                                            <div className="content-line"></div>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0">
                                                    <Row >
                                                        <Col xs={12} md={12} lg={3}>
                                                            <Image src={icon_oval} className="menu-icon" fluid></Image>&nbsp;
                                                        </Col>
                                                        <Col xs={12} md={12} lg={9}>
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

        </main>
    );
}

export default UniversityAccount;
