
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';


export const NavbarMain = props => {
  const { 
    labelL1, linkL1Ref,
    labelL2, linkL2Ref,
    labelL3, linkL3Ref,
    labelR1, linkR1Ref,
    labelR2, linkR2Ref,
    labelR3, linkR3Ref,
  } = props;
    return (
      <div className="navbar_container">
        <Navbar inverse collapseOnSelect className="nav_container">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">ANOKO</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href={linkL1Ref}>{labelL1}</NavItem>
              <NavItem eventKey={2} href={linkL2Ref}>{labelL2}</NavItem>
              <NavItem eventKey={3} href={linkL3Ref}>{labelL3}</NavItem>
            </Nav>
            <div className="nav-rightSide">
              <Nav>
                <NavItem eventKey={1} href={linkR1Ref}>{labelR1}</NavItem>
              <NavItem eventKey={2} href={linkR2Ref}>{labelR2}</NavItem>
              <NavItem eventKey={3} href={linkR3Ref}>{labelR3}</NavItem>
              </Nav>
            </div>
        </Navbar>
      </div>
    )
    ReactDOM.render(NavbarMain, mountNode);
}

