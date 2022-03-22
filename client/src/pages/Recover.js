import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Image, Card, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";
import PassActivation from "../components/PassActivation";

import recovery_1 from '../pages/img/recover/recovery.png';
import recovery_2 from '../pages/img/recover/recovery@2x.png';
import recovery_3 from '../pages/img/recover/recovery@3x.png';
import recover_1 from '../pages/img/recover/start.png';
import recover_2 from '../pages/img/recover/start@2x.png';
import recover_3 from '../pages/img/recover/start@3x.png';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Recover() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL)
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="Manage">
            <main>
                <Container >
                    <Row className="p-3 bg-playground text-white align-content-center">
                        <Col xs={12} md={12} lg={{ span: 8, offset: 2 }} className="justify-content-center">

                            <Row >
                                <Col style={{ marginTop: "100px", marginBottom: "100px" }}>
                                    <span className="tag-h1 text-center">Recover your account</span>
                                </Col>

                            </Row>

                        </Col>
                    </Row>


                    <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 justify-content-center align-middle bg-white">

                        <Row className="  align-items-center justify-content-center text-left  p-3" >
                            <Col xs={12} md={12} lg={{ span: 5 }} >
                                <Image src={recover_1} srcSet={`${recover_2} 2x, ${recover_3} 3x`} className="manage-image" fluid></Image>

                            </Col>
                            <Col xs={12} md={12} lg={{ span: 5 }} >
                                <Row >
                                    <Col >
                                        <span className="tag-h2-dark">Recovery phrase</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <span className="subtitle-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} lg={10}>
                                <Row className="  align-items-center justify-content-center text-center light-blue-div p-3" >

                                    <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} >
                                        <Row >
                                            <Col >
                                                <span className="tag-h2-dark">Start using your wallet</span>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <span className="subtitle-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                                            </Col>

                                        </Row>
                                    </Col>
                                    <Col xs={12} md={12} lg={{ span: 6 }} >
                                        <Image src={recovery_1} srcSet={`${recovery_2} 2x, ${recovery_3} 3x`} className="light-blue-image" fluid></Image>

                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    
                    </div>

                    <PassActivation />
                    <UseCases />
                    <ManageStrip />
                    <p>{!data ? "Loading..." : data}</p>

                </Container>
            </main>
        </div>
    );
}

export default Recover;