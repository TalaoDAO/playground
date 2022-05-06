import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { arrowSquareRightIcon } from '../../assets/images';
import { ROUTES } from '../../constants';
import Container from '../../components/common/Container';
import './styles.scss';

const howToItems = [
  {
    title: 'How to activate your email pass ?',
    link: ROUTES.ACTIVATION,
  },
  {
    title: 'How to generate your account ?',
    link: ROUTES.GENERATE,
  },
  {
    title: 'How to recover your account ?',
    link: ROUTES.RECOVER,
  },
  {
    title: 'How to download a diploma ?',
    link: ROUTES.DIPLOMA,
  },
  {
    title: 'How to download your student card ?',
    link: ROUTES.STUDENT,
  },
  {
    title: 'How request an employer certificate ?',
    link: ROUTES.EMPLOYER,
  },
  {
    title: 'How to get a discount coupon ?',
    link: ROUTES.DISCOUNT,
  },
  {
    title: 'How to manage your certificates ?',
    link: ROUTES.MANAGE,
  },
  {
    title: 'How to activate your email pass ?',
    link: ROUTES.ACTIVATION
  },
]

const HowToWork = () => {
  return (
    <div className="how-to-works-page">
      <div className="bg-blue-dark py-47">
        <h1 className="mb-0 text-center text-white">
          How does it work ?
        </h1>
      </div>

      <div className="bg-white pt-47 pb-80">
        <Container>
          {
            howToItems.map((item, index) => (
              <div
                key={index}
                className="link-container"
              >
                <p className="link-label">{item.title}</p>
                <Link to={item.link} className="link-indicator">
                  <Image src={arrowSquareRightIcon} />
                </Link>
              </div>
            ))
          }
        </Container>
      </div>
    </div>
  );
};

export default HowToWork;