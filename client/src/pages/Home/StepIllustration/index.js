import React from 'react';
import { Image } from 'react-bootstrap';
import {
  downloadWalletImg, startPlayingImg, activeMailImg, arrowRightImg
} from '../../../assets/images';

import './styles.scss';

const StepIllustration = () => {
  return (
    <div className="illustration-steps">
      <div className="step-card">
        <Image src={downloadWalletImg} className="mb-5" />
        <p className="mb-8 text-blue-dark text-bold">Download Talao wallet</p>
        <p className="text-grey mb-0">Step 1</p>
      </div>
      <Image src={arrowRightImg} className="arrow-icon flex-shrink-0" />
      <div className="step-card">
        <Image src={activeMailImg} className="mb-5" />
        <p className="mb-8 text-blue-dark text-bold">Active your email pass</p>
        <p className="text-grey mb-0">Step 2</p>
      </div>
      <Image src={arrowRightImg} className="arrow-icon flex-shrink-0" />
      <div className="step-card mb-0">
        <Image src={startPlayingImg} className="mb-5" />
        <p className="mb-8 text-blue-dark text-bold">Start playing</p>
        <p className="text-grey mb-0">Step 3</p>
      </div>
    </div>
  );
};

export default StepIllustration;
