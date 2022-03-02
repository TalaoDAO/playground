import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Card, Image, Modal
} from 'react-bootstrap';



import com_logo from './img/employer/company-logo.png';
import com_left from './img/employer/company-left.png';
import com_tools from './img/employer/company-tools.png';
import com_account from './img/employer/company-account.png';

import uni_logo from './img/university/university-logo.png';
import acc_tools from './img/university/account-tools.png';
import acc_left from './img/university/account-left.png';
import acc_down from './img/university/account-down.png';
import { Link } from 'react-router-dom';
import QRCode from "react-qr-code";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function EmployerAccount() {
    const [qr, setQr] = React.useState(null);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL + "/api/qr-url")
            .then((res) => res.json())
            .then((qr) => setQr(qr.url));
    }, []);


    return (
        <div className="EmployerAccount">
            <main >
                <Container>

                    <div className="turquoise-container">
                        <Row className="turquoise-container">
                            <Col xs={8} md={8} lg={8} style={{ textAlign: "left" }} className="p-4 turquoise-container">

                                <Image src={com_logo} className="img-scale" fluid></Image>

                            </Col>
                            <Col style={{ textAlign: "right" }} xs={4} md={4} lg={4} className="p-4 turquoise-container" >
                                <Image src={com_tools} className="img-scale" fluid></Image>

                            </Col>
                        </Row>
                        <Row className="  align-items-center justify-content-left text-left turquoise-container">
                            <Col xs={12} md={12} lg={6}>
                                <Image src={com_left} className="img-fit" fluid></Image>
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
                                                        <Button variant="primary" onClick={handleShow}>Employer Certificate</Button>
                                                        <Modal show={show} onHide={handleClose} className="p-4 align-items-center justify-content-center text-center">
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Download employer certificate</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <QRCode value={REACT_APP_QR_URL + "/employment"} size={128} />
                                                            </Modal.Body>

                                                        </Modal>
                                                    </Col>


                                                </Row>
                                                
                                                <Row>
                                                    <Col className="p-4">
                                                        <Button className="btn" disabled>Inventore Veritatis</Button>
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

                            </Col>
                        </Row>

                    </div>


                    <p>{!qr ? "Loading..." : qr}</p>
                </Container>

            </main>
        </div>
    );
}

export default EmployerAccount;