import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Button, Row, Col, Card, Image, Modal
} from 'react-bootstrap';


import com_logo_1 from './img/employer/company-logo.png';
import com_logo_2 from './img/employer/company-logo@2x.png';
import com_logo_3 from './img/employer/company-logo@3x.png';

import com_tools_1 from './img/employer/account-tools.png';
import com_tools_2 from './img/employer/account-tools@2x.png';
import com_tools_3 from './img/employer/account-tools@3x.png';



import acc_left_1 from './img/university/account-left.png';
import acc_left_2 from './img/university/account-left@2x.png';
import acc_left_3 from './img/university/account-left@3x.png';

import uni_todo_1 from './img/university/university-todo.png';
import uni_todo_2 from './img/university/university-todo@2x.png';
import uni_todo_3 from './img/university/university-todo@3x.png';


import uni_cal_1 from './img/university/university-calendar.png';
import uni_cal_2 from './img/university/university-calendar@2x.png';
import uni_cal_3 from './img/university/university-calendar@3x.png';


import uni_msg_1 from './img/university/university-message.png';
import uni_msg_2 from './img/university/university-message@2x.png';
import uni_msg_3 from './img/university/university-message@3x.png';

import uni_std_1 from './img/employer/company-users.png';
import uni_std_2 from './img/employer/company-users@2x.png';
import uni_std_3 from './img/employer/company-users@3x.png';


import { Link } from 'react-router-dom';
import QRCode from "react-qr-code";
import EmployerForm from "../components/EmployerForm";
import {useLocation} from 'react-router-dom';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;



function EmployerAccount(props) {
    const [qr, setQr] = React.useState(null);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation();
    console.log(location.state);

    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL + "/qr-url")
            .then((res) => res.json())
            .then((qr) => setQr(qr.url));
    }, []);


    return (
        <div className="EmployerAccount">
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
                        <Row className="align-items-top justify-content-left text-left turquoise-container">
                            <Col xs={12} md={12} lg={3}  >
                                <Image src={acc_left_1}  srcSet={`${acc_left_2} 2x, ${acc_left_3} 3x`} className="img-scale" fluid></Image>
                            </Col>
                            <Col xs={12} md={12} lg={3}>
                            <Row>
                                    <Col className="p-3" >
                                        <Card className=''>

                                            <Card.Body>
                                                <Row>
                                                    <Col className="p-2 align-items-center justify-content-center text-center">
                                                        <Button variant="primary" onClick={handleShow}>Employer Certificate</Button>
                                                        <Modal show={show} onHide={handleClose} className="p-4 align-items-center justify-content-center text-center">
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Download employer certificate</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <EmployerForm state={location.state}/>
                                                            </Modal.Body>

                                                        </Modal>
                                                    </Col>


                                                </Row>
                                                    
                                                <Row>
                                                    <Col className="p-2">
                                                        <Button className="btn" disabled>Inventore Veritatis</Button>
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

export default EmployerAccount;