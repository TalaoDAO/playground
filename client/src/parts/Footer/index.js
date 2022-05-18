import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Container from '../../components/common/Container';
import { logoWhiteImg, facebookIcon, twitterIcon, linkedinIcon } from '../../assets/images';
import { REACT_APP_VERSION, ROUTES } from '../../constants';
import './styles.scss';

const Footer = () => (
  <footer className="app-footer" >
    <Container >
      <div className="app-footer__content">
        <div className="app-info">
          <Link className="mb-7 d-flex" to={ROUTES.HOME}>
            <Image src={logoWhiteImg} />
          </Link>

          <p className="mb-0 text-grey">
            © Talao {new Date().getFullYear()} Version: {REACT_APP_VERSION}
          </p>
        </div>

        <div className="app-socials">
          <p className="text-white text-bold text-xl mb-4 text-center text-sm-start">
            Follow us
          </p>

          <div className='footer-normal'>
            <a href="https://twitter.com/Talao_io" target="_blank">
              <Image src={twitterIcon} className="footer-img p-1 footer-normal-img" fluid />
            </a>

            <a href="https://www.linkedin.com/company/talao" target="_blank" >
              <Image src={linkedinIcon} className="footer-img p-1 footer-normal-img" fluid />
            </a>

            <a href="https://www.facebook.com/TalaoDAO/" target="_blank">
              <Image src={facebookIcon} className="footer-img p-1 footer-normal-img" fluid />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
