import React from 'react';
import styled from 'styled-components';

import {
   Image, Row, Col
} from 'react-bootstrap';

import aps01 from '../assets/images/v1/pages/illustrationUniversityHome.webp';
import aps02 from '../assets/images/v1/pages/illustrationUniversityHome@2x.webp';
import aps03 from '../assets/images/v1/pages/illustrationUniversityHome@3x.webp';

const RightText = styled.div`
  font-size: 96px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

const Wrap =styled.div`
  background-color: #3367b1;
`;

const RightWrap =styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const PassActivation = () => (
  <div  className="position-relative">
      <Wrap>
        <Row className=" text-center">
          <Col xs={12} md={12} lg={{ span: 6 }}  className="text-center">
            <Image src={aps01} srcSet={`${aps02} 2x, ${aps03} 3x`} className="activation-pass-wallet" fluid></Image>
          </Col>
          <Col xs={12} md={12} lg={{ span: 6 }}>
            <RightWrap>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <RightText>University of web design</RightText>
                </Col>

              </Row>
            </RightWrap>
          </Col>
        </Row>
      </Wrap>

  </div>
);

export default PassActivation;
