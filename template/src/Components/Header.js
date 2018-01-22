import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              React-Bootstrap
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="#">Home</NavItem>
            </Nav>
            <Nav>
              <NavItem href="#">About</NavItem>
            </Nav>
            <Nav>
              <NavItem href="#">Other</NavItem>
            </Nav>
             </Navbar>
    );
  }
}
export default Header
