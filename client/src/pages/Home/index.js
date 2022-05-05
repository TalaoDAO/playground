import React from 'react';
import { Image } from 'react-bootstrap';
import {
  appstoreImg, googlePlayImg, talIllustrationImg,
} from '../../assets/images';
import StepIllustration from './StepIllustration';
import ActivateSection from './ActivateSection';
import UseCases from '../../parts/UseCases';
import Container from '../../components/common/Container';
import { REACT_APP_NODE_LOCAL, } from '../../constants';
import './styles.scss';


function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <main className="home-page">
      <div className="illustration-parts bg-blue-dark">
        <Container>
          <div className="d-flex">
            <div className="illustration-wrapper">
              <div className="mb-18">
                <h1 className="text-white text-heading1 mb-0">Playground wallet</h1>
                <p className="text-md text-grey mb-0">
                  Talao provides protocols, wallets and innovative decentralized tools to allow businesses to offer customers and avatars services based on their identity, their reputation, their community  and their digital assets.
                </p>
              </div>

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

            <div className="illustration-img-wrapper">
              <Image src={talIllustrationImg} />
            </div>
          </div>
        </Container>

        <div className="step-section">
          <Container>
            <StepIllustration />
          </Container>
        </div>
      </div>

      <ActivateSection />

      <UseCases />
    </main>
  );
}

export default Home;
