import React from 'react';
import UseCases from '../../parts/UseCases';
import { REACT_APP_NODE_LOCAL, ROUTES } from '../../constants';
import DesktopProgress from '../../parts/DesktopProgress';

import step011 from '../../pages/img/employment/Image-employer-certificate-acces-account.webp';
import step021 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode.webp';
import step031 from '../../pages/img/employment/Image-employer-certificate-request.webp';
import step041 from '../../pages/img/employment/Image-employer-certificate-complete-form.webp';
import step051 from '../../pages/img/employment/Image-employer-certificate-scan-qrcode-request.webp';
import step061 from '../../pages/img/employment/Image-employer-certificate-accept-certificate-wallet.svg';
import { acceptEmployerCertificate } from '../../assets/images';

const downloadSteps = [
  {
    img: step011,
    title: 'Request access <br/> to your account',
  },
  {
    img: step021,
    title: 'Scan the <br/>  QR Code',
  },
  {
    img: step031,
    title: 'Request your diploma <br/>  certificate',
  },
  {
    img: step041,
    title: 'Complete <br/>  the form',
  },
  {
    img: step051,
    title: 'Scan <br/>  the QR Code',
  },
  {
    img: acceptEmployerCertificate,
    title: 'Accept the new <br/>  certificate',
  },
];

function Employer() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Employer ">
      <main >
        <div className="bg-blue-dark py-47">
          <h1 className="mb-0 text-center text-white">
            Request an employer certificate
          </h1>
        </div>

        <DesktopProgress progressItems={downloadSteps} link={ROUTES.COMPANY} />

        <UseCases />

      </main>
    </div>
  );
}

export default Employer;
