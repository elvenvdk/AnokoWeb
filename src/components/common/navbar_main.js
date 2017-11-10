
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


export default class NavbarMain extends Component {
  render() {
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
              <NavItem eventKey={1} href="#">Filter Partners</NavItem>
              <NavItem eventKey={2} href="#">Favorites</NavItem>
              <NavItem eventKey={3} href="#">Profile</NavItem>
            </Nav>
            <div className="nav-rightSide">
              <Nav>
                <NavItem eventKey={1} href="#">Events</NavItem>
                <NavItem eventKey={2} href="#">Discover</NavItem>
                <NavItem eventKey={3} href="#">Community</NavItem>
              </Nav>
            </div>
        </Navbar>
      </div>
    )
    ReactDOM.render(NavbarMain, mountNode);
  }
}

