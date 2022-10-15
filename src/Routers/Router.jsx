import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';

import Protected from './Protected/Protected';

function Router() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogIn() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {isLoggedIn ? (
          <button onClick={handleLogIn}>Log Out</button>
        ) : (
          <button onClick={handleLogIn}>Log In</button>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Dashboard"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;
