import React from "react";
import { Columns, Power, BoxArrowRight } from "react-bootstrap-icons";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import AuthContext from "../AuthContext";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <Navbar expand="lg" className="mb-5">
        <Navbar.Brand href="/">
          <img
            src="https://static.axioms.io/demo/oats.svg"
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
            <AccountMenu />
            <SettingsMenu />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function AccountMenu() {
  const $auth = React.useContext(AuthContext);
  return (
    <div>
      {$auth.session.is_authenticated() ? (
        <Nav.Link href="/logout">
          <Power className="mr-1 mb-1" size={20} />
          Logout
        </Nav.Link>
      ) : (
        <Nav.Link href="/login">
          <BoxArrowRight className="mr-1 mb-1" size={20} />
          Login
        </Nav.Link>
      )}
    </div>
  );
}

function SettingsMenu() {
  const $auth = React.useContext(AuthContext);
  const id_payload = $auth.session.id_payload;

  return (
    <div>
      {$auth.session.is_authenticated() ? (
        <NavDropdown title={ <img src={id_payload.picture } alt={id_payload.given_name} />} id="basic-nav-dropdown">
              <NavDropdown.Item href={$auth.get_user_settings_url()}>
                Update profile
              </NavDropdown.Item>
              <NavDropdown.Item href={$auth.get_user_password_url()}>
                Change Password
              </NavDropdown.Item>
            </NavDropdown>
      ) : false}
    </div>
  );
}
export default Header;
