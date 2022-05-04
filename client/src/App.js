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
import { ROUTES } from "./constants/routes";
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
          <Route exact path={ROUTES.INDEX} element={<Home/>} />
          <Route exact path={ROUTES.HOME} element={<Home/>} />
          <Route exact path={ROUTES.ACTIVATION} element={<Activation/>} />
          <Route exact path={ROUTES.DIPLOMA} element={<Diploma/>} />
          <Route exact path={ROUTES.STUDENT} element={<Student/>} />
          <Route exact path={ROUTES.EMPLOYER} element={<Employer/>} />
          <Route exact path={ROUTES.DISCOUNT} element={<Discount/>} />
          <Route exact path={ROUTES.MANAGE} element={<Manage/>} />
          <Route exact path={ROUTES.GENERATE} element={<Generate/>} />
          <Route exact path={ROUTES.RECOVER} element={<Recover/>} />
          <Route exact path={ROUTES.UNIVERSITY} element={<University/>} />
          <Route exact path={ROUTES.UNIVERSITY_ACCOUNT} element={<UniversityAccount/>} />
          <Route exact path={ROUTES.COMPANY} element={<EmployerHome/>} />
          <Route exact path={ROUTES.COMPANY_ACCOUNT} element={<EmployerAccount/>} />
          <Route exact path={ROUTES.DISCOUNT_DEMO} element={<DiscountDemo/>} />
          <Route exact path='/pass-activation' element={<ActivationProcess/>} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
