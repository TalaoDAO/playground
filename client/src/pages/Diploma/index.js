import React from 'react';
import {
  diplomaAccessAccountImg, diplomaScanQrCodeImg1, diplomaRequestCertificateImg,
  diplomaCompleteImg, diplomaScanQrCodeImg2, acceptCertificateImg,  acceptDiplomaCertificate
} from '../../assets/images';
import DesktopProgress from '../../parts/DesktopProgress';
import UseCases from '../../parts/UseCases';
import './styles.scss';
import {ROUTES} from "../../constants";

const downloadDiplomaSteps = [
  {
    img: diplomaAccessAccountImg,
    title: 'Request access <br/> to your account',
  },
  {
    img: diplomaScanQrCodeImg1,
    title: 'Scan the <br/>  QR Code',
  },
  {
    img: diplomaRequestCertificateImg,
    title: 'Request your diploma <br/>  certificate',
  },
  {
    img: diplomaCompleteImg,
    title: 'Complete <br/>  the form',
  },
  {
    img: diplomaScanQrCodeImg2,
    title: 'Scan <br/>  the QR Code',
  },
  {
    img: acceptDiplomaCertificate,
    title: 'Accept the new <br/>  certificate',
  },
]

const Diploma = () => {
  return (
    <div className="activation-email-page">
      <main >
        <div className="bg-blue-dark py-47">
          <h1 className="mb-0 text-center text-white">
            Download a diploma
          </h1>
        </div>

        <DesktopProgress progressItems={downloadDiplomaSteps} link={ROUTES.UNIVERSITY} />

        <UseCases />
      </main>
    </div>
  );
}

export default Diploma;
