import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Image, Card, Row, Col
} from 'react-bootstrap';


import my_certs_1 from '../pages/img/manage/Image-phone-manage-my-certificate.svg';
import my_certs_2 from '../pages/img/manage/Image-phone-manage-my-certificate.svg';
import my_certs_3 from '../pages/img/manage/Image-phone-manage-my-certificate.svg';
import delete_1 from '../pages/img/manage/Image-phone-manage-my-certificate-delete.svg';
import delete_2 from '../pages/img/manage/Image-phone-manage-my-certificate-delete.svg';
import delete_3 from '../pages/img/manage/Image-phone-manage-my-certificate-delete.svg';
import settings_1 from '../pages/img/manage/phone-wallet-setting.webp';
import settings_2 from '../pages/img/manage/phone-wallet-setting@2x.webp';
import settings_3 from '../pages/img/manage/phone-wallet-setting@3x.webp';
import reset_1 from '../pages/img/manage/phone-wallet-reset.webp';
import reset_2 from '../pages/img/manage/phone-wallet-reset@2x.webp';
import reset_3 from '../pages/img/manage/phone-wallet-reset@3x.webp';
import icon_reset_1 from '../pages/img/manage/icon-reset-wallet.svg';
import icon_reset_2 from '../pages/img/manage/icon-reset-wallet.svg';
import icon_reset_3 from '../pages/img/manage/icon-reset-wallet.svg';
import icon_settings_1 from '../pages/img/manage/icon-setting.svg';
import icon_settings_2 from '../pages/img/manage/icon-setting.svg';
import icon_settings_3 from '../pages/img/manage/icon-setting.svg';
import icon_wallet_1 from '../pages/img/manage/icon-wallet-mycertificate.svg';
import icon_wallet_2 from '../pages/img/manage/icon-wallet-mycertificate.svg';
import icon_wallet_3 from '../pages/img/manage/icon-wallet-mycertificate.svg';

const { REACT_APP_NODE_LOCAL } = process.env;

function Manage() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL)
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <main>
            <Container fluid className="position-relative  px-0 overflow-hidden">
                <Row className="dark-blue-section text-center">
                    <Col xs={12} md={12} lg={{ span: 6, offset: 3 }} >

                        <Row >
                            <Col>
                                <div className="title-white-single">Manage Certificates</div>
                            </Col>

                        </Row>

                    </Col>
                </Row>


                <div id="description" className="text-center">
                    <Row >
                        <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} className="lower" >
                            <Card className='borderless-card'>
                                <Card.Header className='borderless-card'>

                                    <Image src={icon_wallet_1} srcSet={`${icon_wallet_2} 2x, ${icon_wallet_3} 3x`} className="icon-use-case" fluid></Image>
                                </Card.Header>
                                <Card.Body >
                                    <Row>
                                        <Col>
                                            <span className="tag-h2-dark">My certificates</span>
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
                        <Col xs={12} md={12} lg={{ span: 5 }} className="lower" >
                            <Card className='borderless-card'>
                                <Card.Header className='borderless-card'>

                                    <Image src={icon_settings_1} srcSet={`${icon_settings_2} 2x, ${icon_settings_3} 3x`} className="icon-use-case" fluid></Image>
                                </Card.Header>
                                <Card.Body >
                                    <Row>
                                        <Col>
                                            <span className="tag-h2-dark">Setting</span>
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
                        <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} className="lower" >
                            <Card className='borderless-card'>
                                <Card.Header className='borderless-card'>

                                    <Image src={icon_reset_1} srcSet={`${icon_reset_2} 2x, ${icon_reset_3} 3x`} className="icon-use-case" fluid></Image>
                                </Card.Header>
                                <Card.Body >
                                    <Row>
                                        <Col>
                                            <span className="tag-h2-dark">Reset Wallet</span>
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
                        <Col xs={12} md={12} lg={{ span: 5 }} className="lower" >
                            <Card className='borderless-card'>
                                <Card.Header className='borderless-card'>

                                    <Image src={icon_wallet_1} srcSet={`${icon_wallet_2} 2x, ${icon_wallet_3} 3x`} className="icon-use-case" fluid></Image>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <span className="tag-h2-dark">Delete Certificates</span>
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

            </Container>
        </main>
    );
}

export default Manage;