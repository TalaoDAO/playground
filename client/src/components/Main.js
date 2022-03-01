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

const Main = () => {

  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/activation' element={<Activation/>}></Route>
        <Route exact path='/diploma' element={<Diploma/>}></Route>
        <Route exact path='/student' element={<Student/>}></Route>
        <Route exact path='/employer' element={<Employer/>}></Route>
        <Route exact path='/discount' element={<Discount/>}></Route>
        <Route exact path='/manage' element={<Manage/>}></Route>
        <Route exact path='/discount-demo' element={<PrivateRoute><DiscountDemo/></PrivateRoute>}></Route>
    </Routes>
  );
}

export default Main;