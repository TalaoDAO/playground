import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { ROUTES } from '../constants';
import Home from './Home';
import ActivateEmail from './ActivateEmail';
import Diploma from './Diploma';
import Student from './Student';
import Employer from './Employer';
import Discount from './Discount';
import Manage from './Manage';
import Generate from './Generate';
import Recover from './Recover';
import University from './University';
import UniversityAccount from './UniversityAccount';
import EmployerHome from './EmployerHome';
import EmployerAccount from './EmployerAccount';
import DiscountDemo from './DiscountDemo';
import ActivationProcess from './ActivationProcess';
import HowToWork from './HowToWork';

const Routing = () => {
  return (
    <Routes>
      <Route exact path={ROUTES.INDEX} element={<Home />} />
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route exact path={ROUTES.HOW_TO_WORK} element={<HowToWork />} />
      <Route exact path={ROUTES.ACTIVATION} element={<ActivateEmail />} />
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
      <Route exact path={ROUTES.PASS_ACTIVATION} element={<ActivationProcess/>} />
    </Routes>
  );
};

export default Routing;
