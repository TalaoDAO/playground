import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Activation from '../pages/Activation';
import Diploma from '../pages/Diploma';
import Student from '../pages/Student';
import Employer from '../pages/Employer';
import Discount from '../pages/Discount';
import Manage from '../pages/Manage';
import DiscountDemo from '../pages/DiscountDemo';
import PrivateRoute from "./PrivateRoute";
import Generate from '../pages/Generate';
import Recover from '../pages/Recover';
import University from '../pages/University';
import UniversityAccount from '../pages/UniversityAccount';
import EmployerHome from '../pages/EmployerHome';
import EmployerAccount from '../pages/EmployerAccount';
import ActivationProcess from '../pages/ActivationProcess';

const Main = () => {

  return (
    <div className='content-container'>
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/activation' element={<Activation/>}></Route>
        <Route exact path='/diploma' element={<Diploma/>}></Route>
        <Route exact path='/student' element={<Student/>}></Route>
        <Route exact path='/employer' element={<Employer/>}></Route>
        <Route exact path='/discount' element={<Discount/>}></Route>
        <Route exact path='/manage' element={<Manage/>}></Route>
        <Route exact path='/generate' element={<Generate/>}></Route>
        <Route exact path='/recover' element={<Recover/>}></Route>
        <Route exact path='/university' element={<University/>}></Route>
        <Route exact path='/uni-account' element={<UniversityAccount/>}></Route>
        <Route exact path='/company' element={<EmployerHome/>}></Route>
        <Route exact path='/com-account' element={<EmployerAccount/>}></Route>
        <Route exact path='/discount-demo' element={<DiscountDemo/>}></Route>
        <Route exact path='/pass-activation' element={<ActivationProcess/>}></Route>
    </Routes>
    </div>
  );
}

export default Main;