import React from "react";
import logo from "./logo.svg";
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";


import "./App.css";
import "./playground.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
