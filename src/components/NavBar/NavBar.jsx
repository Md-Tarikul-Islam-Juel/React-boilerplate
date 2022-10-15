import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className="NavBar" expand="lg">
      <Container>
        <NavLink to="/" className="NavLink">
          React-icon
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-parent">
          <Nav className="me-auto nav-child-1">
            <NavLink to="/" className="NavLink">
              Home
            </NavLink>
            <NavLink to="/Dashboard" className="NavLink">
              Dashboard
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
