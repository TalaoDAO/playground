import React from 'react';
import UseCases from '../../parts/UseCases';
import DesktopProgress from '../../parts/DesktopProgress';
import { ROUTES, REACT_APP_NODE_LOCAL } from '../../constants';

import diploma011 from '../../assets/images/v1/pages/diploma/Image-diploma-acces-to-your-account.webp';
import diploma021 from '../../assets/images/v1/pages/diploma/Image-diploma-Scan-the-qrcode-.webp';
import diploma031 from '../../assets/images/v1/pages/diploma/Image-diploma-request-diploma-certificate.webp';
import diploma041 from '../../assets/images/v1/pages/diploma/Image-diploma-compte-form.webp';
import diploma051 from '../../assets/images/v1/pages/diploma/Image-diploma-scan-qrcode.webp';
import diploma061 from '../../assets/images/v1/pages/diploma/Image-diploma-accept-news-certificate.svg';
import { acceptStudentCertificate } from '../../assets/images';

const downloadStudentSteps = [
  {
    img: diploma011,
    title: 'Request access <br/> to your account',
  },
  {
    img: diploma021,
    title: 'Scan the <br/>  QR Code',
  },
  {
    img: diploma031,
    title: 'Request your diploma <br/>  certificate',
  },
  {
    img: diploma041,
    title: 'Complete <br/>  the form',
  },
  {
    img: diploma051,
    title: 'Scan <br/>  the QR Code',
  },
  {
    img: acceptStudentCertificate,
    title: 'Accept the new <br/>  certificate',
  },
];

function Student() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="Student ">
      <main>
        <div className="bg-blue-dark py-47">
          <h1 className="mb-0 text-center text-white">
            Download your student card
          </h1>
        </div>

        <DesktopProgress progressItems={downloadStudentSteps} link={ROUTES.UNIVERSITY} />

        <UseCases />
      </main>
    </div>
  );
}

export default Student;
