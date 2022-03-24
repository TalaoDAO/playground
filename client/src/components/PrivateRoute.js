import React from 'react';
import Login from './auth/Login';

function setSessionToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getSessionToken() {
  let tokenString = sessionStorage.getItem('token');
  if(typeof tokenString !== "undefined" && tokenString !== null && tokenString!==undefined && tokenString!=="undefined"){
    const userToken = tokenString?JSON.parse(tokenString):null;
    return userToken?.token
  }
  return null;
}

const PrivateRoute = ({ children }) => {

  const [token, setToken] = React.useState(getSessionToken());

  React.useEffect(() => {
    sessionStorage.setItem('token', JSON.stringify(token));
    
  }, [token]);


  if(!token) {
    return <Login setToken={setToken} />
  }

  return children;
}

export default PrivateRoute;