import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import Activation from "./pages/Activation";
import Diploma from "./pages/Diploma";
import Student from "./pages/Student";
import Employer from "./pages/Employer";
import Discount from "./pages/Discount";
import Manage from "./pages/Manage";
import Generate from "./pages/Generate";
import Recover from "./pages/Recover";
import University from "./pages/University";
import UniversityAccount from "./pages/UniversityAccount";
import EmployerHome from "./pages/EmployerHome";
import EmployerAccount from "./pages/EmployerAccount";
import DiscountDemo from "./pages/DiscountDemo";
import ActivationProcess from "./pages/ActivationProcess";

import "./App.css";
import "./playground.css";

function App() {

  React.useEffect(() => {
    document.title = "Talao Playground"
  }, [])

  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/activation' element={<Activation/>} />
          <Route exact path='/diploma' element={<Diploma/>} />
          <Route exact path='/student' element={<Student/>} />
          <Route exact path='/employer' element={<Employer/>} />
          <Route exact path='/discount' element={<Discount/>} />
          <Route exact path='/manage' element={<Manage/>} />
          <Route exact path='/generate' element={<Generate/>} />
          <Route exact path='/recover' element={<Recover/>} />
          <Route exact path='/university' element={<University/>} />
          <Route exact path='/uni-account' element={<UniversityAccount/>} />
          <Route exact path='/company' element={<EmployerHome/>} />
          <Route exact path='/com-account' element={<EmployerAccount/>} />
          <Route exact path='/discount-demo' element={<DiscountDemo/>} />
          <Route exact path='/pass-activation' element={<ActivationProcess/>} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
