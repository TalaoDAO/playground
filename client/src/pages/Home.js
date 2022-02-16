import React from "react";
import logo from "../logo.svg";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button, Row, Col
} from 'react-bootstrap';
import UseCases from "../components/UseCases";
import ManageStrip from "../components/ManageStrip";

function Home() {
  const [data, setData] = React.useState(null);



  React.useEffect(() => {
    fetch("/api")
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="Home">
      <main className="my-5 py-5">
        <Container className="px-0">
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-10 p-lg-10 mx-auto my-10">
              <h1 className="display-4 fw-normal">Playground Wallet</h1>
              <p className="lead fw-normal">Start a decentralized world journey</p>
            </div>
          </div>
        
          <p>{`${new Date().toLocaleString()}`}</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>
            <UseCases/>
            <ManageStrip/>
        </Container>

      </main>
    </div>
  );
}

export default Home;