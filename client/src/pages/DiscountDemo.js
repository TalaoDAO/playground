import React from "react";
import ddemo01 from '../images/discount-demo-01.png';
import "../App.css";
import QRCode from "react-qr-code";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';




import news_header from './img/article/header.png';
import news_footer from './img/article/footer.png';
import news_cats from './img/article/categories.png';

import comment_icon from './img/article/union.svg';
import eye_icon from './img/article/eye.svg';


import art01 from './img/article/article.webp';
import art02 from './img/article/article@2x.webp';
import art03 from './img/article/article@3x.webp';



import mon01 from './img/article/monkey-nft.webp';
import mon02 from './img/article/monkey-nft@2x.webp';
import mon03 from './img/article/monkey-nft@3x.webp';



const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WALLET_LINK } = process.env;

function DiscountDemo() {
  const [qr, setQr] = React.useState(null);



  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL + "/qr-url")
      .then((res) => res.json())
      .then((qr) => setQr(qr.url));
  }, []);

  return (
    <main >
      <Container className="shadow px-0 ">
          <Row className="px-0">
            <Col xs={12} md={12} lg={12}>
              <Image src={news_header} className="img-fit" fluid></Image>

            </Col>
            
          </Row>

        <div className="discount-box ">

          

          <Row className="text-center">
            <Col xs={12} md={12} lg={{span:7}}>
              <Row>
                <Col>
                  <div className="discount-title">Passport for a decentralized world</div>
                </Col>
              </Row>
              <Row className="text-left">
                <div className="discount-info">
                  {new Date().toLocaleDateString()}
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <Image src={comment_icon} className="discount-sub-icons" fluid></Image>
                  &nbsp;
                  01
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <Image src={eye_icon} className="discount-sub-icons" fluid></Image>
                  &nbsp;
                  301
                </div>

              </Row>
              <Row className="discount-separation-top">
                <Col>
                  <Image src={art01} srcSet={`${art02} 2x, ${art03} 3x`} className="discount-article-img" fluid></Image>


                </Col>

              </Row>
              <Row className="discount-separation-top">
                <Col className="discount-article">

                  <p>
                    The decentralized world of Web3 and open Metaverse is upsetting the relationship between platforms and their users. Platforms lose control of data and users are only recognized by their address on the local blockchain.

                  </p>
                  <p>
                    The sovereign identity is then absent from the exchanges and it is the community which takes over, the community of a game or the Twitter community of the artist which proves the authenticity of the work linked to the NFT.

                  </p>
                  <p>

                    But what happens if you leave your community, what happens if the tweet is deleted?

                  </p>

                  <p>
                    For data it’s even worse, some try to put them in NFTs but not everything is moneyable and transferable. A certificate of professional experience or a loyalty card, whether attached to a user or to his avatar in a Metaverse, has nothing to do with a token.

                  </p>

                  <p>
                    There is therefore a lack, an approach that allows us to reconstitute a support for what we need to keep with us in this new decentralized world.

                  </p>

                </Col>

              </Row>
            </Col>
            <Col xs={12} md={12} lg={{span:4,offset:1}}>
              <Row className="text-center">
                <Col>
                  <Row className="text-center">
                    <Col>
                      <div className="discount-perc">15%</div>
                    </Col>
                  </Row>
                  <Row >
                    <Col className="text-center">
                      <div className="discount-perc-sub">Discount</div>
                    </Col>
                  </Row>

                </Col>
                <Col className="text-center">
                  <div className="lg-only">
                      <QRCode value={REACT_APP_QR_URL + "/discount-offer"+qr} size={128} />
                    </div>
                    <div className="sm-only">
                      <Button className="btn-dark-submit " variant="primary" href={REACT_APP_WALLET_LINK + encodeURIComponent(REACT_APP_QR_URL + "/discount-offer" + qr)}>Click to add to wallet</Button>
                    </div>
                </Col>
              </Row>
              <Row className="discount-separation-top">
                <Col>
                <Image src={mon01} srcSet={`${mon02} 2x, ${mon03} 3x`} className="discount-monkey-img" fluid></Image>
                </Col>
              </Row>

              <Row>
              <Col xs={12} md={12} lg={12} className="discount-separation-top">
                <Image src={news_cats} className="img-fit" fluid></Image>

              </Col>
              
            </Row>


            </Col>
          </Row>
          


        </div>
        <Row className="p-0">
            <Col xs={12} md={12} lg={12}>
              <Image src={news_footer} className="img-fit" fluid></Image>

            </Col>
            
          </Row>

      </Container>

    </main>
  );
}

export default DiscountDemo;