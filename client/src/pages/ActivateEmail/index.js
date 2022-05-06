import React from 'react';
import {
  acceptEmailCertificate, enterCodeImg, enterInformationImg, scanWalletImg,
} from '../../assets/images';

import DesktopProgress from '../../parts/DesktopProgress';
import UseCases from '../../parts/UseCases';
import {REACT_APP_NODE_LOCAL, ROUTES} from '../../constants';
import './styles.scss';

const ActivateEmailSteps = [
  {
    img: enterInformationImg,
    title: 'Enter <br/> information',
  },
  {
    img: enterCodeImg,
    title: 'Enter your <br/>  code',
  },
  {
    img: scanWalletImg,
    title: 'Scan with your mobile <br/>  wallet',
  },
  {
    img: acceptEmailCertificate,
    title: 'Accept your <br/>  certificate',
  },
]

function Activation() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="activation-email-page">
      <main >
        <div className="bg-blue-dark py-47">
          <h1 className="mb-0 text-center text-white">
            Activate your email pass
          </h1>
        </div>

        <DesktopProgress progressItems={ActivateEmailSteps} link={ROUTES.PASS_ACTIVATION} />

        <UseCases />
      </main>
    </div>
  );
}

export default Activation;
