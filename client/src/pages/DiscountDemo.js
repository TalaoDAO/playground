import React from "react";
import ddemo01 from '../images/discount-demo-01.png';
import "../App.css";
import QRCode from "react-qr-code";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Card, Image
} from 'react-bootstrap';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

function DiscountDemo() {
  const [qr, setQr] = React.useState(null);



  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL+"/api/qr-url")
      .then((res) =>  res.json())
      .then((qr) => setQr(qr.url));
  }, []);
  
  return (
    <div className="DiscountDemo">
      <main className="my-5 py-5">
        <Container>
        <QRCode value={REACT_APP_QR_URL+"/discount-offer"} />

          <p>{!qr ?  "Loading..." : qr}</p>
        </Container>

      </main>
    </div>
  );
}

export default DiscountDemo;