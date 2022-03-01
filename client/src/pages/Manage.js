import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Image, Card, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import my_certs_1 from '../pages/img/manage/my-certs.png';
import my_certs_2 from '../pages/img/manage/my-certs@2x.png';
import my_certs_3 from '../pages/img/manage/my-certs@3x.png';
import delete_1 from '../pages/img/manage/delete.png';
import delete_2 from '../pages/img/manage/delete@2x.png';
import delete_3 from '../pages/img/manage/delete@3x.png';
import settings_1 from '../pages/img/manage/setting.png';
import settings_2 from '../pages/img/manage/setting@2x.png';
import settings_3 from '../pages/img/manage/setting@3x.png';
import reset_1 from '../pages/img/manage/reset.png';
import reset_2 from '../pages/img/manage/reset@2x.png';
import reset_3 from '../pages/img/manage/reset@3x.png';
import icon_reset_1 from '../pages/img/manage/icon-reset.png';
import icon_reset_2 from '../pages/img/manage/icon-reset@2x.png';
import icon_reset_3 from '../pages/img/manage/icon-reset@3x.png';
import icon_settings_1 from '../pages/img/manage/icon-setting.png';
import icon_settings_2 from '../pages/img/manage/icon-setting@2x.png';
import icon_settings_3 from '../pages/img/manage/icon-setting@3x.png';
import icon_wallet_1 from '../pages/img/manage/icon-wallet.png';
import icon_wallet_2 from '../pages/img/manage/icon-wallet@2x.png';
import icon_wallet_3 from '../pages/img/manage/icon-wallet@3x.png';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function Manage() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL + "/api")
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
                                    <span className="Title-TAGH1 text-center">Manage Certificates</span>
                                </Col>

                            </Row>

                        </Col>
                    </Row>


                    <div id="description" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 justify-content-center align-middle bg-white">

                        <Row >
                            <Col xs={12} md={12} lg={{ span: 5, offset: 1 }}>
                                <Card className='border-0'>
                                    <Card.Header className="bg-white border-0">

                                        <Image src={icon_wallet_1} srcSet={`${icon_wallet_2} 2x, ${icon_wallet_3} 3x`} className="icon-use-case" fluid></Image>
                                    </Card.Header>
                                    <Card.Body className='border-0'>
                                        <Row>
                                            <Col>
                                                <span className="Title-TAGH2-dark">My certificates</span>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <Image src={my_certs_1} srcSet={`${my_certs_2} 2x, ${my_certs_3} 3x`} className="manage-image" fluid></Image>
                                            </Col>

                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={12} lg={{ span: 5 }}>
                                <Card className='border-0'>
                                    <Card.Header className="bg-white border-0">

                                        <Image src={icon_settings_1} srcSet={`${icon_settings_2} 2x, ${icon_settings_3} 3x`} className="icon-use-case" fluid></Image>
                                    </Card.Header>
                                    <Card.Body className='border-0'>
                                        <Row>
                                            <Col>
                                                <span className="Title-TAGH2-dark">Setting</span>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <Image src={settings_1} srcSet={`${settings_2} 2x, ${settings_3} 3x`} className="manage-image" fluid></Image>
                                            </Col>

                                        </Row>

                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={12} lg={{ span: 5, offset: 1 }}>
                                <Card className='border-0'>
                                    <Card.Header className="bg-white border-0">

                                        <Image src={icon_reset_1} srcSet={`${icon_reset_2} 2x, ${icon_reset_3} 3x`} className="icon-use-case" fluid></Image>
                                    </Card.Header>
                                    <Card.Body className='border-0'>
                                        <Row>
                                            <Col>
                                                <span className="Title-TAGH2-dark">Reset Wallet</span>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <Image src={reset_1} srcSet={`${reset_2} 2x, ${reset_3} 3x`} className="manage-image" fluid></Image>
                                            </Col>

                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={12} lg={{ span: 5 }}>
                                <Card className='border-0'>
                                    <Card.Header className="bg-white border-0">

                                        <Image src={icon_wallet_1} srcSet={`${icon_wallet_2} 2x, ${icon_wallet_3} 3x`} className="icon-use-case" fluid></Image>
                                    </Card.Header>
                                    <Card.Body className='border-0'>
                                        <Row>
                                            <Col>
                                                <span className="Title-TAGH2-dark">Delete Certificates</span>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <Image src={delete_1} srcSet={`${delete_2} 2x, ${delete_3} 3x`} className="manage-image" fluid></Image>
                                            </Col>

                                        </Row>

                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>

                    </div>


                    <p>{!data ? "Loading..." : data}</p>

                </Container>
            </main>
        </div>
    );
}

export default Manage;