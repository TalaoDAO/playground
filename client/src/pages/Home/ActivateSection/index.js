import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import {
  activateEmailImg,
  appstoreImg,
  cubeSeparationImg,
  downloadImg,
  googlePlayImg,
  mobileIllustrationImg,
  shieldImg,
} from '../../../assets/images';
import './styles.scss';

const ActivateSection = () => {
  return (
    <div className="activate-account-section bg-white">
      <Container>
        <div className="d-flex align-items-center justify-content-between mb-83">
          <Image src={mobileIllustrationImg} className="mobile-illustration-img" />
          <div className="app-store-description">
            <Image className="mb-10" src={downloadImg} />
            <h3 className="text-blue-dark mb-3 text-center text-md-start">Download Talao wallet</h3>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start">
              <a target="_blank"
                 href="https://play.google.com/store/apps/details?id=co.talao.wallet">
                <Image src={googlePlayImg} className="btn-app-store btn-google" />
              </a>
              <a target="_blank"
                 href="https://apps.apple.com/app/talao-wallet/id1582183266#?platform=iphone">
                <Image src={appstoreImg} className="btn-app-store" />
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="flex-1 activate-email-wrapper">
            <Image src={shieldImg} className="mb-12" />
            <h3 className="text-blue-dark mb-3">Activate your email pass</h3>
            <Link
              className="activate-btn"
              to={ROUTES.ACTIVATION}
            >
              Activate
            </Link>
          </div>
          <div className="activate-email-img-wrapper">
            <Image src={activateEmailImg} className="activate-email-img" />
          </div>
        </div>
      </Container>

      <Image src={cubeSeparationImg} className="cube-separation" />
    </div>
  );
};

export default ActivateSection;
