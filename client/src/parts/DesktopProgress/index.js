import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Container from '../../components/common/Container';
import './styles.scss';

const DesktopProgress = ({
  progressItems = [],
  link = '#',
}) => {
  return (
    <div className="bg-white pt-70 pb-90">
      <Container>
        <h2 className="text-blue-dark text-center mb-21">From your desktop</h2>

        <div className="desktop-progress">
          {
            progressItems.map((item, index) => (
              <div className="desktop-progress-step" key={index}>
                <div className="desktop-progress-step__header">
                  <p className="step-index">{index + 1}.</p>
                  <p className="step-label">{item.title}</p>
                </div>

                <Image src={item.img} className="desktop-progress-step__img" />
              </div>
            ))
          }
        </div>

        <div className="d-flex-center">
          <Link className="link-btn" to={link}>
            START DEMO
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default DesktopProgress;
