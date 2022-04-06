import React from "react";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col, Image
} from 'react-bootstrap';
import HomeBanner from "../demoComponents/HomeBanner";


const { REACT_APP_NODE_LOCAL } = process.env;

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <main>
        <Container fluid className="position-relative px-0 overflow-hidden" >

          <HomeBanner />
          
        </Container>

      </main>
  );
}

export default Home;