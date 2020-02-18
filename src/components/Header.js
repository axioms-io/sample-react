import React from 'react';
import { Columns, Power, BoxArrowRight } from "react-bootstrap-icons";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://axioms.io/demo/oats.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Oats"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">
              <Columns className="mr-1 mb-1" size={20} />
              Dashboard
            </Nav.Link>
            <Nav.Link href="/logout">
              <Power className="mr-1 mb-1" size={20} />
              Logout
            </Nav.Link>
            <Nav.Link href="/login">
              <BoxArrowRight className="mr-1 mb-1" size={20} />
              Login
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2" class="ml-auto">
                Update profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Change Password
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
