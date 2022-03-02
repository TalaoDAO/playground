import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DiscountDemo from '../pages/DiscountDemo';
import Login from './auth/Login';

function setSessionToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getSessionToken() {
  let tokenString = sessionStorage.getItem('token');
  if(typeof tokenString !== "undefined" && tokenString !== null && tokenString!==undefined && tokenString!=="undefined"){
    console.log(tokenString);
    
    const userToken = tokenString?JSON.parse(tokenString):null;
    return userToken?.token
  }
  return null;
}

const PrivateRoute = ({ children }) => {

  const [token, setToken] = React.useState(getSessionToken());


  if(!token) {
    return <Login setToken={setToken} />
  }

  return children;
}

export default PrivateRoute;