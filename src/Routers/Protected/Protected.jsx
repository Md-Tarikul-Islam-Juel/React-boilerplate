/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';

function Protected({ isLoggedIn, children }) {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default Protected;
