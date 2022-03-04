import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Card, Image, Modal
} from 'react-bootstrap';


import uni_logo_1 from './img/university/university-logo.png';
import uni_logo_2 from './img/university/university-logo@2x.png';
import uni_logo_3 from './img/university/university-logo@3x.png';

import acc_tools_1 from './img/university/account-tools.png';
import acc_tools_2 from './img/university/account-tools@2x.png';
import acc_tools_3 from './img/university/account-tools@3x.png';


import acc_left_1 from './img/university/account-left.png';
import acc_left_2 from './img/university/account-left@2x.png';
import acc_left_3 from './img/university/account-left@3x.png';


import uni_action_1 from './img/university/university-action.png';
import uni_action_2 from './img/university/university-action@2x.png';
import uni_action_3 from './img/university/university-action@3x.png';

import uni_todo_1 from './img/university/university-todo.png';
import uni_todo_2 from './img/university/university-todo@2x.png';
import uni_todo_3 from './img/university/university-todo@3x.png';


import uni_cal_1 from './img/university/university-calendar.png';
import uni_cal_2 from './img/university/university-calendar@2x.png';
import uni_cal_3 from './img/university/university-calendar@3x.png';


import uni_msg_1 from './img/university/university-message.png';
import uni_msg_2 from './img/university/university-message@2x.png';
import uni_msg_3 from './img/university/university-message@3x.png';

import uni_std_1 from './img/university/university-students.png';
import uni_std_2 from './img/university/university-students@2x.png';
import uni_std_3 from './img/university/university-students@3x.png';

import { Link } from 'react-router-dom';
import QRCode from "react-qr-code";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function UniversityAccount() {
    const [qr, setQr] = React.useState(null);
    const [showDiploma, setShowDiploma] = React.useState(false);

    const handleCloseDiploma = () => setShowDiploma(false);
    const handleShowDiploma = () => setShowDiploma(true);

    const [showStudent, setShowStudent] = React.useState(false);

    const handleCloseStudent = () => setShowStudent(false);
    const handleShowStudent = () => setShowStudent(true);


    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL + "/api/qr-url")
            .then((res) => res.json())
            .then((qr) => setQr(qr.url));
    }, []);


    return (
        <div className="UniversityAccount">
            <main >
                <Container>

                    <div className="azure-container">
                        <Row className="azure-container">
                            <Col xs={8} md={8} lg={8} style={{ textAlign: "left" }} className="p-4 azure-container">

                                <Image src={uni_logo_1}  srcSet={`${uni_logo_2} 2x, ${uni_logo_3} 3x`} className="img-scale" fluid></Image>

                            </Col>
                            <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 azure-container" >
                                <Image src={acc_tools_1} srcSet={`${acc_tools_2} 2x, ${acc_tools_3} 3x`}  className="img-scale" fluid></Image>

                            </Col>
                        </Row>
                        <Row className="align-items-top justify-content-left text-left azure-container">
                            <Col xs={12} md={12} lg={3}  >
                                <Image src={acc_left_1}  srcSet={`${acc_left_2} 2x, ${acc_left_3} 3x`} className="img-scale" fluid></Image>
                            </Col>
                            <Col xs={12} md={12} lg={3}>
                            <Row>
                                    <Col className="p-3" >
                                        <Card className=''>
                                            <Card.Header className="bg-white text-left">
                                                <h4>Documents</h4>
                                            </Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col className="p-2align-items-center justify-content-center text-center">
                                                        <Button variant="primary" onClick={handleShowDiploma}>Diploma</Button>
                                                        <Modal show={showDiploma} onHide={handleCloseDiploma} className="align-items-center justify-content-center text-center">
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Download my diploma</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <QRCode value={REACT_APP_QR_URL + "/learning"} size={128} />
                                                            </Modal.Body>

                                                        </Modal>
                                                    </Col>


                                                </Row>
                                                <Row>
                                                    <Col className="p-2">
                                                        <Button variant="primary" onClick={handleShowStudent}>Student Card</Button>
                                                        <Modal show={showStudent} onHide={handleCloseStudent} className="align-items-center justify-content-center text-center">
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Download my student card</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <QRCode value={REACT_APP_QR_URL + "/student"} size={128} />
                                                            </Modal.Body>

                                                        </Modal>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col className="p-2">
                                                        <Button className="btn" disabled>Inventore Veritatis</Button>
                                                    </Col>

                                                </Row>

                                            </Card.Body>
                                        </Card>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        
                                        <Image src={uni_todo_1}  srcSet={`${uni_todo_2} 2x, ${uni_todo_3} 3x`} className="img-scale" fluid></Image>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={12} lg={3}>
                                <Row>
                                    <Col >
                                        <Image src={uni_cal_1}  srcSet={`${uni_cal_2} 2x, ${uni_cal_3} 3x`} className="img-scale" fluid></Image>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        
                                        <Image src={uni_msg_1}  srcSet={`${uni_msg_2} 2x, ${uni_msg_3} 3x`} className="img-scale" fluid></Image>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={12} lg={3} >
                                <Row>
                                    <Col>
                                        <Image src={uni_std_1}  srcSet={`${uni_std_2} 2x, ${uni_std_3} 3x`} className="img-scale" fluid></Image>
                                    </Col>
                                </Row>
                            </Col>
                           
                        </Row>

                    </div>


                    <p>{!qr ? "Loading..." : qr}</p>
                </Container>

            </main>
        </div>
    );
}

export default UniversityAccount;