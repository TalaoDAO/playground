import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Card, Image, Modal
} from 'react-bootstrap';


import uni_logo from './img/university/university-logo.png';
import acc_tools from './img/university/account-tools.png';
import acc_left from './img/university/account-left.png';
import acc_down from './img/university/account-down.png';
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

                                <Image src={uni_logo} className="img-scale" fluid></Image>

                            </Col>
                            <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 azure-container" >
                                <Image src={acc_tools} className="img-scale" fluid></Image>

                            </Col>
                        </Row>
                        <Row className="  align-items-center justify-content-left text-left azure-container">
                            <Col xs={12} md={12} lg={6}>
                                <Image src={acc_left} className="img-fit" fluid></Image>
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <Row>
                                    <Col>
                                        <Card className=''>
                                            <Card.Header className="bg-white">

                                                Documents
                                            </Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col className="p-4 align-items-center justify-content-center text-center">
                                                        <Button variant="primary" onClick={handleShowDiploma}>Diploma</Button>
                                                        <Modal show={showDiploma} onHide={handleCloseDiploma} className="p-4 align-items-center justify-content-center text-center">
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
                                                    <Col className="p-4">
                                                        <Button variant="primary" onClick={handleShowStudent}>Student Card</Button>
                                                        <Modal show={showStudent} onHide={handleCloseStudent} className="p-4 align-items-center justify-content-center text-center">
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
                                                    <Col className="p-4">
                                                        <Button className="btn" disabled>Inventore Veritatis</Button>
                                                    </Col>

                                                </Row>

                                            </Card.Body>
                                        </Card>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image src={acc_down} className="img-scale" fluid></Image>
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