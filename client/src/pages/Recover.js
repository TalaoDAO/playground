import React from "react";
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";
import PassActivation from "../components/PassActivation";

import recovery_1 from '../pages/img/recover/Image-phone-key-recovery.webp';
import recovery_2 from '../pages/img/recover/Image-phone-key-recovery@2x.webp';
import recovery_3 from '../pages/img/recover/Image-phone-key-recovery@3x.webp';
import recover_1 from '../pages/img/recover/Image-phone-start-using-wallet.webp';
import recover_2 from '../pages/img/recover/Image-phone-start-using-wallet@2x.webp';
import recover_3 from '../pages/img/recover/Image-phone-start-using-wallet@3x.webp';

const { REACT_APP_NODE_LOCAL } = process.env;

function Recover() {
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
                                <div className="title-white-single">Recover your account</div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className="text-center">
                <Col xs={12} md={12} lg={12} >
                    <div className="vertical-line"></div>

                </Col>
                </Row>


                <div id="description" className="text-center">
                    <Row >
                        <Col xs={12} md={12} lg={{ span: 5 }} >
                            <Image src={recover_1} srcSet={`${recover_2} 2x, ${recover_3} 3x`} className="phone-image lg-only" fluid></Image>

                        </Col>
                        <Col xs={12} md={12} lg={{ span: 5 }} >
                            <Row >
                                <Col >
                                    <div className="section-title-dark-single">Recovery phrase</div>
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={12} md={12} lg={{ span: 5 }} >
                            <Image src={recover_1} srcSet={`${recover_2} 2x, ${recover_3} 3x`} className="phone-image sm-only" fluid></Image>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={12} lg={9}>
                            <Row className="text-center light-blue-div" >

                                <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} >
                                    <Row >
                                        <Col >
                                            <div className="section-title-dark-single">Start using your wallet</div>
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

            </Container>
        </main>
    );
}

export default Recover;
