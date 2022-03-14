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


import create_1 from '../pages/img/generate/create.png';
import create_2 from '../pages/img/generate/create@2x.png';
import create_3 from '../pages/img/generate/create@3x.png';
import phrase_1 from '../pages/img/generate/phrase.png';
import phrase_2 from '../pages/img/generate/phrase@2x.png';
import phrase_3 from '../pages/img/generate/phrase@3x.png';
import start_1 from '../pages/img/generate/start.png';
import start_2 from '../pages/img/generate/start@2x.png';
import start_3 from '../pages/img/generate/start@3x.png';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Generate() {
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
                                    <span className="Title-TAGH1 text-center">Generate your account</span>
                                </Col>

                            </Row>

                        </Col>
                    </Row>


                    <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 justify-content-center align-middle bg-white">

                        <Row className="  align-items-center justify-content-center text-left  p-3" >
                            <Col xs={12} md={12} lg={{ span: 5 }} >
                                <Image src={create_1} srcSet={`${create_2} 2x, ${create_3} 3x`} className="manage-image" fluid></Image>

                            </Col>
                            <Col xs={12} md={12} lg={{ span: 5 }} >
                                <Row >
                                    <Col >
                                        <span className="Title-TAGH2-dark">Reset Wallet</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <span className="Description-TAGUI_L-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
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
                                                <span className="Title-TAGH2-dark">Save your phrase for recovery</span>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <span className="Description-TAGUI_L-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                                            </Col>

                                        </Row>
                                    </Col>
                                    <Col xs={12} md={12} lg={{ span: 6 }} >
                                        <Image src={phrase_1} srcSet={`${phrase_2} 2x, ${phrase_3} 3x`} className="light-blue-image" fluid></Image>

                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                        <Row className="  align-items-center justify-content-center text-left  p-3" >
                            <Col xs={12} md={12} lg={{ span: 5 }} >
                                <Image src={create_1} srcSet={`${create_2} 2x, ${create_3} 3x`} className="manage-image" fluid></Image>

                            </Col>
                            <Col xs={12} md={12} lg={{ span: 5 }} >
                                <Row >
                                    <Col >
                                        <span className="Title-TAGH2-dark">Start using your wallet</span>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <span className="Description-TAGUI_L-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
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

export default Generate;