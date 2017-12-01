
import React, { Component } from 'react';
import ReactDOM from 'react-router-dom';
import {
    Button,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { anokoLogo } from '../../images';


export const NavbarMain = props => {
  const { 
    labelL1, linkL1Ref,
    labelL2, linkL2Ref,
    labelL3, linkL3Ref,
    labelL4, linkL4Ref, 
    labelR1, linkR1Ref,
    labelR2, linkR2Ref,
    labelR3, linkR3Ref,
  } = props;
    return (
      <div className="navbar_container">
        <Navbar fixedTop={true} fluid={true} toggleNavKey={1} className="navbar navbar-inverse collapseOnSelect">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img className="anoko-logo-img" src={anokoLogo} /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href={linkL1Ref}>{labelL1}</NavItem>
                <NavItem eventKey={2} href={linkL2Ref}>{labelL2}</NavItem>
                <NavItem eventKey={3} href={linkL3Ref}>{labelL3}</NavItem>
                <NavItem eventKey={4} href={linkL4Ref}>{labelL4}</NavItem>
              </Nav>
              <div className="nav-rightSide">
                <Nav>
                  <NavItem eventKey={1} href={linkR1Ref}>{labelR1}</NavItem>
                  <NavItem eventKey={2} href={linkR2Ref}>{labelR2}</NavItem>
                  <NavItem eventKey={3} href={linkR3Ref}>{labelR3}</NavItem>
                </Nav>
              </div>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
    ReactDOM.render(NavbarMain, mountNode);
}

